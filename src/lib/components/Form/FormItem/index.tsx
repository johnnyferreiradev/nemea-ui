import { twMerge } from 'tailwind-merge';

import { FormItemContext } from './context';

import { forwardRef, useId } from 'react';

const FormItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        ref={ref}
        className={twMerge('am-form-item space-y-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = 'FormItem';

export default FormItem;
