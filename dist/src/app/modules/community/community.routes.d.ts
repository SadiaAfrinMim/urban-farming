export declare const communityRoutes: import("express-serve-static-core").Router;
/**
 * @swagger
 * components:
 *   schemas:
 *     CommunityPost:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique identifier for the post
 *         userId:
 *           type: string
 *           description: The ID of the user who created the post
 *         postContent:
 *           type: string
 *           description: The content of the post
 *         postDate:
 *           type: string
 *           format: date-time
 *           description: The date and time when the post was created
 *         user:
 *           $ref: '#/components/schemas/User'
 *       required:
 *         - id
 *         - userId
 *         - postContent
 *         - postDate
 */ 
//# sourceMappingURL=community.routes.d.ts.map