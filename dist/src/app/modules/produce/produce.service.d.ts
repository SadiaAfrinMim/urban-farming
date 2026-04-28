export declare const ProduceService: {
    getAllProduces: (page: number, limit: number) => Promise<{
        data: ({
            vendor: {
                user: {
                    id: number;
                    name: string;
                    email: string;
                    password: string;
                    role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                    status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                    profileImage: string | null;
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
            name: string;
            createdAt: Date;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            vendorId: number;
            price: number;
            image: string | null;
            description: string;
            category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
            availableQuantity: number;
            unit: string | null;
            isOrganic: boolean | null;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    searchProduces: (query?: string) => Promise<({
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                profileImage: string | null;
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
        name: string;
        createdAt: Date;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    })[]>;
    getProduceById: (id: string) => Promise<{
        vendor: {
            user: {
                id: number;
                name: string;
                email: string;
                password: string;
                role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
                status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
                profileImage: string | null;
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
        name: string;
        createdAt: Date;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    createProduce: (vendorId: string, payload: {
        name: string;
        description?: string;
        price: number;
        category: string;
        availableQuantity: number;
        unit?: string;
    }) => Promise<{
        id: number;
        name: string;
        createdAt: Date;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    updateProduce: (id: string, payload: Partial<{
        name: string;
        description: string;
        price: number;
        category: string;
        availableQuantity: number;
        unit?: string;
    }>) => Promise<{
        id: number;
        name: string;
        createdAt: Date;
        certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import("../../../../prisma/prisma/generated").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    deleteProduce: (id: string) => Promise<void>;
};
//# sourceMappingURL=produce.service.d.ts.map