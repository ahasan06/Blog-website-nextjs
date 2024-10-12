import { z } from "zod";


export const emailValidation = z
        .string()
        .email({ message: "Invalid email address" })

export const passwordValidation = z
     .string()
     .min(6, { message: "Password must be at least 6 characters long" })
     .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
     .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
     .regex(/\d/, { message: "Password must contain at least one number (0-9)" });

export const signUpSchema  = z.object({
            email: emailValidation,
            password: passwordValidation,
})
        
        