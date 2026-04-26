// Seed approved products for marketplace testing
import { prisma } from '../../shared/prisma';

async function seedApprovedProducts() {
  try {
    console.log('🌱 Seeding approved products for marketplace...');

    // First, create a vendor profile if it doesn't exist
    const vendor = await prisma.vendorProfile.upsert({
      where: { userId: 2 }, // Assuming user ID 2 is a vendor
      update: {},
      create: {
        userId: 2,
        farmName: 'Green Valley Farm',
        farmLocation: 'Dhaka, Bangladesh',
        certificationStatus: 'Approved',
        profilePhoto: 'https://via.placeholder.com/150',
        certifications: ['Organic Certification', 'GAP Certification'],
      },
    });

    console.log('✅ Vendor profile created/updated');

    // Create some approved products
    const products = [
      {
        name: 'Fresh Organic Tomatoes',
        description: 'Juicy, red tomatoes grown using organic farming methods. Perfect for salads and cooking.',
        price: 80,
        category: 'Vegetables',
        availableQuantity: 100,
        unit: 'kg',
        isOrganic: true,
        image: 'https://via.placeholder.com/300x200?text=Tomatoes',
        vendorId: vendor.id,
        certificationStatus: 'Approved',
      },
      {
        name: 'Premium Rice',
        description: 'High-quality aromatic rice, perfect for daily meals. Sourced from local farmers.',
        price: 120,
        category: 'Grains',
        availableQuantity: 500,
        unit: 'kg',
        isOrganic: false,
        image: 'https://via.placeholder.com/300x200?text=Rice',
        vendorId: vendor.id,
        certificationStatus: 'Approved',
      },
      {
        name: 'Fresh Carrots',
        description: 'Crunchy, sweet carrots packed with nutrients. Great for snacks and cooking.',
        price: 60,
        category: 'Vegetables',
        availableQuantity: 80,
        unit: 'kg',
        isOrganic: true,
        image: 'https://via.placeholder.com/300x200?text=Carrots',
        vendorId: vendor.id,
        certificationStatus: 'Approved',
      },
      {
        name: 'Organic Eggs',
        description: 'Farm-fresh eggs from free-range chickens. Rich in protein and nutrients.',
        price: 250,
        category: 'Dairy',
        availableQuantity: 50,
        unit: 'dozen',
        isOrganic: true,
        image: 'https://via.placeholder.com/300x200?text=Eggs',
        vendorId: vendor.id,
        certificationStatus: 'Approved',
      },
      {
        name: 'Sweet Mangoes',
        description: 'Delicious, juicy mangoes from the best orchards. Perfect for summer.',
        price: 150,
        category: 'Fruits',
        availableQuantity: 30,
        unit: 'kg',
        isOrganic: true,
        image: 'https://via.placeholder.com/300x200?text=Mangoes',
        vendorId: vendor.id,
        certificationStatus: 'Approved',
      },
      {
        name: 'Fresh Milk',
        description: 'Pure, fresh cow milk delivered daily. Rich in calcium and vitamins.',
        price: 70,
        category: 'Dairy',
        availableQuantity: 20,
        unit: 'liter',
        isOrganic: false,
        image: 'https://via.placeholder.com/300x200?text=Milk',
        vendorId: vendor.id,
        certificationStatus: 'Approved',
      },
    ];

  for (const product of products) {
    // Check if product already exists
    const existingProduct = await prisma.produce.findFirst({
      where: {
        name: product.name,
        vendorId: product.vendorId,
      },
    });

    if (!existingProduct) {
      await prisma.produce.create({
        data: product,
      });
    } else {
      console.log(`Product "${product.name}" already exists, skipping...`);
    }
  }

    console.log('✅ Sample approved products seeded successfully!');
    console.log(`📦 Created ${products.length} approved products for marketplace testing`);

  } catch (error) {
    console.error('❌ Error seeding products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seeding function
seedApprovedProducts().catch(console.error);