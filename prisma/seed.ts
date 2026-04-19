import { prisma } from '../src/app/shared/prisma';
import { UserRole } from '../../prisma/generated/prisma/enums';
import bcrypt from 'bcryptjs';

async function main() {
  // Create 3 roles: Admin, Vendor, Customer (enums)

  // Seed users
  const hashedPassword = await bcrypt.hash('password123', 12);

  // Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: hashedPassword,
      role: UserRole.Admin,
      name: 'Admin User',
    },
  });

  // Vendors
  const vendors = [];
  for (let i = 1; i <= 10; i++) {
    const vendor = await prisma.user.upsert({
      where: { email: `vendor${i}@example.com` },
      update: {},
      create: {
        email: `vendor${i}@example.com`,
        password: hashedPassword,
        role: UserRole.Vendor,
        name: `Vendor ${i}`,
      },
    });
    vendors.push(vendor);

    // Create VendorProfile
    await prisma.vendorProfile.upsert({
      where: { userId: vendor.id },
      update: {},
      create: {
        userId: vendor.id,
        farmName: `Farm ${i}`,
        farmLocation: `Location ${i}`,
      },
    });
  }

  // Customers
  const customers = [];
  for (let i = 1; i <= 5; i++) {
    const customer = await prisma.user.upsert({
      where: { email: `customer${i}@example.com` },
      update: {},
      create: {
        email: `customer${i}@example.com`,
        password: hashedPassword,
        role: UserRole.Customer,
        name: `Customer ${i}`,
      },
    });
    customers.push(customer);
  }

  // Produces: 100
  const categories = ['Vegetables', 'Fruits', 'Herbs', 'Seeds'];
  for (let i = 1; i <= 100; i++) {
    const vendorProfile = await prisma.vendorProfile.findFirst({
      where: { userId: vendors[(i % vendors.length)].id },
    });
    if (vendorProfile) {
      await prisma.produce.upsert({
        where: { id: `produce-${i}` }, // Assuming id is string
        update: {},
        create: {
          id: `produce-${i}`,
          vendorId: vendorProfile.id,
          name: `Produce ${i}`,
          description: `Description for produce ${i}`,
          price: Math.floor(Math.random() * 100) + 10,
          category: categories[i % categories.length],
          availableQuantity: Math.floor(Math.random() * 100) + 1,
        },
      });
    }
  }

  console.log('Seeding completed');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });