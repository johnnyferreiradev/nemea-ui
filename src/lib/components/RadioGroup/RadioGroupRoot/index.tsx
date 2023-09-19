import { forwardRef } from 'react';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

import { radioGroupRootVariants } from './variants';

const RadioGroupRoot = forwardRef<
  React.ElementRef<typeof RadixRadioGroup.Root>,
  React.ComponentPropsWithoutRef<typeof RadixRadioGroup.Root>
>(({ className, orientation = 'vertical', ...props }, ref) => {
  return (
    <RadixRadioGroup.Root
      className={radioGroupRootVariants({ orientation, className })}
      {...props}
      ref={ref}
    />
  );
});

RadioGroupRoot.displayName = RadixRadioGroup.Root.displayName;

export default RadioGroupRoot;
