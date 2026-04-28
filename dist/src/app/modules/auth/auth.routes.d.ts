export declare const authRoutes: import("express-serve-static-core").Router;
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password for the user (not returned in responses)
 *         role:
 *           type: string
 *           enum: [Admin, Vendor, Customer]
 *           description: The role of the user
 *         status:
 *           type: string
 *           enum: [Active, Pending, Suspended]
 *           description: The status of the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The creation date
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The last update date
 *       required:
 *         - id
 *         - email
 *         - password
 *         - role
 *         - status
 *         - createdAt
 *         - updatedAt
 */ 
//# sourceMappingURL=auth.routes.d.ts.map