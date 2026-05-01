import multer from 'multer';
import path from 'path';
import { v2 as cloudinary } from 'cloudinary';


// Multer storage (memory)
const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  fileFilter: (req, file, cb) => {
    // Allow images for profile photos and both images and PDFs for certifications
    let allowedTypes;
    if (file.fieldname === 'profilePhoto') {
      allowedTypes = /jpeg|jpg|png|gif/;
    } else if (file.fieldname === 'certification') {
      allowedTypes = /jpeg|jpg|png|gif|pdf/;
    } else {
      // For other files (like produce images), allow images
      allowedTypes = /jpeg|jpg|png|gif/;
    }

    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      cb(null, true);
    } else {
      cb(new Error(`Only allowed file types are permitted for ${file.fieldname}!`));
    }
  },
});

// Cloudinary config (run once ideally)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

// Upload to Cloudinary
const uploadToCloudinary = async (file: Express.Multer.File) => {
  try {
    console.log('Starting Cloudinary upload for file:', file.originalname, 'size:', file.size, 'mimetype:', file.mimetype);

    // Check if Cloudinary is configured
    if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_SECRET) {
      console.error('Cloudinary configuration missing:', {
        api_key: !!process.env.CLOUDINARY_API_KEY,
        cloud_name: !!process.env.CLOUDINARY_CLOUD_NAME,
        api_secret: !!process.env.CLOUDINARY_API_SECRET
      });
      throw new Error('Cloudinary configuration is incomplete');
    }

    // Configure Cloudinary
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const publicId = `image-${uniqueSuffix}`;

    console.log('Uploading to Cloudinary with public_id:', publicId);

    const uploadResult = await cloudinary.uploader.upload(
      `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
      {
        public_id: publicId,
        resource_type: 'auto',
        folder: 'urban-farming',
      }
    );

    console.log('Cloudinary upload successful:', uploadResult.secure_url);
    return uploadResult;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw new Error(`Failed to upload file to Cloudinary: ${error.message || error}`);
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