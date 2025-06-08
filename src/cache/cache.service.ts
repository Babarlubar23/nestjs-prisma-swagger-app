import { Injectable, OnModuleInit } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { CommonLoggerService } from '../common/logging/logger.service';

@Injectable()
export class CacheService implements OnModuleInit {
  private client!: RedisClientType;

  constructor(private readonly logger: CommonLoggerService) {}

  async onModuleInit() {
    try {
      this.client = createClient({ url: process.env.REDIS_URL });
      await this.client.connect();
      // Use CommonLoggerService for Redis connection success and URL
      this.logger.withContext(CacheService.name).log('[CacheService] Connected to Redis at ' + process.env.REDIS_URL);
    } catch (err) {
      // Use CommonLoggerService for Redis connection errors
      this.logger.withContext(CacheService.name).error(`[CacheService] Redis connection failed: ${err} URL: ${process.env.REDIS_URL}`);
      this.client = {
        get: async () => null,
        set: async () => undefined,
        connect: async () => undefined,
        // ...other methods as needed
      } as any;
    }
  }

  private makeKey(type: { name: string }, idOrName: number | string): string {
    const domain = type.name.toLowerCase().replace('service', '');
    if (domain === 'owner' || domain === 'owners') {
      if (typeof idOrName === 'number') {
        return `owners:${idOrName}`;
      } else {
        return `owners:name:${idOrName}`;
      }
    } else if (domain === 'pet' || domain === 'pets') {
      if (typeof idOrName === 'number') {
        return `pets:${idOrName}`;
      } else if (typeof idOrName === 'string') {
        // Support composite keys for pets by owner's name (e.g. lastName or lastName:firstName)
        return `pets:ownerName:${idOrName}`;
      }
    }
    throw new Error('Invalid cache domain');
  }

  async get<T>(type: { name: string }, idOrLastName: number | string): Promise<T[] | null> {
    const key = this.makeKey(type, idOrLastName);
    const value = await this.client.get(key);
    // Use CommonLoggerService for cache get debug
    this.logger.withContext(CacheService.name).log(`[CacheService] GET key= ${key} raw value: ${value}`);
    if (!value) return null;
    let parsed: T[];
    try {
      parsed = JSON.parse(value) as T[];
    } catch (err) {
      this.logger.withContext(CacheService.name).error(`[CacheService] Failed to parse value for key= ${key}`, err);
      return null;
    }
    this.logger.withContext(CacheService.name).log(`[CacheService] Parsed value for key= ${key} ${JSON.stringify(parsed)}`);
    return parsed;
  }

  async set<T>(
    type: { name: string },
    idOrLastName: number | string,
    value: T[],
    ttl = 3600,
  ): Promise<void> {
    const key = this.makeKey(type, idOrLastName);
    await this.client.set(key, JSON.stringify(value), { EX: ttl });
  }
}
