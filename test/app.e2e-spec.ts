import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaService } from '@shared/prisma/prisma.service';
import '../src/shared/prototype/big-int-to-s';

describe('ContractController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  const baseContracts = [
    {
      clientName: 'Junior',
      email: 'jjcmjavascript@example.com',
      accountNumber: 7788,
      amount: 1000,
      currency: 'USD',
    },
    {
      clientName: 'Jose',
      email: 'Jose@example.com',
      accountNumber: 6655,
      amount: 1000,
      currency: 'CLP',
    },
  ];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );

    prisma = app.get(PrismaService);

    await prisma.$connect();
    await app.init();
  });

  afterAll(async () => {
    await prisma.contract.deleteMany({});
    await prisma.$disconnect();
    await app.close();
  });

  it('/contracts (POST) should create a new contract', async () => {
    await request(app.getHttpServer())
      .post('/contracts')
      .send(baseContracts[0])
      .expect(201);
  });

  it('/contractList (GET) should return all contracts', async () => {
    const response = await request(app.getHttpServer())
      .get('/contractList')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('/contractList (GET) should filter contracts by accountNumber', async () => {
    const response = await request(app.getHttpServer())
      .get('/contractList')
      .query({ accountNumber: baseContracts[0].accountNumber })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].accountNumber).toBe(baseContracts[0].accountNumber);
  });

  it('/contractList (GET) should not return records filtering by date range', async () => {
    const response = await request(app.getHttpServer())
      .get('/contractList')
      .query({
        startDate: '2023-01-01',
        endDate: '2023-12-31',
      })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(0);
  });

  it('/contractList (GET) should return values filtering by date range', async () => {
    const response = await request(app.getHttpServer())
      .get('/contractList')
      .query({
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
      })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
