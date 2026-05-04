export declare const HomeService: {
    getFeaturedProducts: () => Promise<{
        id: number;
        name: string;
        description: string;
        price: number;
        category: import("@prisma/client").$Enums.ProduceCategory;
        image: string | null;
        availableQuantity: number;
        vendorName: string;
        createdAt: Date;
    }[]>;
    getCategories: () => Promise<{
        key: import("@prisma/client").$Enums.ProduceCategory;
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
    getApprovedVendorCertificates: () => Promise<{
        id: number;
        farmName: string;
        farmLocation: string;
        certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
        profilePhoto: string | null;
        certifications: string[];
        createdAt: Date;
        updatedAt: any;
        user: {
            name: string;
            email: string;
        };
        produces: {
            id: number;
            name: string;
            price: number;
            image: string | null;
            category: import("@prisma/client").$Enums.ProduceCategory;
        }[];
        rentalSpaces: {
            id: number;
            location: string;
            size: string;
            price: number;
            availability: boolean;
            image: string | null;
        }[];
    }[]>;
};
//# sourceMappingURL=home.service.d.ts.map