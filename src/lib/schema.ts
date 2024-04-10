import { z } from "zod";

export const NewCategorySchema = z.object({
  title: z.string().min(1, "title is required"),
  description: z.string().min(1, "description is required"),
  image: z.string().min(1, "image is required"),
});

export const NewCouponSchema = z.object({
  title: z.string().min(1, "title is required"),
  code: z.string().min(1, "description is required"),
  expiryDate: z.coerce.date(),
  // expiryDate: z.string().min(1, "expiry date is required"),
});
