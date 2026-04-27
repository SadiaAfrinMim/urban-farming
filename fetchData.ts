import { PrismaClient } from './prisma/prisma/generated';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const prisma = new PrismaClient();

async function main() {
  console.log('All Customers:');
  const customers = await prisma.user.findMany({
    where: { role: 'Customer' },
    select: { id: true, name: true, email: true, status: true, createdAt: true }
  });
  console.log(customers);

  console.log('\nAll Rental Spaces:');
  const rentals = await prisma.rentalSpace.findMany({
    include: { vendor: { select: { user: { select: { name: true, email: true } } } } }
  });
  console.log(rentals);
}

main().catch(console.error).finally(() => prisma.$disconnect());