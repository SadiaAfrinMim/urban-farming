export declare const ProduceService: {
    getAllProduces: (page: number, limit: number) => Promise<{
        data: ({
            vendor: {
                user: {
                    name: string;
                };
                farmName: string;
                sustainabilityCerts: {
                    certifyingAgency: string;
                    certificationDate: Date;
                }[];
            };
        } & {
            createdAt: Date;
            id: number;
            name: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            vendorId: number;
            price: number;
            image: string | null;
            description: string;
            category: import(".prisma/client").$Enums.ProduceCategory;
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
                name: string;
            };
            farmName: string;
            sustainabilityCerts: {
                certifyingAgency: string;
                certificationDate: Date;
            }[];
        };
    } & {
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    })[]>;
    getProduceById: (id: string) => Promise<{
        vendor: {
            user: {
                createdAt: Date;
                id: number;
                name: string;
                email: string;
                password: string;
                role: import(".prisma/client").$Enums.UserRole;
                status: import(".prisma/client").$Enums.UserStatus;
                profileImage: string | null;
            };
        } & {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    } & {
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
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
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
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
        createdAt: Date;
        id: number;
        name: string;
        certificationStatus: import(".prisma/client").$Enums.CertificationStatus;
        vendorId: number;
        price: number;
        image: string | null;
        description: string;
        category: import(".prisma/client").$Enums.ProduceCategory;
        availableQuantity: number;
        unit: string | null;
        isOrganic: boolean | null;
    }>;
    deleteProduce: (id: string) => Promise<void>;
};
//# sourceMappingURL=produce.service.d.ts.map