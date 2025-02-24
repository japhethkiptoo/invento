import { useAppSession } from '@/lib/session';
import { redirect } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';

export const logoutFn = createServerFn().handler(async () => {
  const session = await useAppSession();
  //kill session
  await session.clear();

  //redirect /
  throw redirect({
    href: '/',
  });
});
