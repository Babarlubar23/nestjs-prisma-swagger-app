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
    this.logger.withContext(PetsService.name).log('Fetching all pets');
    const cached = await this.cache.get<PetBasicDto>(this.constructor, 0);
    if (cached) {
      const hydrated = plainToInstance(PetBasicDto, cached);
      // Debug: log hydrated DTOs after plainToInstance
      this.logger.withContext(PetsService.name).log('[Debug] Hydrated PetBasicDto[] from cache:', JSON.stringify(hydrated));
      return hydrated;
    }

    const pets = await this.prisma.pet.findMany({ include: { owner: true } });
    const mapped = this.mapper.mapArray(pets, Object, PetBasicDto);
    await this.cache.set<PetBasicDto>(this.constructor, 0, mapped);
    return mapped;
  }

  async findOne(id: number): Promise<PetBasicDto | null> {
    this.logger.withContext(PetsService.name).log(`Fetching pet with id ${id}`);
    const cached = await this.cache.get<PetBasicDto>(this.constructor, id);
    if (cached && cached.length > 0) return plainToInstance(PetBasicDto, cached)[0];

    const pet = await this.prisma.pet.findUnique({ where: { id }, include: { owner: true } });
    if (!pet) return null;
    const mapped = this.mapper.map(pet, Object, PetBasicDto);
    await this.cache.set<PetBasicDto>(this.constructor, id, [mapped]);
    return mapped;
  }

  async findByOwnerId(ownerId: number): Promise<PetBasicDto[]> {
    this.logger.withContext(PetsService.name).log(`Fetching pets for ownerId=${ownerId}`);
    const cached = await this.cache.get<PetBasicDto>(this.constructor, ownerId);
    if (cached) return plainToInstance(PetBasicDto, cached);

    const pets = await this.prisma.pet.findMany({ where: { ownerId }, include: { owner: true } });
    return this.mapper.mapArray(pets, Object, PetBasicDto);
  }

  async findByOwnerName(lastName: string, firstName?: string): Promise<PetBasicDto[]> {
    this.logger.withContext(PetsService.name).log(`Fetching pets for owner lastName=${lastName}, firstName=${firstName}`);
    const cacheKey = firstName ? `${lastName}:${firstName}` : lastName;
    const cached = await this.cache.get<PetBasicDto>(this.constructor, cacheKey);
    if (cached) return plainToInstance(PetBasicDto, cached);

    const ownerWhere: Record<string, unknown> = { lastName };
    if (firstName) ownerWhere.firstName = firstName;
    // Find all owners matching the name
    const owners = await this.prisma.owner.findMany({ where: ownerWhere, select: { id: true } });
    if (!owners.length) return [];
    const ownerIds = owners.map((o) => o.id);
    const pets = await this.prisma.pet.findMany({
      where: { ownerId: { in: ownerIds } },
      include: { owner: true },
    });
    return this.mapper.mapArray(pets, Object, PetBasicDto);
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
    this.logger.withContext(PetsService.name).log(`Fetching full pets for owner lastName=${lastName}, firstName=${firstName}`);
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
