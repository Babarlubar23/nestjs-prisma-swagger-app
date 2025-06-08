import { Test, TestingModule } from '@nestjs/testing';
import { OwnersService } from './owners.service';
import { PrismaService } from '../database/prisma.service';
import { CacheService } from '../cache/cache.service';
import { OwnerBasicDto } from './dto/owner-basic.dto';
import { CommonLoggerService } from '../common/logging/logger.service';

describe('OwnersService', () => {
  let service: OwnersService;
  let prisma: { owner: { findMany: jest.Mock; findUnique: jest.Mock } };
  let cache: CacheService;

  const loggerMock = { log: jest.fn(), error: jest.fn(), warn: jest.fn(), debug: jest.fn(), withContext: () => loggerMock };

  beforeEach(async () => {
    prisma = {
      owner: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
      },
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OwnersService,
        { provide: PrismaService, useValue: prisma },
        {
          provide: CacheService,
          useValue: { get: jest.fn().mockResolvedValue(null), set: jest.fn() },
        },
        { provide: CommonLoggerService, useValue: loggerMock },
      ],
    }).compile();
    service = module.get(OwnersService);
    cache = module.get(CacheService);
    Object.defineProperty(service, 'cache', {
      value: cache,
      writable: true,
    });
    Object.defineProperty(service, 'prisma', {
      value: prisma,
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
    prisma.owner.findMany.mockResolvedValue([]);
    expect(await service.findAll()).toEqual([]);
  });

  it('should return null for findOne if not found', async () => {
    prisma.owner.findUnique.mockResolvedValue(null);
    expect(await service.findOne(1)).toBeNull();
  });

  it('should return owners from findAll as OwnerBasicDto with all fields', async () => {
    const mockOwners = [
      {
        id: 1,
        firstName: 'Alice',
        lastName: 'Goldenpaw',
        email: 'alice@example.com',
        phone: '123-456-7890',
        pets: [{ id: 11 }, { id: 12 }],
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Silverfur',
        email: 'bob@example.com',
        phone: '987-654-3210',
        pets: [],
      },
    ];
    prisma.owner.findMany.mockResolvedValue(mockOwners);
    const result = await service.findAll();
    expect(result[0]).toBeInstanceOf(OwnerBasicDto);
    expect(result[1]).toBeInstanceOf(OwnerBasicDto);
    expect(result[0]).toMatchObject({
      id: 1,
      firstName: 'Alice',
      lastName: 'Goldenpaw',
      email: 'alice@example.com',
      phone: '123-456-7890',
      petCount: 2,
      petIds: [11, 12],
    });
    expect(result[1]).toMatchObject({
      id: 2,
      firstName: 'Bob',
      lastName: 'Silverfur',
      email: 'bob@example.com',
      phone: '987-654-3210',
      petCount: 0,
      petIds: [],
    });
  });

  it('should return an owner from findOne as OwnerBasicDto with all fields', async () => {
    const mockOwner = {
      id: 1,
      firstName: 'Alice',
      lastName: 'Goldenpaw',
      email: 'alice@example.com',
      phone: '123-456-7890',
      pets: [{ id: 11 }, { id: 12 }],
    };
    prisma.owner.findUnique.mockResolvedValue(mockOwner);
    const result = await service.findOne(1);
    expect(result).not.toBeNull();
    if (result) {
      expect(result).toBeInstanceOf(OwnerBasicDto);
      expect(result).toMatchObject({
        id: 1,
        firstName: 'Alice',
        lastName: 'Goldenpaw',
        email: 'alice@example.com',
        phone: '123-456-7890',
        petCount: 2,
        petIds: [11, 12],
      });
    }
  });

  it('should return null for findOne if owner does not exist', async () => {
    prisma.owner.findUnique.mockResolvedValue(null);
    expect(await service.findOne(999)).toBeNull();
  });

  it('should return multiple owners for duplicate last name', async () => {
    const mockOwners = [
      {
        id: 1,
        firstName: 'Alice',
        lastName: 'Goldenpaw',
        email: 'alice@example.com',
        phone: '123-456-7890',
        pets: [],
      },
      {
        id: 7,
        firstName: 'Hannah',
        lastName: 'Goldenpaw',
        email: 'hannah.goldenpaw@example.com',
        phone: '888-999-0000',
        pets: [],
      },
    ];
    prisma.owner.findMany.mockResolvedValue(mockOwners);
    const result = await service.findByName('Goldenpaw');
    expect(result).toHaveLength(2);
    expect(result.map(o => o.firstName)).toEqual(expect.arrayContaining(['Alice', 'Hannah']));
    expect(result.every(o => o.lastName === 'Goldenpaw')).toBe(true);
    expect(result[0]).toBeInstanceOf(OwnerBasicDto);
    expect(result[1]).toBeInstanceOf(OwnerBasicDto);
  });
});
