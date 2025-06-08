import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CacheService } from '../cache/cache.service';
import { OwnerBasicDto } from './dto/owner-basic.dto';
import { createOwnerMapper } from './owner.mapper';
import { OwnerFullDto } from './dto/owner-full.dto';
import { createOwnerFullMapper } from './owner-full.mapper';
import { CommonLoggerService } from '../common/logging/logger.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class OwnersService {
  private readonly mapper = createOwnerMapper();
  private readonly fullMapper = createOwnerFullMapper();
  constructor(
    private prisma: PrismaService,
    private cache: CacheService,
    private readonly logger: CommonLoggerService,
  ) {}

  async findAll(): Promise<OwnerBasicDto[]> {
    this.logger.withContext(OwnersService.name).log('Fetching all owners (no cache)');
    const owners = await this.prisma.owner.findMany({ include: { pets: true } });
    this.logger
      .withContext(OwnersService.name)
      .log('[Debug] OwnerBasicDto[] for all from DB:', JSON.stringify(owners));
    const mapped = this.mapper.mapArray(owners, Object, OwnerBasicDto);
    this.logger
      .withContext(OwnersService.name)
      .log('[Debug] Mapped OwnerBasicDto[] for all:', JSON.stringify(mapped));
    return mapped;
  }

  async findOne(id: number): Promise<OwnerBasicDto | null> {
    this.logger.withContext(OwnersService.name).log(`Fetching owner with id ${id}`);
    const cached = await this.cache.get<OwnerBasicDto>(OwnersService, id);
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] Cached value for id ${id}:`, JSON.stringify(cached));
    if (cached && cached.length > 0) {
      const hydrated = plainToInstance(OwnerBasicDto, cached)[0];
      this.logger
        .withContext(OwnersService.name)
        .log(`[Debug] Hydrated DTO for id ${id} from cache:`, JSON.stringify(hydrated));
      return hydrated;
    }

    // Use PrismaService as PrismaClient
    const owner = await this.prisma.owner.findUnique({ where: { id }, include: { pets: true } });
    if (!owner) return null;
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] OwnerBasicDto for id ${id} from DB:`, JSON.stringify(owner));
    const mapped = this.mapper.map(owner, Object, OwnerBasicDto);
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] Mapped OwnerBasicDto for id ${id}:`, JSON.stringify(mapped));
    await this.cache.set<OwnerBasicDto>(OwnersService, id, [mapped]);
    return mapped;
  }

  async findByName(lastName: string, firstName?: string): Promise<OwnerBasicDto[]> {
    this.logger
      .withContext(OwnersService.name)
      .log(`Fetching owners with lastName=${lastName}, firstName=${firstName}`);
    const cacheKey = `lastName:${lastName}`;
    const cached = await this.cache.get<OwnerBasicDto>(OwnersService, cacheKey);
    if (cached) {
      const hydrated = plainToInstance(OwnerBasicDto, cached);
      this.logger
        .withContext(OwnersService.name)
        .log(
          `[Debug] Hydrated OwnerBasicDto[] for ${cacheKey} from cache:`,
          JSON.stringify(hydrated),
        );
      if (firstName) {
        const filtered = hydrated.filter((o) => o.firstName === firstName);
        this.logger
          .withContext(OwnersService.name)
          .log(
            `[Debug] Filtered OwnerBasicDto[] for ${cacheKey} with firstName=${firstName}:`,
            JSON.stringify(filtered),
          );
        // If cache hit but no match for firstName, do not query DB, just return []
        return filtered;
      }
      return hydrated;
    }
    // Cache miss: query DB by lastName only
    const where: Record<string, unknown> = { lastName };
    const owners = await this.prisma.owner.findMany({ where, include: { pets: true } });
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] OwnerBasicDto[] for ${cacheKey} from DB:`, JSON.stringify(owners));
    const mapped = this.mapper.mapArray(owners, Object, OwnerBasicDto);
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] Mapped OwnerBasicDto[] for ${cacheKey}:`, JSON.stringify(mapped));
    await this.cache.set<OwnerBasicDto>(OwnersService, cacheKey, mapped);
    if (firstName) {
      const filtered = mapped.filter((o) => o.firstName === firstName);
      this.logger
        .withContext(OwnersService.name)
        .log(
          `[Debug] Filtered OwnerBasicDto[] for ${cacheKey} with firstName=${firstName} (from DB):`,
          JSON.stringify(filtered),
        );
      return filtered;
    }
    return mapped;
  }

  async findFullById(id: number): Promise<OwnerFullDto | null> {
    this.logger.withContext(OwnersService.name).log(`Fetching full owner with id ${id}`);
    const owner = await this.prisma.owner.findUnique({
      where: { id },
      include: {
        pets: {
          include: {
            boosters: true,
            brendanCane: true,
            owner: true,
          },
        },
      },
    });
    if (!owner) return null;
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] OwnerFullDto for id ${id} from DB:`, JSON.stringify(owner));
    const mapped = this.fullMapper.map(owner, Object, OwnerFullDto);
    this.logger
      .withContext(OwnersService.name)
      .log(`[Debug] Mapped OwnerFullDto for id ${id}:`, JSON.stringify(mapped));
    return mapped;
  }

  async findFullByName(lastName: string, firstName?: string): Promise<OwnerFullDto[]> {
    this.logger
      .withContext(OwnersService.name)
      .log(`Fetching full owners with lastName=${lastName}, firstName=${firstName}`);
    const where: Record<string, unknown> = { lastName };
    if (firstName) where.firstName = firstName;
    const owners = await this.prisma.owner.findMany({
      where,
      include: {
        pets: {
          include: {
            boosters: true,
            brendanCane: true,
            owner: true,
          },
        },
      },
    });
    this.logger
      .withContext(OwnersService.name)
      .log(
        `[Debug] OwnerFullDto[] for lastName=${lastName}, firstName=${firstName} from DB:`,
        JSON.stringify(owners),
      );
    const mapped = this.fullMapper.mapArray(owners, Object, OwnerFullDto);
    this.logger
      .withContext(OwnersService.name)
      .log(
        `[Debug] Mapped OwnerFullDto[] for lastName=${lastName}, firstName=${firstName}:`,
        JSON.stringify(mapped),
      );
    return mapped;
  }
}
