export declare const HomeService: {
    getFeaturedProducts: () => Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        image: string | null;
        availableQuantity: number;
        vendorName: string;
        createdAt: Date;
    }[]>;
    getCategories: () => Promise<{
        key: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        name: string;
        icon: string;
        color: string;
    }[]>;
    getStatistics: () => Promise<{
        totalUsers: number;
        totalVendors: number;
        totalProducts: number;
        totalOrders: number;
    }>;
    getTestimonials: () => Promise<{
        id: number;
        name: string;
        role: string;
        content: string;
        rating: number;
        avatar: null;
    }[]>;
    getFeaturedVendors: () => Promise<{
        id: number;
        name: string;
        location: string;
        products: string;
        rating: number;
        totalProducts: number;
    }[]>;
};
//# sourceMappingURL=home.service.d.ts.map