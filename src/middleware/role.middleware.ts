import { Request, Response, NextFunction } from "express";
import { sendForbidden } from "../utils/response";

const roleMiddleware = (...roles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = (req as any).user;

        if (!user) {
            return sendForbidden(res, "No user found");
        }

        if (!roles.includes(user.role)) {
            return sendForbidden(res, "You do not have permission");
        }

        next();
    };
};

export { roleMiddleware };