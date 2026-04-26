import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('Cloudinary Configuration:');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY ? '***' : 'NOT SET');
console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? '***' : 'NOT SET');

// Test upload with a 1x1 red pixel PNG
const testUpload = async () => {
  try {
    // 1x1 red pixel PNG (base64)
    const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
    
    const result = await cloudinary.uploader.upload(base64Image, {
      public_id: 'test-upload-' + Date.now(),
      resource_type: 'image',
    });
    
    console.log('✅ Upload successful!');
    console.log('Result:', result);
    
    // Clean up - delete the test image
    await cloudinary.uploader.destroy(result.public_id);
    console.log('✅ Test image deleted');
  } catch (error) {
    console.error('❌ Upload failed:');
    console.error('Error Name:', error.name);
    console.error('Error Message:', error.message);
    console.error('Error Code:', error.http_code || error.code);
    if (error.errors) {
      console.error('Detailed Errors:', error.errors);
    }
    console.error('Full Error Object:', JSON.stringify(error, null, 2));
  }
};

testUpload();
