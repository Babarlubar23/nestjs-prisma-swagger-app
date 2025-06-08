import { Test, TestingModule } from '@nestjs/testing';
import { PetsService } from './pets.service';
import { PrismaService } from '../database/prisma.service';
import { CacheService } from '../cache/cache.service';
import { PetBasicDto } from './dto/pet-basic.dto';
import { CommonLoggerService } from '../common/logging/logger.service';

describe('PetsService', () => {
  let service: PetsService;
  let prismaMock: { pet: { findMany: jest.Mock; findUnique: jest.Mock } };
  let cache: CacheService;
  const loggerMock = {
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
    withContext: () => loggerMock,
  };

  beforeEach(async () => {
    prismaMock = {
      pet: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PetsService,
        { provide: PrismaService, useValue: prismaMock },
        {
          provide: CacheService,
          useValue: { get: jest.fn().mockResolvedValue(null), set: jest.fn() },
        },
        { provide: CommonLoggerService, useValue: loggerMock },
      ],
    }).compile();

    service = module.get(PetsService);
    cache = module.get(CacheService);
    Object.defineProperty(service, 'cache', {
      value: cache,
      writable: true,
    });
    Object.defineProperty(service, 'prisma', {
      value: prismaMock,
      writable: true,
    });
    Object.defineProperty(service, 'logger', { value: loggerMock, writable: true });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an empty array for findAll', async () => {
    prismaMock.pet.findMany.mockResolvedValue([]);
    expect(await service.findAll()).toEqual([]);
  });

  it('should return null for findOne if not found', async () => {
    prismaMock.pet.findUnique.mockResolvedValue(null);
    expect(await service.findOne(1)).toBeNull();
  });

  it('should return pets from findAll as PetBasicDto', async () => {
    const mockPets = [
      {
        id: 1,
        name: 'Fluffy',
        species: 'Cat',
        breed: 'Siamese',
      },
      {
        id: 2,
        name: 'Rex',
        species: 'Dog',
        breed: 'Labrador',
      },
    ];
    prismaMock.pet.findMany.mockResolvedValue(mockPets);
    const result = await service.findAll();
    expect(result[0]).toBeInstanceOf(PetBasicDto);
    expect(result[1]).toBeInstanceOf(PetBasicDto);
    expect(result[0]).toMatchObject({
      id: 1,
      name: 'Fluffy',
      species: 'Cat',
      breed: 'Siamese',
    });
    expect(result[1]).toMatchObject({
      id: 2,
      name: 'Rex',
      species: 'Dog',
      breed: 'Labrador',
    });
  });

  it('should return a pet from findOne as PetBasicDto', async () => {
    const mockPet = {
      id: 1,
      name: 'Fluffy',
      species: 'Cat',
      breed: 'Siamese',
    };
    prismaMock.pet.findUnique.mockResolvedValue(mockPet);
    const result = await service.findOne(1);
    expect(result).toBeInstanceOf(PetBasicDto);
    expect(result).toMatchObject({ id: 1, name: 'Fluffy' });
  });

  it('should return null for findOne if pet does not exist', async () => {
    prismaMock.pet.findUnique.mockResolvedValue(null);
    expect(await service.findOne(999)).toBeNull();
  });

  it('should return pets from findAll as PetBasicDto with owner info', async () => {
    const mockPets = [
      {
        id: 1,
        name: 'Fluffy',
        species: 'Cat',
        breed: 'Siamese',
        ownerId: 101,
        owner: { firstName: 'Alice', lastName: 'Goldenpaw', id: 101 },
      },
      {
        id: 2,
        name: 'Rex',
        species: 'Dog',
        breed: 'Labrador',
        ownerId: 102,
        owner: { firstName: 'Bob', lastName: 'Silverfur', id: 102 },
      },
    ];
    prismaMock.pet.findMany.mockResolvedValue(mockPets);
    const result = await service.findAll();
    expect(result[0]).toBeInstanceOf(PetBasicDto);
    expect(result[1]).toBeInstanceOf(PetBasicDto);
    expect(result[0]).toMatchObject({
      id: 1,
      name: 'Fluffy',
      species: 'Cat',
      breed: 'Siamese',
      ownerId: 101,
    });
    expect(result[0].ownerFullName).toBe('Alice, Goldenpaw');
    expect(result[1]).toMatchObject({
      id: 2,
      name: 'Rex',
      species: 'Dog',
      breed: 'Labrador',
      ownerId: 102,
    });
    expect(result[1].ownerFullName).toBe('Bob, Silverfur');
  });

  it('should return a pet from findOne as PetBasicDto with owner info', async () => {
    const mockPet = {
      id: 1,
      name: 'Fluffy',
      species: 'Cat',
      breed: 'Siamese',
      ownerId: 101,
      owner: { firstName: 'Alice', lastName: 'Goldenpaw', id: 101 },
    };
    prismaMock.pet.findUnique.mockResolvedValue(mockPet);
    const result = await service.findOne(1);
    expect(result).not.toBeNull();
    if (result) {
      expect(result).toBeInstanceOf(PetBasicDto);
      expect(result).toMatchObject({ id: 1, name: 'Fluffy', ownerId: 101 });
      expect(result.ownerFullName).toBe('Alice, Goldenpaw');
    }
  });
});
