import ApiError from "../errors/ApiError";
import httpStatus from "http-status";
const validateRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params,
                cookies: req.cookies,
            });
            next();
        }
        catch (error) {
            next(new ApiError(error.errors?.[0]?.message || 'Validation Error', httpStatus.BAD_REQUEST));
        }
    };
};
export default validateRequest;
//# sourceMappingURL=ValidateRequest.js.map