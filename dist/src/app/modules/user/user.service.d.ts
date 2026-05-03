import { Request } from "express";
import { UserStatus } from "../../types/common.js";
import { IJWTPayload } from "../../types/common.js";
import { IOptions } from "../../helpers/paginationHelper.js";
export declare const UserService: {
    createCustomer: (req: Request) => Promise<{
        createdAt: Date;
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
    }>;
    createAdmin: (req: Request) => Promise<{
        createdAt: Date;
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
    }>;
    createVendor: (req: Request) => Promise<{
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
        vendorProfile: {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    }>;
    createVendorPublic: (req: Request) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
            createdAt: Date;
        };
        vendorProfile: {
            createdAt: Date;
            id: number;
            userId: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        };
    }>;
    getAllFromDB: (params: any, options: IOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("@prisma/client").$Enums.UserRole;
            status: import("@prisma/client").$Enums.UserStatus;
            profileImage: string | null;
        }[];
    }>;
    getMyProfile: (user: IJWTPayload) => Promise<{
        profileData: {
            createdAt: Date;
            id: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            certifications: string[];
        } | null;
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        profileImage: string | null;
    }>;
    changeProfileStatus: (id: string, payload: {
        status: UserStatus;
    }) => Promise<{
        createdAt: Date;
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        profileImage: string | null;
    }>;
    updateMyProfile: (user: IJWTPayload, req: Request) => Promise<{
        profileData: {
            createdAt: Date;
            id: number;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("@prisma/client").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        } | null;
        id: number;
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.UserRole;
        status: import("@prisma/client").$Enums.UserStatus;
        profileImage: string | null;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map