import 'express-serve-static-core';

declare module 'express-serve-static-core' {
  interface Request {
    uploadedImages?: Array<{
      public_id: string;
      secure_url: string;
      [key: string]: unknown;
    }>;
    profilePhotoUrl?: string;
    certificationUrls?: string[];
    imageUrl?: string;
  }
}
