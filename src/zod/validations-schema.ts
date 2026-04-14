import { z } from "zod";

export const ticketSchema = z.object({
  name: z.string().trim().min(2, "Please enter a valid name."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value && value.length > 0 ? value : undefined)),
  phone: z
    .string()
    .trim()
    .optional()
    .transform((value) => (value && value.length > 0 ? value : undefined)),
  services: z.array(z.string().trim()).optional().default([]),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});

export type Ticket = z.infer<typeof ticketSchema>;
