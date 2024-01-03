import { forwardRef } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { twMerge } from 'tailwind-merge';

import { ScrollBar } from '../ScrollBar';

import { ScrollAreaProps } from './types';

export const ScrollAreaRoot = forwardRef<
  React.ElementRef<ScrollAreaProps>,
  React.ComponentPropsWithoutRef<ScrollAreaProps>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    className={twMerge('relative overflow-hidden', className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className="h-full w-full rounded-[inherit]"
      ref={ref}
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollAreaRoot.displayName = ScrollAreaPrimitive.Root.displayName;
