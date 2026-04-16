import { UserRole } from '@prisma/client';
export declare const AuthService: {
    registerUser: (payload: {
        name?: string;
        email: string;
        password: string;
        role?: UserRole;
    }) => Promise<any>;
    loginUser: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: never;
        refreshToken: never;
        user: {
            id: any;
            name: any;
            email: any;
            role: any;
        };
    }>;
    refreshToken: (token: string) => Promise<{
        accessToken: never;
    }>;
    changePassword: (user: any, payload: {
        oldPassword: string;
        newPassword: string;
    }) => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map