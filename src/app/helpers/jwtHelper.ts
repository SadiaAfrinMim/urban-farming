import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";
import { IJWTPayload } from "../types/common";

const generateToken = (payload: any, secret: Secret, expiresIn: string) => {
    const token = jwt.sign(payload, secret, {
        algorithm: "HS256",
        expiresIn
    } as SignOptions
    );

    return token;
}

const verifyToken = (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as IJWTPayload
}

export const jwtHelper = {
    generateToken,
    verifyToken
}