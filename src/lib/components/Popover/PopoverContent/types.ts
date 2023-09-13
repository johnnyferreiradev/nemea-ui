import { PopoverContentProps as RadixPopoverContentProps } from '@radix-ui/react-popover';

export interface PopoverContentProps extends RadixPopoverContentProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  theme?: 'white' | 'dark';
  side?: 'top' | 'right' | 'bottom' | 'left';
}
