import multer from 'multer';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';
import config from '../../config';

// Multer storage (memory)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;

    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  },
});

// Cloudinary config (run once ideally)
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name!,
  api_key: config.cloudinary.api_key!,
  api_secret: config.cloudinary.api_secret!,
});

// Upload to Cloudinary
const uploadToCloudinary = async (file: Express.Multer.File) => {
  try {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const publicId = `${file.fieldname}-${uniqueSuffix}`;

    const uploadResult = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
      {
        public_id: publicId,
        resource_type: 'auto',
      }
    );

    return uploadResult;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error('Failed to upload file to Cloudinary');
  }
};

// Delete from Cloudinary
const deleteFromCloudinary = async (publicId: string) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    throw new Error('Failed to delete file from Cloudinary');
  }
};

export const fileUploader = {
  upload,
  uploadToCloudinary,
  deleteFromCloudinary,
};