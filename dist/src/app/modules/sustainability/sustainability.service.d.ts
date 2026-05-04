export declare const SustainabilityService: {
    getAllCerts: () => Promise<({
        vendor: {
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
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    })[]>;
    getCertById: (id: any, user: any) => Promise<{
        vendor: {
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
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    }>;
    createCert: (userId: any, payload: any, userRole: any) => Promise<{
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    }>;
    updateCertStatus: (id: any, certificationStatus: any) => Promise<{
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    }>;
};
//# sourceMappingURL=sustainability.service.d.ts.map