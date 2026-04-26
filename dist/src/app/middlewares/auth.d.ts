import { NextFunction, Request, Response } from "express";
import { IJWTPayload } from "../types/common";
declare const auth: (...roles: string[]) => (req: Request & {
    user?: IJWTPayload;
}, res: Response, next: NextFunction) => Promise<void>;
export default auth;
//# sourceMappingURL=auth.d.ts.map