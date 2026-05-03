import ApiError from "../errors/ApiError.js";
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
            next(new ApiError(httpStatus.BAD_REQUEST, error.errors?.[0]?.message || 'Validation Error'));
        }
    };
};
export default validateRequest;
//# sourceMappingURL=ValidateRequest.js.map