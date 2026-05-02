import httpStatus from 'http-status';
import catchAsync from '../../../app/shared/catchAsync.js';
import sendResponse from '../../../app/shared/sendResponse.js';
import { AuthService } from './auth.service.js';
const registerUser = catchAsync(async (req, res) => {
    const result = await AuthService.registerUser(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data: result,
    });
});
const loginUser = catchAsync(async (req, res) => {
    const result = await AuthService.loginUser(req.body);
    // Set cookies
    res.cookie('accessToken', result.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    res.cookie('refreshToken', result.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged in successfully',
        data: {
            accessToken: result.accessToken,
            refreshToken: result.refreshToken,
            user: result.user,
        },
    });
});
const refreshToken = catchAsync(async (req, res) => {
    const refreshToken = req.body.refreshToken || req.cookies.refreshToken;
    const result = await AuthService.refreshToken(refreshToken);
    // Set new access token cookie
    res.cookie('accessToken', result.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Token refreshed successfully',
        data: {
            accessToken: result.accessToken,
        },
    });
});
const changePassword = catchAsync(async (req, res) => {
    const user = req.user;
    const { ...passwordData } = req.body;
    await AuthService.changePassword(user, passwordData);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Password changed successfully',
        data: null,
    });
});
const logout = catchAsync(async (req, res) => {
    // Clear cookies
    res.clearCookie('accessToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User logged out successfully',
        data: null,
    });
});
export const AuthController = {
    registerUser,
    loginUser,
    refreshToken,
    changePassword,
    logout,
};
//# sourceMappingURL=auth.controller.js.map