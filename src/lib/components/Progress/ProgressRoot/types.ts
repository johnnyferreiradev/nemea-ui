import { ProgressProps as RadixProgressProps } from '@radix-ui/react-progress';

export enum ProgressSizes {
  sm = 'w-[200px] h-[17px]',
  md = 'w-[300px] h-[25px]',
  lg = 'w-[400px] h-[33px]',
}

export interface ProgressProps extends RadixProgressProps {
  className?: string;
  size?: keyof typeof ProgressSizes;
  asChild?: boolean;
  value?: number;
  max?: number;
  getValueLabel?: (value: number, max: number) => string;
}
