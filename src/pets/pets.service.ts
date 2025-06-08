import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CacheService } from '../cache/cache.service';
import { PetBasicDto } from './dto/pet-basic.dto';
import { PetFullDto } from './dto/pet-full.dto';
import { createPetMapper } from './pet.mapper';
import { createPetFullMapper } from './pet-full.mapper';
import { CommonLoggerService } from '../common/logging/logger.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class PetsService {
  private readonly mapper = createPetMapper();
  private readonly fullMapper = createPetFullMapper();
  constructor(
    private prisma: PrismaService,
    private cache: CacheService,
    private readonly logger: CommonLoggerService,
  ) {}

  async findAll(): Promise<PetBasicDto[]> {
    this.logger.withContext(PetsService.name).log('Fetching all pets (no cache)');
    const pets = await this.prisma.pet.findMany({ include: { owner: true } });
    const mapped = this.mapper.mapArray(pets, Object, PetBasicDto);
    this.logger
      .withContext(PetsService.name)
      .log('[Debug] PetBasicDto[] from DB:', JSON.stringify(mapped));
    return mapped;
  }

  async findOne(id: number): Promise<PetBasicDto | null> {
    this.logger.withContext(PetsService.name).log(`Fetching pet with id ${id}`);
    const cacheKey = `pet:id:${id}`;
    const cached = await this.cache.get<PetBasicDto>(this.constructor, cacheKey);
    if (cached && cached.length > 0) {
      const hydrated = plainToInstance(PetBasicDto, cached)[0];
      this.logger
        .withContext(PetsService.name)
        .log(`[Debug] Hydrated PetBasicDto for id ${id} from cache:`, JSON.stringify(hydrated));
      return hydrated;
    }
    const pet = await this.prisma.pet.findUnique({ where: { id }, include: { owner: true } });
    if (!pet) return null;
    const mapped = this.mapper.map(pet, Object, PetBasicDto);
    this.logger
      .withContext(PetsService.name)
      .log(`[Debug] PetBasicDto for id ${id} from DB:`, JSON.stringify(mapped));
    await this.cache.set<PetBasicDto>(this.constructor, cacheKey, [mapped]);
    return mapped;
  }

  async findByOwnerId(ownerId: number): Promise<PetBasicDto[]> {
    this.logger.withContext(PetsService.name).log(`Fetching pets for ownerId=${ownerId}`);
    const cacheKey = `owner:id:${ownerId}`;
    const cached = await this.cache.get<PetBasicDto>(this.constructor, cacheKey);
    if (cached) {
      const hydrated = plainToInstance(PetBasicDto, cached);
      this.logger
        .withContext(PetsService.name)
        .log(
          `[Debug] Hydrated PetBasicDto[] for ownerId ${ownerId} from cache:`,
          JSON.stringify(hydrated),
        );
      return hydrated;
    }
    const pets = await this.prisma.pet.findMany({ where: { ownerId }, include: { owner: true } });
    const mapped = this.mapper.mapArray(pets, Object, PetBasicDto);
    this.logger
      .withContext(PetsService.name)
      .log(`[Debug] PetBasicDto[] for ownerId ${ownerId} from DB:`, JSON.stringify(mapped));
    await this.cache.set<PetBasicDto>(this.constructor, cacheKey, mapped);
    return mapped;
  }

  async findByOwnerName(lastName: string, firstName?: string): Promise<PetBasicDto[]> {
    this.logger
      .withContext(PetsService.name)
      .log(`Fetching pets for owner lastName=${lastName}, firstName=${firstName}`);
    const cacheKey = `owner:name:${lastName}`;
    const cached = await this.cache.get<PetBasicDto>(this.constructor, cacheKey);
    if (cached) {
      const hydrated = plainToInstance(PetBasicDto, cached);
      this.logger
        .withContext(PetsService.name)
        .log(
          `[Debug] Hydrated PetBasicDto[] for owner lastName ${lastName} from cache:`,
          JSON.stringify(hydrated),
        );
      if (firstName) {
        const filtered = hydrated.filter((pet) => pet._ownerFirstName === firstName);
        this.logger
          .withContext(PetsService.name)
          .log(
            `[Debug] Filtered PetBasicDto[] for owner lastName ${lastName} and firstName ${firstName} from cache:`,
            JSON.stringify(filtered),
          );
        return filtered.length > 0 ? filtered : [];
      }
      return hydrated;
    }
    // Cache miss: query DB for all pets by lastName only
    const ownerWhere: Record<string, unknown> = { lastName };
    const owners = await this.prisma.owner.findMany({ where: ownerWhere, select: { id: true } });
    if (!owners.length) return [];
    const ownerIds = owners.map((o) => o.id);
    const pets = await this.prisma.pet.findMany({
      where: { ownerId: { in: ownerIds } },
      include: { owner: true },
    });
    const mapped = this.mapper.mapArray(pets, Object, PetBasicDto);
    this.logger
      .withContext(PetsService.name)
      .log(`[Debug] PetBasicDto[] for owner lastName ${lastName} from DB:`, JSON.stringify(mapped));
    await this.cache.set<PetBasicDto>(this.constructor, cacheKey, mapped);
    if (firstName) {
      const filtered = mapped.filter((pet) => pet._ownerFirstName === firstName);
      this.logger
        .withContext(PetsService.name)
        .log(
          `[Debug] Filtered PetBasicDto[] for owner lastName ${lastName} and firstName ${firstName} from DB:`,
          JSON.stringify(filtered),
        );
      return filtered.length > 0 ? filtered : [];
    }
    return mapped;
  }

  async findFullByOwnerId(ownerId: number): Promise<PetFullDto[]> {
    this.logger.withContext(PetsService.name).log(`Fetching full pets for ownerId=${ownerId}`);
    const pets = await this.prisma.pet.findMany({
      where: { ownerId },
      include: {
        boosters: true,
        brendanCane: true,
        owner: true,
      },
    });
    return this.fullMapper.mapArray(pets, Object, PetFullDto);
  }

  async findFullByOwnerName(lastName: string, firstName?: string): Promise<PetFullDto[]> {
    this.logger
      .withContext(PetsService.name)
      .log(`Fetching full pets for owner lastName=${lastName}, firstName=${firstName}`);
    const ownerWhere: Record<string, unknown> = { lastName };
    if (firstName) ownerWhere.firstName = firstName;
    const owners = await this.prisma.owner.findMany({ where: ownerWhere, select: { id: true } });
    if (!owners.length) return [];
    const ownerIds = owners.map((o) => o.id);
    const pets = await this.prisma.pet.findMany({
      where: { ownerId: { in: ownerIds } },
      include: {
        boosters: true,
        brendanCane: true,
        owner: true,
      },
    });
    return this.fullMapper.mapArray(pets, Object, PetFullDto);
  }
}
