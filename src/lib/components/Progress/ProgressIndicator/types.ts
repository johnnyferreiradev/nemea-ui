import { ProgressIndicatorProps as RadixProgressIndicatorProps } from '@radix-ui/react-progress';

export enum ProgressIndicatorColors {
  primary = 'bg-[var(--primary-color)]',
  primary100 = 'bg-[var(--primary-color-100)]',
  primary300 = 'bg-[var(--primary-color-300)]',
  primary400 = 'bg-[var(--primary-color-400)]',
  secondary = 'bg-[var(--secondary-color)]',
  secondary200 = 'bg-[var(--secondary-color-200)]',
  tertiary1 = 'bg-[var(--tertiary-color-1)]',
  tertiary2 = 'bg-[var(--tertiary-color-2)]',
  tertiary3 = 'bg-[var(--tertiary-color-3)]',
  support1 = 'bg-[var(--support-pastel-color-1)]',
  support2 = 'bg-[var(--support-pastel-color-2)]',
  white = 'bg-[var(--white-color)]',
}

export interface ProgressIndicatorProps extends RadixProgressIndicatorProps {
  className?: string;
  color?: keyof typeof ProgressIndicatorColors;
  asChild?: boolean;
}
