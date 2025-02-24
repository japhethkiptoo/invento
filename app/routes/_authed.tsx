import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed')({
  component: RouteComponent,
  beforeLoad: ({ context: { auth }, location }) => {
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
