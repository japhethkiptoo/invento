import { forwardRef } from 'react';
import { AnyFieldApi, useForm } from '@tanstack/react-form';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { productCategorySchema } from '@/schemas/product.schema';

const FieldInfo = ({ field }: { field: AnyFieldApi }) => {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-sm text-red-500">
          {JSON.stringify(
            field.state.meta.errors.map((e) => e.message).join(',')
          )}
        </em>
      ) : null}
    </>
  );
};

export const NewProductCategoryForm = forwardRef<
  HTMLFormElement,
  React.HTMLAttributes<HTMLDivElement> & { onClose: () => void }
>(({ className, onClose, ...props }, ref) => {
  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
    },
    validators: {
      onChange: productCategorySchema,
    },
    onSubmit: (values) => {
      console.log(values);
      onClose();
    },
  });

  return (
    <form
      ref={ref}
      className={cn('flex flex-col gap-6', className)}
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit();
      }}
    >
      <div className="grid gap-2">
        <form.Field
          name="title"
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Category Title</Label>
              <Input
                id={field.name}
                name={field.name}
                type="text"
                placeholder="product category title"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
      </div>
      <div className="grid gap-2">
        <form.Field
          name="description"
          children={(field) => (
            <>
              <Label htmlFor={field.name}>Category Descripton</Label>
              <Textarea
                id={field.name}
                name={field.name}
                placeholder="product category description"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </>
          )}
        />
      </div>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" className="w-full" disabled={!canSubmit}>
            {isSubmitting ? '...' : 'Add Category'}
          </Button>
        )}
      />
    </form>
  );
});
