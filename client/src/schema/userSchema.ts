import { z } from "zod";

export const userSignupSchema = z.object({
  fullname: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  contact: z.string().min(10, "Contact number must be at least 10 digits"),
});

export type SignupInputTypes = z.infer<typeof userSignupSchema>;

export const userloginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInputTypes = z.infer<typeof userloginSchema>;
