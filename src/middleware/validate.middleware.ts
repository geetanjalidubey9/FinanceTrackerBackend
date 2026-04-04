import { Request, Response, NextFunction } from "express";
import { ZodType } from "zod";
import { sendBadRequest } from "../utils/response";

const validateMiddleware = (schema: ZodType) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            const errors = result.error.issues.map((err) => ({
                field: err.path.join("."),
                message: err.message
            }));

            return sendBadRequest(res, errors[0].message);
        }

        req.body = result.data;
        next();
    };
};

export { validateMiddleware };