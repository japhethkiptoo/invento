import { useAppSession } from '@/lib/session';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed')({
  component: RouteComponent,
  beforeLoad: async ({ location, context }) => {
    const auth = (context as any)?.auth || false;

    if (!auth) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.pathname,
        },
      });
    }
  },
});

function RouteComponent() {
  return <Outlet />;
}
