import { prisma } from '../../shared/prisma';
import { UserRole } from '@prisma/client';

// Featured Products
const getFeaturedProducts = async () => {
  const products = await prisma.produce.findMany({
    where: {
      certificationStatus: 'Approved'
    },
    take: 8,
    orderBy: { createdAt: 'desc' },
    include: {
      vendor: {
        select: {
          user: {
            select: {
              name: true
            }
          },
          farmName: true
        }
      }
    }
  });

  return products.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    image: product.image,
    availableQuantity: product.availableQuantity,
    vendorName: product.vendor.farmName || product.vendor.user.name,
    createdAt: product.createdAt
  }));
};

// Categories
const getCategories = async () => {
  // Get unique categories from produces
  const categories = await prisma.produce.findMany({
    where: {
      certificationStatus: 'Approved'
    },
    select: {
      category: true
    },
    distinct: ['category']
  });

  // Map to our predefined categories with icons
  const categoryMap = {
    'Vegetables': { name: 'সবজি', icon: '🥕', color: 'from-green-500 to-green-600' },
    'Fruits': { name: 'ফল', icon: '🍎', color: 'from-red-500 to-red-600' },
    'Grains': { name: 'শস্য', icon: '🌾', color: 'from-yellow-500 to-yellow-600' },
    'Dairy': { name: 'দুগ্ধজাত', icon: '🥛', color: 'from-blue-500 to-blue-600' }
  };

  return categories.map(cat => ({
    key: cat.category,
    name: categoryMap[cat.category as keyof typeof categoryMap]?.name || cat.category,
    icon: categoryMap[cat.category as keyof typeof categoryMap]?.icon || '📦',
    color: categoryMap[cat.category as keyof typeof categoryMap]?.color || 'from-gray-500 to-gray-600'
  })).slice(0, 4);
};

// Statistics
const getStatistics = async () => {
  const [
    totalUsers,
    totalVendors,
    totalProducts,
    totalOrders
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { role: UserRole.Vendor } }),
    prisma.produce.count({ where: { certificationStatus: 'Approved' } }),
    prisma.order.count()
  ]);

  return {
    totalUsers: totalUsers + 500, // Add some buffer for display
    totalVendors: totalVendors + 10,
    totalProducts: totalProducts + 100,
    totalOrders: totalOrders + 500
  };
};

// Testimonials
const getTestimonials = async () => {
  // For now, return static testimonials. In a real app, these would come from a testimonials table
  return [
    {
      id: 1,
      name: 'আহমেদ হোসেন',
      role: 'কাস্টমার',
      content: 'অসাধারণ সার্ভিস! তাজা পণ্য এবং দ্রুত ডেলিভারি।',
      rating: 5,
      avatar: null
    },
    {
      id: 2,
      name: 'ফাতেমা খাতুন',
      role: 'ভেন্ডর',
      content: 'এই প্ল্যাটফর্মের মাধ্যমে আমি আমার পণ্য সহজেই বিক্রি করতে পারি।',
      rating: 5,
      avatar: null
    },
    {
      id: 3,
      name: 'রাজু দাস',
      role: 'কাস্টমার',
      content: 'স্থানীয় কৃষকদের সমর্থন করার একটি দুর্দান্ত উপায়।',
      rating: 5,
      avatar: null
    }
  ];
};

// Featured Vendors
const getFeaturedVendors = async () => {
  const vendors = await prisma.vendorProfile.findMany({
    where: {
      certificationStatus: 'Approved'
    },
    take: 3,
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      },
      produces: {
        where: {
          certificationStatus: 'Approved'
        },
        select: {
          category: true
        },
        take: 5
      }
    },
    orderBy: { createdAt: 'desc' }
  });

  return vendors.map(vendor => {
    const uniqueCategories = [...new Set(vendor.produces.map(p => p.category))];
    const productTypes = uniqueCategories.length > 0 ? uniqueCategories.join(', ') : 'বিভিন্ন পণ্য';

    return {
      id: vendor.id,
      name: vendor.farmName,
      location: vendor.farmLocation,
      products: productTypes,
      rating: 4.5 + Math.random() * 0.5, // Random rating between 4.5-5.0
      totalProducts: vendor.produces.length
    };
  });
};

export const HomeService = {
  getFeaturedProducts,
  getCategories,
  getStatistics,
  getTestimonials,
  getFeaturedVendors,
};