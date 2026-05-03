import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import ApiError from "../errors/ApiError.js";
import httpStatus from "http-status";

const validateRequest = (schema: ZodObject<any>) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
            });
            next();
        } catch (error: any) {
            next(new ApiError(httpStatus.BAD_REQUEST, error.errors?.[0]?.message || 'Validation Error'));
        }
    };
};

export default validateRequest;
