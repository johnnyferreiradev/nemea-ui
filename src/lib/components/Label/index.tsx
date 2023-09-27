'use client';

import { forwardRef } from 'react';
import * as RadixLabel from '@radix-ui/react-label';
import { twMerge } from 'tailwind-merge';

const Label = forwardRef<
  React.ElementRef<typeof RadixLabel.Root>,
  React.ComponentPropsWithoutRef<typeof RadixLabel.Root>
>(({ className, ...props }, ref) => (
  <RadixLabel.Root
    ref={ref}
    className={twMerge('au-label', className)}
    {...props}
  />
));

Label.displayName = RadixLabel.Root.displayName;

export default Label;
