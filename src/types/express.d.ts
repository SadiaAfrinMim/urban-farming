import 'express-serve-static-core';
import { IJWTPayload } from '../app/types/common.js';

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
    user?: IJWTPayload;
  }
}
