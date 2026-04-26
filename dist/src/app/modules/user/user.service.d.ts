import { Request } from "express";
import { Prisma, UserStatus } from "../../../../prisma/generated/prisma/client";
import { IJWTPayload } from "../../types/common";
import { IOptions } from "../../helpers/paginationHelper";
export declare const UserService: {
    createPatient: (req: Request) => Promise<runtime.Types.Utils.JsPromise<R>>;
    createAdmin: (req: Request) => Promise<Admin>;
    createDoctor: (req: Request) => Promise<Doctor>;
    getAllFromDB: (params: any, options: IOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: runtime.Types.Public.PrismaPromise<T>;
        };
        data: runtime.Types.Public.PrismaPromise<T>;
    }>;
    getMyProfile: (user: IJWTPayload) => Promise<any>;
    changeProfileStatus: (id: string, payload: {
        status: UserStatus;
    }) => Promise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T_1, "update", GlobalOmitOptions>>;
    updateMyProfie: (user: IJWTPayload, req: Request) => Promise<any>;
};
//# sourceMappingURL=user.service.d.ts.map