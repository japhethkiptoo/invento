import { logoutFn } from '@/core/http/auth/logoutfn';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/logout')({
  preload: false,
  loader: () => logoutFn(),
});
