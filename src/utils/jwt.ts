import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret";
const JWT_EXPIRES_IN = "7d";

const generateToken = (payload: object) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

const verifyToken = (token: string) => {
    return jwt.verify(token, JWT_SECRET);
};

export { generateToken, verifyToken };