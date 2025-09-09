
import { PrismaClient } from '../../generated/client';
import { CloudAuthService } from '../cloud-auth/cloud-auth.service';

async function getPrismaWithAAD() {
  // Example values, replace with your actual config or env variables
  const serverName = process.env.POSTGRES_SERVER || 'myserver';
  const dbName = process.env.POSTGRES_DB || 'mydatabase';
  const aadUsername = process.env.POSTGRES_AAD_USER || 'user@yourtenant.onmicrosoft.com@myserver';
  const url = `${serverName}.postgres.database.azure.com`;

  const cloudAuthService = new CloudAuthService();
  const info = await cloudAuthService.getConnectionInfo(url, 'postgres');

  const connectionString = `postgresql://${aadUsername}:${info.accessToken}@${serverName}.postgres.database.azure.com:5432/${dbName}?sslmode=require`;

  return new PrismaClient({
    datasources: {
      db: {
        url: connectionString,
      },
    },
  });
}

async function seedDatabase(prisma: PrismaClient) {
  // Owner 2: Bob (1 pet)
  await prisma.owner.create({
    data: {
      firstName: 'Bob',
      lastName: 'Silverfur',
      email: 'bob@example.com',
      phone: '987-654-3210',
      address: '456 Elm St',
      pets: {
        create: [
          {
            name: 'Goldie',
            species: 'Fish',
            breed: 'Goldfish',
            birthDate: new Date('2022-04-10'),
            vaccinated: false,
            boosters: { create: [] },
            brendanCane: { create: [] },
          },
        ],
      },
    },
  });

  // Owner 3: Carla (no pets)
  await prisma.owner.create({
    data: {
      firstName: 'Chloe',
      lastName: 'Emeraldscale',
      email: 'chloe@exoticpets.com',
      phone: '555-000-1111',
      address: '789 Maple Ave',
      pets: {
        create: [
          {
            name: 'Spike',
            species: 'Iguana',
            breed: 'Green Iguana',
            birthDate: new Date('2018-11-11'),
            vaccinated: true,
            vaccinationDate: new Date('2019-01-15'),
            boosters: {
              create: [{ name: 'Salmonella', date: new Date('2019-06-01') }],
            },
            brendanCane: {
              create: [{ date: new Date('2020-02-20'), notes: 'Tail regrowth check' }],
            },
          },
          {
            name: 'Mochi',
            species: 'Rabbit',
            breed: 'Netherland Dwarf',
            birthDate: new Date('2021-03-03'),
            vaccinated: true,
            vaccinationDate: new Date('2021-04-01'),
            boosters: {
              create: [
                { name: 'Myxomatosis', date: new Date('2021-05-01') },
                { name: 'Rabbit Hemorrhagic Disease', date: new Date('2021-06-01') },
              ],
            },
            brendanCane: {
              create: [{ date: new Date('2022-07-07'), notes: 'Dental check' }],
            },
          },
        ],
      },
    },
  });

  await prisma.owner.create({
    data: {
      firstName: 'Dana',
      lastName: 'Whiskerly',
      email: 'dana@catlady.com',
      phone: '222-333-4444',
      address: '1010 Catnip Lane',
      pets: {
        create: [
          {
            name: 'Shadow',
            species: 'Cat',
            breed: 'Bombay',
            birthDate: new Date('2017-10-31'),
            vaccinated: false,
            boosters: { create: [] },
            brendanCane: {
              create: [{ date: new Date('2023-01-01'), notes: 'Senior wellness exam' }],
            },
          },
          {
            name: 'Pumpkin',
            species: 'Cat',
            breed: 'Maine Coon',
            birthDate: new Date('2020-10-01'),
            vaccinated: true,
            vaccinationDate: new Date('2020-11-01'),
            boosters: {
              create: [{ name: 'Feline Leukemia', date: new Date('2021-01-15') }],
            },
            brendanCane: { create: [] },
          },
        ],
      },
    },
  });

  await prisma.owner.create({
    data: {
      firstName: 'Eli',
      lastName: 'Fleetfoot',
      email: 'eli@dogpark.com',
      phone: '333-222-1111',
      address: '2020 Bark Blvd',
      pets: {
        create: [
          {
            name: 'Bolt',
            species: 'Dog',
            breed: 'Greyhound',
            birthDate: new Date('2016-06-06'),
            vaccinated: true,
            vaccinationDate: new Date('2017-06-06'),
            boosters: {
              create: [
                { name: 'Bordetella', date: new Date('2018-06-06') },
                { name: 'Rabies', date: new Date('2019-06-06') },
              ],
            },
            brendanCane: {
              create: [
                { date: new Date('2020-06-06'), notes: 'Arthritis check' },
                { date: new Date('2021-06-06'), notes: 'Dental cleaning' },
              ],
            },
          },
        ],
      },
    },
  });

  // Edge case: Owner with no pets
  await prisma.owner.create({
    data: {
      firstName: 'Fay',
      lastName: 'Nestless',
      email: 'fay@nopets.com',
      phone: '444-555-6666',
      address: '3030 Empty Nest',
      pets: { create: [] },
    },
  });

  // Edge case: Pet with no boosters or brendanCane
  await prisma.owner.create({
    data: {
      firstName: 'Gus',
      lastName: 'Featherstone',
      email: 'gus@lonelypet.com',
      phone: '777-888-9999',
      address: '404 Not Found Rd',
      pets: {
        create: [
          {
            name: 'Solo',
            species: 'Parrot',
            breed: 'African Grey',
            birthDate: new Date('2015-09-09'),
            vaccinated: false,
            boosters: { create: [] },
            brendanCane: { create: [] },
          },
        ],
      },
    },
  });

  // Owner 7: Another owner with last name 'Goldenpaw' (for duplicate last name test)
  await prisma.owner.create({
    data: {
      firstName: 'Hannah',
      lastName: 'Goldenpaw',
      email: 'hannah.goldenpaw@example.com',
      phone: '888-999-0000',
      address: '999 Duplicate Ave',
      pets: {
        create: [
          {
            name: 'Tiger',
            species: 'Cat',
            breed: 'Bengal',
            birthDate: new Date('2022-12-12'),
            vaccinated: true,
            vaccinationDate: new Date('2023-01-01'),
            boosters: { create: [] },
            brendanCane: { create: [] },
          },
        ],
      },
    },
  });
}

async function main() {
  const prisma = await getPrismaWithAAD();
  
  try {
    await seedDatabase(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
