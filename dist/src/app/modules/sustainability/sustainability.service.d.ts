import { CertificationStatus } from '../../types/common';
import { IJWTPayload } from '../../types/common.js';
export declare const SustainabilityService: {
    getAllCerts: () => Promise<({
        vendor: {
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
    createCert: (userId: string, payload: any, userRole?: string) => Promise<{
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