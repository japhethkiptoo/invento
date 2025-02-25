import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <code>dashboard</code>
    </div>
  );
}
