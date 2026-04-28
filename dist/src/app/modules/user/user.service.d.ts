import { Request } from "express";
import { UserStatus } from "../../types/common";
import { IJWTPayload } from "../../types/common";
import { IOptions } from "../../helpers/paginationHelper";
export declare const UserService: {
    createCustomer: (req: Request) => Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
        createdAt: Date;
    }>;
    createAdmin: (req: Request) => Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
        createdAt: Date;
    }>;
    createVendor: (req: Request) => Promise<{
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
        vendorProfile: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        };
    }>;
    createVendorPublic: (req: Request) => Promise<{
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            createdAt: Date;
        };
        vendorProfile: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
            userId: number;
        };
    }>;
    getAllFromDB: (params: any, options: IOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
            status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
            profileImage: string | null;
            createdAt: Date;
        }[];
    }>;
    getMyProfile: (user: IJWTPayload) => Promise<{
        profileData: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            certifications: string[];
        } | null;
        id: number;
        name: string;
        email: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
    }>;
    changeProfileStatus: (id: string, payload: {
        status: UserStatus;
    }) => Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
        createdAt: Date;
    }>;
    updateMyProfile: (user: IJWTPayload, req: Request) => Promise<{
        profileData: {
            id: number;
            createdAt: Date;
            farmName: string;
            farmLocation: string;
            certificationStatus: import("../../../../prisma/prisma/generated").$Enums.CertificationStatus;
            profilePhoto: string | null;
            certifications: string[];
        } | null;
        id: number;
        name: string;
        email: string;
        role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        status: import("../../../../prisma/prisma/generated").$Enums.UserStatus;
        profileImage: string | null;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map