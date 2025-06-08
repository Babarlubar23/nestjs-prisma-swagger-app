import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonLoggerService } from './common/logging/logger.service';

describe('AppController', () => {
  let controller: AppController;
  let service: AppService;

  beforeEach(async () => {
    const loggerMock = {
      log: jest.fn(),
      error: jest.fn(),
      warn: jest.fn(),
      debug: jest.fn(),
      withContext: () => loggerMock,
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getHeadline: jest.fn().mockReturnValue('Test Headline'),
          },
        },
        { provide: CommonLoggerService, useValue: loggerMock },
      ],
    }).compile();

    controller = module.get<AppController>(AppController);
    service = module.get<AppService>(AppService);
    Object.defineProperty(controller, 'appService', { value: service, writable: true });
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the headline', () => {
    expect(controller.getHeadline()).toBe('Test Headline');
    expect(service.getHeadline).toHaveBeenCalled();
  });

  it('should return the current user', () => {
    const user = { sub: 'user1', name: 'Test User' };
    expect(controller.getMe(user)).toEqual({ message: 'This is the current user', user });
  });
});
