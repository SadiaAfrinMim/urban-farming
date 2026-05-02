import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { userFilterableFields } from "./user.constant.js";
import httpStatus from "http-status";
import { UserService } from "./user.service.js";
import pick from "../../helpers/pick.js";
const createCustomer = catchAsync(async (req, res) => {
    const result = await UserService.createCustomer(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Customer created successfully!",
        data: result
    });
});
const createAdmin = catchAsync(async (req, res) => {
    const result = await UserService.createAdmin(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Admin Created successfuly!",
        data: result
    });
});
const createVendor = catchAsync(async (req, res) => {
    const result = await UserService.createVendor(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Vendor Created successfuly!",
        data: result
    });
});
const createVendorPublic = catchAsync(async (req, res) => {
    const result = await UserService.createVendorPublic(req);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Vendor created successfully!",
        data: result
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, userFilterableFields); // searching , filtering
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]); // pagination and sorting
    const result = await UserService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "User retrive successfully!",
        meta: result.meta,
        data: result.data
    });
});
const getMyProfile = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await UserService.getMyProfile(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My profile data fetched!",
        data: result
    });
});
const changeProfileStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await UserService.changeProfileStatus(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Users profile status changed!",
        data: result
    });
});
const updateMyProfile = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await UserService.updateMyProfile(user, req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My profile updated!",
        data: result
    });
});
export const UserController = {
    createCustomer,
    createAdmin,
    createVendor,
    createVendorPublic,
    getAllFromDB,
    getMyProfile,
    changeProfileStatus,
    updateMyProfile
};
//# sourceMappingURL=user.controller.js.map