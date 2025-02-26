import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Plus } from 'lucide-react';
import * as React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { NewProductCategoryForm } from '@/components/product/productCategoryForm';
import { ProductCategoryList } from '@/components/product/productCategoryList';

export const Route = createFileRoute('/_authed/products/categories')({
  component: RouteComponent,
});

function RouteComponent() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const NewCategoryDrawer = () => {
    if (isMobile) {
      return (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>New Category</DrawerTitle>
              <DrawerDescription>
                Create a new category for your products.
              </DrawerDescription>
            </DrawerHeader>
            <NewProductCategoryForm
              className="p-4"
              onClose={() => setOpen(false)}
            />

            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    }

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Category</DialogTitle>
            <DialogDescription>
              Create a new category for your products.
            </DialogDescription>
          </DialogHeader>
          <NewProductCategoryForm onClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 ">
        <div className="flex-1"></div>
        <div>
          <Button onClick={() => setOpen(true)} size="sm" variant={'outline'}>
            <Plus />
            New Category
          </Button>
        </div>
      </div>

      {/* category list */}
      <ProductCategoryList />
      <NewCategoryDrawer />
    </div>
  );
}
