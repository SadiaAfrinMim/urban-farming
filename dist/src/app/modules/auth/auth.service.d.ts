export declare const AuthService: {
    ensureAdminExists: () => Promise<void>;
    registerUser: (payload: {
        name?: string;
        email: string;
        password: string;
        role?: string;
        adminCode?: string;
        farmName?: string;
        farmLocation?: string;
    }) => Promise<{
        user: {
            createdAt: Date;
            id: number;
            name: string;
            email: string;
            role: import("@prisma/client").$Enums.UserRole;
        };
        accessToken: string;
        refreshToken: string;
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
            role: import("@prisma/client").$Enums.UserRole;
        };
    }>;
    refreshToken: (token: string) => Promise<{
        accessToken: string;
    }>;
    changePassword: (user: {
        id: string;
        role: string;
    }, payload: {
        oldPassword: string;
        newPassword: string;
    }) => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map