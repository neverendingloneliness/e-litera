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