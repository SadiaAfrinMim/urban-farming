import { CertificationStatus } from '../../types/common';
import { IJWTPayload } from '../../types/common';
export declare const SustainabilityService: {
    getAllCerts: () => Promise<({
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
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    })[]>;
    getCertById: (id: string, user: IJWTPayload) => Promise<{
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    }>;
    createCert: (userId: string, payload: {
        certifyingAgency: string;
        certificationDate: string;
    }) => Promise<{
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    }>;
    updateCertStatus: (id: string, certificationStatus: CertificationStatus) => Promise<{
        id: number;
        vendorId: number;
        certifyingAgency: string;
        certificationDate: Date;
    }>;
};
//# sourceMappingURL=sustainability.service.d.ts.map