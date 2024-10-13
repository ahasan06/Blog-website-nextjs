import { z } from "zod";

export const  usernameValidation = z
     .string()
     .min(3,{message:"username must be at least 3 characters long"})
     .max(16,{message: "Username must not be more than 16characters"})
     .regex(/^[a-zA-Z]+$/, {message:"Username must only contain letters"});

export const passwordValidation = z
     .string()
     .min(6, { message: "Password must be at least 6 characters long" })
     .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
     .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
     .regex(/\d/, { message: "Password must contain at least one number (0-9)" });

export const emailValidation = z
        .string()
        .email({ message: "Invalid email address" })

export const signUpSchema  = z.object({
            name: usernameValidation,
            email: emailValidation,
            password: passwordValidation,
})
        