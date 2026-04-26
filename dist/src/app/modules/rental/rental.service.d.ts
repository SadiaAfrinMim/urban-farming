export declare const RentalService: {
    getAllRentalSpaces: () => Promise<({
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                createdAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    })[]>;
    searchRentalSpaces: (location?: string) => Promise<({
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                createdAt: Date;
            };
        } & {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        };
    } & {
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    })[]>;
    getRentalSpaceById: (id: string) => Promise<{
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    createRentalSpace: (vendorId: string, payload: {
        location: string;
        size: string;
        price: number;
        availability?: boolean;
    }) => Promise<{
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    updateRentalSpace: (id: string, payload: Partial<{
        location: string;
        size: string;
        price: number;
        availability: boolean;
    }>) => Promise<{
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
    deleteRentalSpace: (id: string) => Promise<void>;
    toggleAvailability: (id: string, availability: boolean) => Promise<{
        id: number;
        createdAt: Date;
        vendorId: number;
        location: string;
        size: string;
        price: number;
        availability: boolean;
        image: string | null;
        plantStatus: import("../../../../prisma/prisma/generated").$Enums.PlantHealth | null;
        lastWatered: Date | null;
    }>;
};
//# sourceMappingURL=rental.service.d.ts.map