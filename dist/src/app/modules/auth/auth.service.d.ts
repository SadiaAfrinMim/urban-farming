import { IJWTPayload } from '../../types/common';
export declare const AuthService: {
    registerUser: (payload: {
        name?: string;
        email: string;
        password: string;
        role?: string;
        adminCode?: string;
        farmName?: string;
        farmLocation?: string;
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
    loginUser: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            name: string;
            email: string;
            role: import("../../../../prisma/prisma/generated").$Enums.UserRole;
        };
    }>;
    refreshToken: (token: string) => Promise<{
        accessToken: string;
    }>;
    changePassword: (user: IJWTPayload, payload: {
        oldPassword: string;
        newPassword: string;
    }) => Promise<void>;
    ensureAdminExists: () => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map