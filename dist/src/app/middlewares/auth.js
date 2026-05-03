// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
// import { Secret } from "jsonwebtoken";
// import config from "../../config";
// import ApiError from "../errors/ApiError";
// import { jwtHelper } from "../helpers/jwtHelper";
// import { IJWTPayload } from "../types/common";
import httpStatus from "http-status";
import config from "../../config/index.js";
import ApiError from "../errors/ApiError.js";
import { jwtHelper } from "../helpers/jwtHelper.js";
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            let token;
            if (authHeader && typeof authHeader === 'string') {
                if (authHeader.toLowerCase().startsWith('bearer ')) {
                    token = authHeader.slice(7).trim();
                }
                else {
                    token = authHeader.trim();
                }
            }
            // Fallback to cookies
            if (!token && req.cookies && req.cookies.accessToken) {
                token = req.cookies.accessToken.trim();
            }
            console.log({ token }, "from auth guard");
            if (!token) {
                throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized!");
            }
            const verifiedUser = jwtHelper.verifyToken(token, config.jwt.jwt_secret);
            req.user = verifiedUser;
            if (roles.length && !roles.includes(verifiedUser.role)) {
                throw new ApiError(httpStatus.FORBIDDEN, "Forbidden!");
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
export default auth;
//# sourceMappingURL=auth.js.map