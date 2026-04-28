import { Secret } from "jsonwebtoken";
import { IJWTPayload } from "../types/common";
export declare const jwtHelper: {
    generateToken: (payload: any, secret: Secret, expiresIn: string) => string;
    verifyToken: (token: string, secret: Secret) => IJWTPayload;
};
//# sourceMappingURL=jwtHelper.d.ts.map