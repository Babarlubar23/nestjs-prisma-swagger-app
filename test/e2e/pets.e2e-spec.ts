import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from '../../src/app.module';

describe('PetsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }));
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET /api/pets returns pets with ownerFullName and no _ownerFirstName/_ownerLastName', async () => {
    const res = await request(app.getHttpServer())
      .get('/api/pets')
      .expect(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    res.body.forEach((pet: any) => {
      expect(pet).toHaveProperty('ownerFullName');
      expect(pet).not.toHaveProperty('_ownerFirstName');
      expect(pet).not.toHaveProperty('_ownerLastName');
    });
  });
});
