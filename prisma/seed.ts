import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set.');
}
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export async function seed() {
  console.log('Seeding the database...');
  try {
    const event = await prisma.event.create({
      data: {
        name: 'Sample Event',
        description: 'This is a sample event created during seeding.',
        startsAt: new Date(),
        endsAt: new Date(Date.now() + 3600000),
      },
    });
    console.log('Event created:', event);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}
