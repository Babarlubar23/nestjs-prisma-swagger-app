jest.mock('../auth', () => ({
  AzureAdGuard: jest
    .fn()
    .mockImplementation(() => ({ canActivate: jest.fn().mockResolvedValue(true) })),
}));

import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { PetBasicDto } from './dto/pet-basic.dto';
import { NotFoundException } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { CommonLoggerService } from '../common/logging/logger.service';
import { instanceToPlain } from 'class-transformer';

describe('PetsController', () => {
  let controller: PetsController;
  let service: PetsService;

  const mockPets = [
    { id: 1, name: 'Test Pet 1' },
    { id: 2, name: 'Test Pet 2' },
  ];

  const mappedPets = mockPets.map((p) => Object.assign(new PetBasicDto(), p));
  const loggerMock = { log: jest.fn(), error: jest.fn(), warn: jest.fn(), debug: jest.fn(), withContext: () => loggerMock };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [
        { provide: Logger, useValue: loggerMock },
        { provide: CommonLoggerService, useValue: loggerMock },
        {
          provide: PetsService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mappedPets),
            findOne: jest.fn().mockImplementation(async (id: number) => {
              const found = mappedPets.find((p) => p.id === id);
              return found ?? null;
            }),
          },
        },
      ],
    })
      .overrideProvider(PetsService)
      .useValue({
        findAll: jest.fn().mockResolvedValue(mappedPets),
        findOne: jest.fn().mockImplementation(async (id: number) => {
          const found = mappedPets.find((p) => p.id === id);
          return found ?? null;
        }),
      })
      .compile();
    controller = module.get<PetsController>(PetsController);
    service = module.get<PetsService>(PetsService);
    Object.defineProperty(controller, 'petsService', { value: service, writable: true });
    Object.defineProperty(controller, 'logger', { value: loggerMock, writable: true });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all pets as PetBasicDto', async () => {
    const result = await controller.findAll();
    const expected = instanceToPlain(mappedPets, { excludePrefixes: ['_'] });
    expect(result).toEqual(expected);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one pet as PetBasicDto', async () => {
    const result = await controller.findOne(1);
    const expected = instanceToPlain(mappedPets[0], { excludePrefixes: ['_'] });
    expect(result).toEqual(expected);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should throw NotFoundException if pet not found', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(null);
    await expect(controller.findOne(999)).rejects.toThrow(NotFoundException);
  });

  describe('findByOwnerId', () => {
    it('should return all pets for a given owner ID', async () => {
      const pets = [
        Object.assign(new PetBasicDto(), { id: 1, name: 'Fluffy', ownerId: 10 }),
        Object.assign(new PetBasicDto(), { id: 2, name: 'Rex', ownerId: 10 }),
      ];
      service.findByOwnerId = jest.fn().mockResolvedValue(pets);
      const result = await controller.findByOwnerId(10);
      const expected = instanceToPlain(pets, { excludePrefixes: ['_'] });
      expect(result).toEqual(expected);
      expect(result.length).toBe(2);
      expect(service.findByOwnerId).toHaveBeenCalledWith(10);
    });
    it('should throw NotFoundException if no pets found for owner ID', async () => {
      service.findByOwnerId = jest.fn().mockResolvedValue([]);
      await expect(controller.findByOwnerId(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByOwnerName', () => {
    it('should return all pets for a given owner lastName', async () => {
      const pets = [
        Object.assign(new PetBasicDto(), { id: 1, name: 'Fluffy', ownerId: 10 }),
        Object.assign(new PetBasicDto(), { id: 2, name: 'Rex', ownerId: 11 }),
      ];
      service.findByOwnerName = jest.fn().mockResolvedValue(pets);
      const result = await controller.findByOwnerName('Smith');
      const expected = instanceToPlain(pets, { excludePrefixes: ['_'] });
      expect(result).toEqual(expected);
      expect(result.length).toBe(2);
      expect(service.findByOwnerName).toHaveBeenCalledWith('Smith', undefined);
    });
    it('should return all pets for a given owner lastName and firstName', async () => {
      const pets = [Object.assign(new PetBasicDto(), { id: 3, name: 'Bella', ownerId: 12 })];
      service.findByOwnerName = jest.fn().mockResolvedValue(pets);
      const result = await controller.findByOwnerName('Smith', 'John');
      const expected = instanceToPlain(pets, { excludePrefixes: ['_'] });
      expect(result).toEqual(expected);
      expect(result.length).toBe(1);
      expect(service.findByOwnerName).toHaveBeenCalledWith('Smith', 'John');
    });
    it('should throw NotFoundException if no pets found for owner name', async () => {
      service.findByOwnerName = jest.fn().mockResolvedValue([]);
      await expect(controller.findByOwnerName('Nonexistent')).rejects.toThrow(NotFoundException);
    });
  });
});
