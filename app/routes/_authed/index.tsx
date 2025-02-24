import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button variant={'destructive'}>Click me</Button>
      <Button asChild>
        <Link to={'/logout'}>Logout</Link>
      </Button>
    </div>
  );
}
