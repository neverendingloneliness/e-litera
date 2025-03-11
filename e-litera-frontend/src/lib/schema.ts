import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
  password: z.string().max(8, {
    message: "Password must be 8 characters.",
  }),
  password_confirmation: z.string().max(8, {
    message: "Password must be 8 characters.",
  }),
})

export const loginSchema = z.object({
  email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
  password: z.string().max(8, {
    message: "Password must be 8 characters.",
  }),
})

export const forumSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters long").max(100, "Title cannot exceed 100 characters"),
  content: z.string().min(10, "Content must be at least 10 characters long").max(1000, "Content cannot exceed 1000 characters"),
});