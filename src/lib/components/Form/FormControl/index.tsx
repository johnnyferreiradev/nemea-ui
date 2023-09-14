import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import { Slot } from '@radix-ui/react-slot';

import { FormControlProps } from './types';
import { forwardRef } from 'react';
import { useFormField } from '../FormField/hooks';

const formControlWrapper = tv({
  base: [
    'au-form-control-wrapper flex items-center rounded-lg border',
    '[&:has([aria-invalid="true"])]:border-failure-400',
  ],
  variants: {
    theme: {
      white: [
        'bg-light-color border-grayscale-200 focus-within:border-[var(--primary-color)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--grayscale-300)]',
        '[&.is-disabled]:bg-[var(--gray-color)] [&.is-disabled]:border-[var(--gray-color)]',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:[&.is-disabled>.au-form-control]:placeholder-[var(--grayscale-200)]',
      ],
      gray: [
        'bg-[var(--gray-color)] border-[var(--gray-color)] focus-within:border-[var(--gray-color)]',
        'dark:bg-[var(--grayscale-400)] dark:border-[var(--grayscale-400)]',
        '[&.is-disabled]:bg-grayscale-200 [&.is-disabled]:border-grayscale-200',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:[&.is-disabled>.au-form-control]:placeholder-[var(--grayscale-200)]',
      ],
      noBorder: [
        'bg-light-color border-light-color focus-within:border-light-color',
        'dark:bg-[var(--dark-color)] dark:border-[var(--dark-color)] dark:focus-within:border-[var(--dark-color)]',
        '[&.is-disabled]:bg-[var(--gray-color)] [&.is-disabled]:border-[var(--gray-color)]',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:[&.is-disabled>.au-form-control]:placeholder-[var(--grayscale-200)]',
      ],
      shadow: [
        'bg-light-color border-light-color focus-within:border-[var(--primary-color)]',
        'shadow-lg shadow-[var(--gray-color)] dark:shadow-[var(--grayscale-400)]',
        'dark:bg-[var(--dark-color)] dark:border-[var(--dark-color)] dark:focus-within:border-[var(--dark-color)]',
        '[&.is-disabled]:bg-[var(--gray-color)] [&.is-disabled]:border-[var(--gray-color)] [&.is-disabled]:shadow-none',
        'dark:[&.is-disabled]:bg-[var(--grayscale-300)] dark:[&.is-disabled]:border-[var(--grayscale-300)] dark:[&.is-disabled]:shadow-none',
        'dark:[&.is-disabled>.au-form-control]:placeholder-[var(--grayscale-200)]',
      ],
      dark: [
        'bg-[var(--dark-color)] border-[var(--dark-color)] focus-within:border-[var(--primary-color)]',
        '[&.is-disabled]:bg-[var(--grayscale-300)] [&.is-disabled]:border-[var(--grayscale-300)]',
        'dark:bg-light-color dark:border-light-color',
        'dark:[&.is-disabled]:bg-[var(--gray-color)] dark:[&.is-disabled]:border-[var(--gray-color)]',
      ],
    },
    size: {
      xs: 'p-1',
      sm: 'px-2 py-1',
      md: 'px-[14px] py-2',
      lg: 'px-[14px] py-2',
      xl: 'px-4 py-3',
    },
  },
});

const formControl = tv({
  base: [
    'au-form-control py-0 outline-none mx-1.5 w-full bg-transparent font-medium',
    'placeholder-[var(--grayscale-200)] dark:placeholder-[var(--grayscale-300)]',
    'resize-none default-scroll',
  ],
  variants: {
    theme: {
      white: ['text-[var(--dark-color)] dark:text-light-color'],
      gray: ['text-[var(--dark-color)] dark:text-light-color'],
      noBorder: ['text-[var(--dark-color)] dark:text-light-color'],
      shadow: ['text-[var(--dark-color)] dark:text-light-color'],
      dark: ['text-light-color dark:text-[var(--dark-color)]'],
    },
    size: {
      xs: 'text-xs h-[14px]',
      sm: 'text-sm h-[26px]',
      md: 'text-base h-[26px]',
      lg: 'text-lg h-[34px]',
      xl: 'text-xl h-[34px]',
    },
  },
});

const FormControl = forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot> & FormControlProps
>(
  (
    {
      theme = 'white',
      size = 'md',
      className,
      disabled,
      icon,
      actions,
      ...props
    },
    ref,
  ) => {
    const { error, formItemId, formDescriptionId, formMessageId } =
      useFormField();

    return (
      <div
        className={twMerge(
          formControlWrapper({ size, theme }),
          disabled ? 'is-disabled' : '',
        )}
      >
        <span>{icon}</span>
        <Slot
          ref={ref}
          id={formItemId}
          aria-describedby={
            !error
              ? `${formDescriptionId}`
              : `${formDescriptionId} ${formMessageId}`
          }
          aria-invalid={!!error}
          className={twMerge(formControl({ size, theme }), className)}
          {...props}
        />
        {actions}
      </div>
    );
  },
);

FormControl.displayName = 'FormControl';

export default FormControl;
