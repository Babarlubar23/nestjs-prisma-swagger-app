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
    this.logger.withContext(OwnersService.name).log('Fetching all owners');
    const cached = await this.cache.get<OwnerBasicDto>(this.constructor, 0);
    if (cached) return plainToInstance(OwnerBasicDto, cached);

    // Use PrismaService as PrismaClient
    const owners = await this.prisma.owner.findMany({ include: { pets: true } });
    this.logger.withContext(OwnersService.name).log('Fetched owners from DB', OwnersService.name);
    const mapped = this.mapper.mapArray(owners, Object, OwnerBasicDto);
    this.logger.withContext(OwnersService.name).log('Mapped owners', OwnersService.name);
    await this.cache.set<OwnerBasicDto>(this.constructor, 'all', mapped);
    return mapped;
  }

  async findOne(id: number): Promise<OwnerBasicDto | null> {
    this.logger.withContext(OwnersService.name).log(`Fetching owner with id ${id}`);
    const cached = await this.cache.get<OwnerBasicDto>(this.constructor, id);
    // Debug: log cached value before hydration
    this.logger.withContext(OwnersService.name).log(`[Debug] Cached value for id ${id}:`, JSON.stringify(cached));
    if (cached && cached.length > 0) {
      const hydrated = plainToInstance(OwnerBasicDto, cached)[0];
      // Debug: log hydrated DTO
      this.logger.withContext(OwnersService.name).log(`[Debug] Hydrated DTO for id ${id}:`, JSON.stringify(hydrated));
      return hydrated;
    }

    // Use PrismaService as PrismaClient
    const owner = await this.prisma.owner.findUnique({ where: { id }, include: { pets: true } });
    if (!owner) return null;
    const mapped = this.mapper.map(owner, Object, OwnerBasicDto);
    return mapped;
  }

  async findByName(lastName: string, firstName?: string): Promise<OwnerBasicDto[]> {
    this.logger.withContext(OwnersService.name).log(
      `Fetching owners with lastName=${lastName}, firstName=${firstName}`
    );
    // Optionally cache by lastName only if firstName is not provided
    if (!firstName) {
      const cached = await this.cache.get<OwnerBasicDto>(this.constructor, lastName);
      if (cached) return plainToInstance(OwnerBasicDto, cached);
      const where: Record<string, unknown> = { lastName };
      const owners = await this.prisma.owner.findMany({ where, include: { pets: true } });
      const mapped = this.mapper.mapArray(owners, Object, OwnerBasicDto);
      await this.cache.set<OwnerBasicDto>(this.constructor, lastName, mapped);
      return mapped;
    }
    // If firstName is provided, do not cache (or implement a composite key if desired)
    const where: Record<string, unknown> = { lastName, firstName };
    const owners = await this.prisma.owner.findMany({ where, include: { pets: true } });
    return this.mapper.mapArray(owners, Object, OwnerBasicDto);
  }

  async findFullById(id: number): Promise<OwnerFullDto | null> {
    this.logger.withContext(OwnersService.name).log(`Fetching full owner with id ${id}`);
    // Fetch owner with all pets and each pet's boosters and brendanCane
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
    return this.fullMapper.map(owner, Object, OwnerFullDto);
  }

  async findFullByName(lastName: string, firstName?: string): Promise<OwnerFullDto[]> {
    this.logger.withContext(OwnersService.name).log(
      `Fetching full owners with lastName=${lastName}, firstName=${firstName}`
    );
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
    return this.fullMapper.mapArray(owners, Object, OwnerFullDto);
  }
}
