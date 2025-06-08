jest.mock('../auth', () => ({
  AzureAdGuard: jest
    .fn()
    .mockImplementation(() => ({ canActivate: jest.fn().mockResolvedValue(true) })),
}));
jest.mock('../common/logging/logger.service');

import { Test, TestingModule } from '@nestjs/testing';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { OwnerBasicDto } from './dto/owner-basic.dto';
import { NotFoundException } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { CommonLoggerService } from '../common/logging/logger.service';

describe('OwnersController', () => {
  let controller: OwnersController;
  let service: OwnersService;

  const mockOwners = [
    { id: 1, name: 'Test Owner 1' },
    { id: 2, name: 'Test Owner 2' },
  ];

  const mappedOwners = mockOwners.map((o) => Object.assign(new OwnerBasicDto(), o));
  const loggerMock = { log: jest.fn(), error: jest.fn(), warn: jest.fn(), debug: jest.fn(), withContext: () => loggerMock };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnersController],
      providers: [
        { provide: Logger, useValue: loggerMock },
        { provide: CommonLoggerService, useValue: loggerMock },
        {
          provide: OwnersService,
          useValue: {
            findAll: jest.fn().mockResolvedValue(mappedOwners),
            findOne: jest.fn().mockImplementation(async (id: number) => {
              const found = mappedOwners.find((o) => o.id === id);
              return found ?? null;
            }),
          },
        },
      ],
    }).compile();
    controller = module.get<OwnersController>(OwnersController);
    service = module.get<OwnersService>(OwnersService);
    Object.defineProperty(controller, 'ownersService', { value: service, writable: true });
    Object.defineProperty(controller, 'logger', { value: loggerMock, writable: true });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all owners as OwnerBasicDto', async () => {
    const result = await controller.findAll();
    expect(result).toEqual(mappedOwners);
    expect(result[0]).toBeInstanceOf(OwnerBasicDto);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return one owner as OwnerBasicDto', async () => {
    const result = await controller.findOne(1);
    expect(result).toEqual(mappedOwners[0]);
    expect(result).toBeInstanceOf(OwnerBasicDto);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should throw NotFoundException if owner not found', async () => {
    // Arrange: mock service to return null
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(null);
    // Act & Assert
    await expect(controller.findOne(999)).rejects.toThrow(NotFoundException);
  });

  describe('findByName', () => {
    it('should return owners matching lastName', async () => {
      const owners = [Object.assign(new OwnerBasicDto(), { id: 1, lastName: 'Smith' })];
      service.findByName = jest.fn().mockResolvedValue(owners);
      const result = await controller.findByName('Smith');
      expect(result).toEqual(owners);
      expect(service.findByName).toHaveBeenCalledWith('Smith', undefined);
    });

    it('should return owners matching lastName and firstName', async () => {
      const owners = [
        Object.assign(new OwnerBasicDto(), { id: 2, lastName: 'Smith', firstName: 'John' }),
      ];
      service.findByName = jest.fn().mockResolvedValue(owners);
      const result = await controller.findByName('Smith', 'John');
      expect(result).toEqual(owners);
      expect(service.findByName).toHaveBeenCalledWith('Smith', 'John');
    });

    it('should throw NotFoundException if no owners found', async () => {
      service.findByName = jest.fn().mockResolvedValue([]);
      await expect(controller.findByName('Nonexistent')).rejects.toThrow(NotFoundException);
    });

    it('should return all owners with the same lastName when only lastName is provided', async () => {
      const owners = [
        Object.assign(new OwnerBasicDto(), { id: 1, lastName: 'Smith', firstName: 'John' }),
        Object.assign(new OwnerBasicDto(), { id: 2, lastName: 'Smith', firstName: 'Jane' }),
        Object.assign(new OwnerBasicDto(), { id: 3, lastName: 'Smith', firstName: 'Alex' }),
      ];
      service.findByName = jest.fn().mockResolvedValue(owners);
      const result = await controller.findByName('Smith');
      expect(result).toEqual(owners);
      expect(result.length).toBe(3);
      expect(service.findByName).toHaveBeenCalledWith('Smith', undefined);
    });

    it('should return only owners matching both lastName and firstName', async () => {
      const owners = [
        Object.assign(new OwnerBasicDto(), { id: 2, lastName: 'Smith', firstName: 'Jane' }),
      ];
      service.findByName = jest.fn().mockResolvedValue(owners);
      const result = await controller.findByName('Smith', 'Jane');
      expect(result).toEqual(owners);
      expect(result.length).toBe(1);
      expect(result[0].firstName).toBe('Jane');
      expect(result[0].lastName).toBe('Smith');
      expect(service.findByName).toHaveBeenCalledWith('Smith', 'Jane');
    });
  });
});
