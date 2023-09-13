import { TooltipContentProps as RadixTooltipContentProps } from '@radix-ui/react-tooltip';

export interface TooltipContentProps extends RadixTooltipContentProps {
  className?: string;
  id?: string;
  children?: React.ReactNode;
  theme?: 'white' | 'dark';
  side?: 'top' | 'right' | 'bottom' | 'left';
}
