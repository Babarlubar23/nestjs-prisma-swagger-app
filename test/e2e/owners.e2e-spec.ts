import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/database/prisma.service';

describe('OwnersController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();

    prisma = app.get(PrismaService);
    // Optionally reseed DB here if needed
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /api/owners/by-name/Goldenpaw returns multiple owners', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/owners/by-name/Goldenpaw')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(1);
    const firstNames = res.body.map((o: any) => o.firstName);
    expect(firstNames).toEqual(expect.arrayContaining(['Alice', 'Hannah']));
    res.body.forEach((o: any) => expect(o.lastName).toBe('Goldenpaw'));
  });
});
