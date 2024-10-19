import { z } from "zod";

export const todoFormSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "title must be at least 5 characters.",
      })
      .max(20, {
        message: "title must not be longer than 20 characters.",
      }),
      body: z
      .string()
      .max(80, {
        message: "body must not be longer than 80 characters.",
      }).optional(),
      completed : z.boolean(),
  })

  export type todoFormValues = z.infer<typeof todoFormSchema>;