"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const registerUser = async (payload) => {
    const { name, email, password, role = client_1.UserRole.Customer } = payload;
    const hashedPassword = await bcryptjs_1.default.hash(password, 12);
    const user = await prisma_1.default.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role,
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
        },
    });
    return user;
};
const loginUser = async (payload) => {
    const { email, password } = payload;
    const user = await prisma_1.default.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordValid) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid credentials');
    }
    const accessToken = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, config_1.default.jwt.jwt_secret, { expiresIn: config_1.default.jwt.expires_in });
    const refreshToken = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, config_1.default.jwt.refresh_token_secret, { expiresIn: config_1.default.jwt.refresh_token_expires_in });
    return {
        accessToken,
        refreshToken,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
};
const refreshToken = async (token) => {
    let decoded;
    try {
        decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt.refresh_token_secret);
    }
    catch (err) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid refresh token');
    }
    const { id } = decoded;
    const user = await prisma_1.default.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const accessToken = jsonwebtoken_1.default.sign({ id: user.id, role: user.role }, config_1.default.jwt.jwt_secret, { expiresIn: config_1.default.jwt.expires_in });
    return {
        accessToken,
    };
};
const changePassword = async (user, payload) => {
    const { oldPassword, newPassword } = payload;
    const existingUser = await prisma_1.default.user.findUnique({
        where: { id: user.id },
    });
    if (!existingUser) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const isOldPasswordValid = await bcryptjs_1.default.compare(oldPassword, existingUser.password);
    if (!isOldPasswordValid) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Old password is incorrect');
    }
    const hashedNewPassword = await bcryptjs_1.default.hash(newPassword, 12);
    await prisma_1.default.user.update({
        where: { id: user.id },
        data: { password: hashedNewPassword },
    });
};
exports.AuthService = {
    registerUser,
    loginUser,
    refreshToken,
    changePassword,
};
//# sourceMappingURL=auth.service.js.map