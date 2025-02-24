import { loginSchema } from '@/schemas/auth.schema';
import { createServerFn } from '@tanstack/start';

export const loginfn = createServerFn({
  method: 'POST',
})
  .validator(loginSchema)
  .handler((value) => {
    console.log(value);
    return { success: true, message: 'Login successful' };
  });
