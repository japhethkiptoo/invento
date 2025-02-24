import { useAppSession } from '@/lib/session';
import { createServerFn } from '@tanstack/start';

export const fetchSession = createServerFn({ method: 'GET' }).handler(
  async () => {
    const session = await useAppSession();

    if (!session.data?.auth) {
      return null;
    }

    return {
      auth: session.data?.auth,
      user: session.data?.user,
    };
  }
);
