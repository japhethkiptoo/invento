import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/products/categories')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_authed/products/categories"!</div>;
}
