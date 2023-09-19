import { forwardRef } from 'react';
import * as RadixSwitch from '@radix-ui/react-switch';

import { switchVariants, switchThumbVariants } from './variants';

import { SwitchProps } from './types';

const Switch = forwardRef<
  React.ElementRef<typeof RadixSwitch.Root>,
  React.ComponentPropsWithoutRef<typeof RadixSwitch.Root> & SwitchProps
>(({ className, size = 'sm', theme = 'primary', ...props }, ref) => (
  <RadixSwitch.Root
    className={switchVariants({ size, theme, className })}
    {...props}
    ref={ref}
  >
    <RadixSwitch.Thumb className={switchThumbVariants({ size })} />
  </RadixSwitch.Root>
));

Switch.displayName = RadixSwitch.Root.displayName;

export default Switch;
