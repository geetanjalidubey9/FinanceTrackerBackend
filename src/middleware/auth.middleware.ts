import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { sendUnauthorized } from "../utils/response";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return sendUnauthorized(res, "No token provided");
        }
        const decoded = verifyToken(token);
        (req as any).user = decoded;
        next();
    } catch (error) {
        return sendUnauthorized(res, "Invalid or expired token");
    }
};

export { authMiddleware };