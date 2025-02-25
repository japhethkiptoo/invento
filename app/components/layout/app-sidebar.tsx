import { Link } from '@tanstack/react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { Command } from 'lucide-react';
import { NavMain, Item as NavItem } from './nav-main';
import { appConfig } from '@/config/app';
import { NavUser } from '../auth/nav-user';

const navigation: { category?: string; items: NavItem[] }[] = [
  {
    category: 'Navigation',
    items: [
      {
        title: 'Dashboard',
        url: '/',
        icon: Command,
      },
      {
        title: 'Products',
        url: '/products',
        icon: Command,
        items: [
          {
            title: 'Products',
            url: '/products',
          },
          {
            title: 'Categories',
            url: '/products/categories',
          },
        ],
      },
    ],
  },
];

export const AppSidebar = () => {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size={'lg'} asChild>
              <Link to={'/'}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {appConfig.title}
                  </span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {navigation.map((item, i) => (
          <NavMain key={i} category={item.category} items={item.items} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={{ name: 'Cherish', email: 'b7K3y@example.com' }} />
      </SidebarFooter>
    </Sidebar>
  );
};
