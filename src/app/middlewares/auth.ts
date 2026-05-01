// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
// import { Secret } from "jsonwebtoken";
// import config from "../../config";
// import ApiError from "../errors/ApiError";
// import { jwtHelper } from "../helpers/jwtHelper";
// import { IJWTPayload } from "../types/common";


// const auth = (...roles: string[]) => {
//     return async (req: Request & { user?: IJWTPayload; Vendor?: IJWTPayload }, res: Response, next: NextFunction) => {
//         try {
//             const authHeader = req.headers.authorization;
//             let token;

//             if (authHeader) {
//                 if (typeof authHeader === 'string') {
//                     if (authHeader.toLowerCase().startsWith('bearer ')) {
//                         token = authHeader.slice(7).trim();
//                     } else {
//                         // Assume the header contains the token directly
//                         token = authHeader.trim();
//                     }
//                 } else if (Array.isArray(authHeader)) {
//                     // Handle multiple headers (rare case)
//                     const header = authHeader[0];
//                     if (header.toLowerCase().startsWith('bearer ')) {
//                         token = header.slice(7).trim();
//                     } else {
//                         token = header.trim();
//                     }
//                 }
//             }

//             // Fallback to cookies
//             if (!token && req.cookies && req.cookies.accessToken) {
//                 token = req.cookies.accessToken.trim();
//             }

//             console.log({
//                 authHeader: authHeader ? (typeof authHeader === 'string' ? authHeader.substring(0, 30) + '...' : authHeader) : 'undefined',
//                 cookieToken: req.cookies?.accessToken ? req.cookies.accessToken.substring(0, 20) + '...' : 'undefined',
//                 finalToken: token ? token.substring(0, 20) + '...' : 'undefined',
//                 tokenLength: token?.length,
//                 hasToken: !!token,
//                 tokenValid: token && token !== 'undefined' && token !== 'null' && token.length > 10
//             }, "from auth guard");

//             if (!token || token === 'undefined' || token === 'null' || token.length < 10) {
//                 throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized! No valid token found.")
//             }

//             let verifiedUser;
//             try {
//                 if (!token || token.length < 10) {
//                     throw new Error("Invalid or missing token");
//                 }

//                 console.log("Token received:", token.substring(0, 20) + "...");
//                 console.log("JWT Secret:", config.jwt.jwt_secret ? config.jwt.jwt_secret.substring(0, 10) + '...' : 'undefined');

//                 // Additional validation
//                 const tokenParts = token.split('.');
//                 if (tokenParts.length !== 3) {
//                     throw new Error("Token is not a valid JWT format (should have 3 parts separated by dots)");
//                 }

//                 verifiedUser = jwtHelper.verifyToken(token, config.jwt.jwt_secret as Secret);
//                 console.log({ verifiedUser, roles }, "auth middleware debug");
//             } catch (jwtError: any) {
//                 console.error("JWT verification failed:", jwtError.message);
//                 console.error("Token details:", {
//                     tokenLength: token?.length,
//                     tokenStart: token?.substring(0, 20),
//                     hasSecret: !!config.jwt.jwt_secret,
//                     errorType: jwtError.name
//                 });
//                 throw new ApiError(httpStatus.UNAUTHORIZED, `Invalid token: ${jwtError.message}`);
//             }

//             req.user = verifiedUser;

//             if (roles.includes('Vendor')) {
//                 req.Vendor = verifiedUser;
//             }

//             if (roles.length && !roles.includes(verifiedUser.role)) {
//                 console.log(`Role check failed: user role "${verifiedUser.role}" not in roles ${roles}`);
//                 throw new ApiError(httpStatus.FORBIDDEN, "Forbidden!")
//             }
//             next()
//         }
//         catch (err) {
//             next(err)
//         }
//     }
// };

// export default auth; 



import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../../config";
import ApiError from "../errors/ApiError";
import { jwtHelper } from "../helpers/jwtHelper";
import { IJWTPayload } from "../types/common";


const auth = (...roles: string[]) => {
    return async (req: Request & { user?: IJWTPayload }, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.authorization;
            let token;

            if (authHeader && typeof authHeader === 'string') {
                if (authHeader.toLowerCase().startsWith('bearer ')) {
                    token = authHeader.slice(7).trim();
                } else {
                    token = authHeader.trim();
                }
            }

            // Fallback to cookies
            if (!token && req.cookies && req.cookies.accessToken) {
                token = req.cookies.accessToken.trim();
            }

            console.log({ token }, "from auth guard");
            

            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized!")
            }

            const verifiedUser = jwtHelper.verifyToken(token, config.jwt.jwt_secret as Secret);

            req.user = verifiedUser;

            if (roles.length && !roles.includes(verifiedUser.role)) {
                throw new ApiError(httpStatus.FORBIDDEN, "Forbidden!")
            }
            next()
        }
        catch (err) {
            next(err)
        }
    }
};

export default auth;