import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed")({
  component: RouteComponent,
  beforeLoad: () => {
    throw redirect({
        to: '/login'
    })
  }
});

function RouteComponent() {
  return <Outlet />;
}
