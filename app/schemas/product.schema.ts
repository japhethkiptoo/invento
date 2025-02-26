import { z } from 'zod';

export const productCategorySchema = z.object({
  title: z.string().min(1, 'Product Category Title is required'),
  description: z.string(),
});
