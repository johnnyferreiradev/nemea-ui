import { forwardRef } from 'react';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { Circle } from '@phosphor-icons/react';

import { radioGroupItemVariants } from './variants';

import { RadioGroupItemProps } from './types';

const RadioGroupItem = forwardRef<
  React.ElementRef<typeof RadioGroup.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroup.Item> & RadioGroupItemProps
>(({ className, theme = 'primary', ...props }, ref) => {
  return (
    <RadioGroup.Item
      ref={ref}
      className={radioGroupItemVariants({ theme, className })}
      {...props}
    >
      <RadioGroup.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 text-light" weight="fill" />
      </RadioGroup.Indicator>
    </RadioGroup.Item>
  );
});

RadioGroupItem.displayName = RadioGroup.Item.displayName;

export default RadioGroupItem;
