import multer from 'multer';
export declare const fileUploader: {
    upload: multer.Multer;
    uploadToCloudinary: (file: Express.Multer.File) => Promise<import("cloudinary").UploadApiResponse>;
    deleteFromCloudinary: (publicId: string) => Promise<any>;
};
//# sourceMappingURL=fileUploader.d.ts.map