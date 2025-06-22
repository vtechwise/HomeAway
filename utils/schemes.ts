import * as z from "zod";

export const profileScheme = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  userName: z.string().min(2),
});
