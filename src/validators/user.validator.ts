import { z } from "zod";

const createUserSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["ADMIN", "ANALYST", "VIEWER", "MANAGER"], {
        message: "Role must be ADMIN, ANALYST, VIEWER or MANAGER"
    }),
});

const updateUserSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters").optional(),
    email: z.email("Invalid email address").optional(),
    password: z.string().min(6, "Password too short").optional(),
});

const updateRoleSchema = z.object({
    role: z.enum(["ADMIN", "ANALYST", "VIEWER", "MANAGER"], {
        message: "Role must be ADMIN, ANALYST, VIEWER or MANAGER"
    }),
});

const updateStatusSchema = z.object({
    status: z.enum(["ACTIVE", "INACTIVE"], {
        message: "Status must be ACTIVE or INACTIVE"
    }),
});

export {
    createUserSchema,
    updateUserSchema,
    updateRoleSchema,
    updateStatusSchema
};