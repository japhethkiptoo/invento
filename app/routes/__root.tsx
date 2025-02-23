import { HeadContent, Scripts } from "@tanstack/react-router";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { seo } from "../utils/seo";

//application root
export const Route = createRootRoute({
  head: () => ({
    ...seo({ title: "Inventon", description: "Inventory Management" }),
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
