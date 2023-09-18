import * as PopoverPrimitive from '@radix-ui/react-popover';

import PopoverContent from './PopoverContent';
import PopoverClose from './PopoverClose';

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverArrow = PopoverPrimitive.Arrow;

export const Popover = {
  Root: PopoverRoot,
  Close: PopoverClose,
  Anchor: PopoverAnchor,
  Content: PopoverContent,
  Trigger: PopoverTrigger,
  Arrow: PopoverArrow,
};
