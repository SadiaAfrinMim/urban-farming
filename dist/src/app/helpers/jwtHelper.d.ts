import jwt, { Secret } from "jsonwebtoken";
export declare const jwtHelper: {
    generateToken: (payload: any, secret: Secret, expiresIn: string) => string;
    verifyToken: (token: string, secret: Secret) => jwt.JwtPayload;
};
//# sourceMappingURL=jwtHelper.d.ts.map