import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router';
import { Outlet } from '@tanstack/react-router';
import type { ReactNode } from 'react';
import { seo } from '../lib/seo';
import appCss from '@/styles/app.css?url';
import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import { fetchSession } from '@/core/http/auth/sessionfn';

//application root
export const Route = createRootRoute({
  head: () => ({
    ...seo({ title: 'Inventon', description: 'Inventory Management' }),
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => <h1>404</h1>,
  beforeLoad: async () => {
    return await fetchSession();
  },
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      <Toaster />
    </RootDocument>
  );
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <TanStackRouterDevtools position="bottom-right" initialIsOpen={false} />
      </body>
    </html>
  );
}
