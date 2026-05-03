export declare const RentalService: {
    getAllRentalSpaces: () => Promise<({
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    })[]>;
    searchRentalSpaces: (location?: string) => Promise<({
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    })[]>;
    getRentalSpaceById: (id: string) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    createRentalSpace: (vendorId: string, payload: {
        location: string;
        size: string;
        price: number;
        availability?: boolean;
    }) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    updateRentalSpace: (id: string, payload: Partial<{
        location: string;
        size: string;
        price: number;
        availability: boolean;
    }>) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    deleteRentalSpace: (id: string) => Promise<void>;
    toggleAvailability: (id: string, availability: boolean) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    bookRentalSpace: (spaceId: string, customerId: string) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("@prisma/client").$Enums.UserRole;
                status: import("@prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("@prisma/client").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    createRentalOrder: (customerId: string, spaceId: number, totalPrice: number, duration?: number) => Promise<{
        id: number;
        userId: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        vendorId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
        produceId: number | null;
        rentalSpaceId: number | null;
    }>;
    getVendorRentalOrders: (vendorId: string) => Promise<{
        id: number;
        userId: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        vendorId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
        produceId: number | null;
        rentalSpaceId: number | null;
    }[]>;
    updateRentalOrderStatus: (orderId: number, status: string, vendorId: string) => Promise<{
        id: number;
        userId: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        vendorId: number;
        quantity: number;
        totalPrice: number;
        orderDate: Date;
        produceId: number | null;
        rentalSpaceId: number | null;
    }>;
};
//# sourceMappingURL=rental.service.d.ts.map