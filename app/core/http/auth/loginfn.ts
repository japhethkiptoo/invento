import { useAppSession } from '@/lib/session';
import { loginSchema } from '@/schemas/auth.schema';
import { createServerFn } from '@tanstack/start';

export const loginFn = createServerFn({
  method: 'POST',
})
  .validator(loginSchema)
  .handler(async (value) => {
    console.log(value);
    const session = await useAppSession();

    //set session
    await session.update({
      auth: true,
      user: {
        name: 'John Doe',
        role: 'admin',
      },
    });

    return { success: true, message: 'Login successful' };
  });
