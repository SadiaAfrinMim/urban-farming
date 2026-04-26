"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileUploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const cloudinary_1 = require("cloudinary");
const config_1 = __importDefault(require("../../config"));
// Multer storage (memory)
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
    },
    fileFilter: (req, file, cb) => {
        // Allow images for profile photos and both images and PDFs for certifications
        let allowedTypes;
        if (file.fieldname === 'profilePhoto') {
            allowedTypes = /jpeg|jpg|png|gif/;
        }
        else if (file.fieldname === 'certification') {
            allowedTypes = /jpeg|jpg|png|gif|pdf/;
        }
        else {
            // For other files (like produce images), allow images
            allowedTypes = /jpeg|jpg|png|gif/;
        }
        const extname = allowedTypes.test(path_1.default.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        if (mimetype && extname) {
            cb(null, true);
        }
        else {
            cb(new Error(`Only allowed file types are permitted for ${file.fieldname}!`));
        }
    },
});
// Cloudinary config (run once ideally)
cloudinary_1.v2.config({
    cloud_name: config_1.default.cloudinary.cloud_name,
    api_key: config_1.default.cloudinary.api_key,
    api_secret: config_1.default.cloudinary.api_secret,
});
// Upload to Cloudinary
const uploadToCloudinary = async (file) => {
    try {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const publicId = `${file.fieldname}-${uniqueSuffix}`;
        const uploadResult = await cloudinary_1.v2.uploader.upload(`data:${file.mimetype};base64,${file.buffer.toString('base64')}`, {
            public_id: publicId,
            resource_type: 'auto',
        });
        return uploadResult;
    }
    catch (error) {
        console.error('Cloudinary upload error:', error);
        throw new Error('Failed to upload file to Cloudinary');
    }
};
// Delete from Cloudinary
const deleteFromCloudinary = async (publicId) => {
    try {
        const result = await cloudinary_1.v2.uploader.destroy(publicId);
        return result;
    }
    catch (error) {
        console.error('Cloudinary delete error:', error);
        throw new Error('Failed to delete file from Cloudinary');
    }
};
exports.fileUploader = {
    upload,
    uploadToCloudinary,
    deleteFromCloudinary,
};
//# sourceMappingURL=fileUploader.js.map