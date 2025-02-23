import { HeadContent, Scripts } from "@tanstack/react-router";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { seo } from "../lib/seo";
import appCss from "@/styles/app.css?url";

//application root
export const Route = createRootRoute({
  head: () => ({
    ...seo({ title: "Inventon", description: "Inventory Management" }),
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
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
