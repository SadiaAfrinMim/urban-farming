"use strict";
// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
// import { Secret } from "jsonwebtoken";
// import config from "../../config";
// import ApiError from "../errors/ApiError";
// import { jwtHelper } from "../helpers/jwtHelper";
// import { IJWTPayload } from "../types/common";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const jwtHelper_1 = require("../helpers/jwtHelper");
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
                throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized!");
            }
            const verifiedUser = jwtHelper_1.jwtHelper.verifyToken(token, config_1.default.jwt.jwt_secret);
            req.user = verifiedUser;
            if (roles.length && !roles.includes(verifiedUser.role)) {
                throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Forbidden!");
            }
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = auth;
//# sourceMappingURL=auth.js.map