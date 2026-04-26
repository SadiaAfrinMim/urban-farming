import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
declare const validateRequest: (schema: ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default validateRequest;
//# sourceMappingURL=ValidateRequest.d.ts.map