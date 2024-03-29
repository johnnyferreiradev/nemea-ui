import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import { AlertRootProps } from './types';

const alertRoot = tv({
  base: [
    'au-alert-root w-full translate-x-[var(--radix-toast-swipe-move-x)]',
    'p-4 rounded-lg outline-none animate-fade-in-down',
    'grid grid-rows-[max-content_max-content] grid-cols-[max-content_auto_max-content] gap-x-4 gap-y-0',
    'items-center',
  ],
  variants: {
    theme: {
      success: [
        'bg-success-200/40 border border-solid border-success-200/40',
        '[&>.au-alert-icon]:text-success-800',
        '[&>.au-alert-content>.au-alert-title]:text-success-800',
        '[&>.au-alert-content>.au-alert-description]:text-success-800',
        '[&>.au-alert-close>.au-alert-close-button]:text-success-800',

        'dark:bg-grayscale-800/40 dark:border-grayscale-800/40',
        'dark:[&>.au-alert-icon]:text-success-300',
        'dark:[&>.au-alert-content>.au-alert-title]:text-success-300',
        'dark:[&>.au-alert-content>.au-alert-description]:text-success-300',
        'dark:[&>.au-alert-close>.au-alert-close-button]:text-success-300',
      ],
      failure: [
        'bg-failure-200/40 border border-solid border-failure-200/40',
        '[&>.au-alert-icon]:text-failure-800',
        '[&>.au-alert-content>.au-alert-title]:text-failure-800',
        '[&>.au-alert-content>.au-alert-description]:text-failure-800',
        '[&>.au-alert-close>.au-alert-close-button]:text-failure-800',

        'dark:bg-grayscale-800/40 dark:border-grayscale-800/40',
        'dark:[&>.au-alert-icon]:text-failure-300',
        'dark:[&>.au-alert-content>.au-alert-title]:text-failure-300',
        'dark:[&>.au-alert-content>.au-alert-description]:text-failure-300',
        'dark:[&>.au-alert-close>.au-alert-close-button]:text-failure-300',
      ],
      warning: [
        'bg-warning-200/40 border border-solid border-warning-200/40',
        '[&>.au-alert-icon]:text-warning-800',
        '[&>.au-alert-content>.au-alert-title]:text-warning-800',
        '[&>.au-alert-content>.au-alert-description]:text-warning-800',
        '[&>.au-alert-close>.au-alert-close-button]:text-warning-800',

        'dark:bg-grayscale-800/40 dark:border-grayscale-800/40',
        'dark:[&>.au-alert-icon]:text-warning-300',
        'dark:[&>.au-alert-content>.au-alert-title]:text-warning-300',
        'dark:[&>.au-alert-content>.au-alert-description]:text-warning-300',
        'dark:[&>.au-alert-close>.au-alert-close-button]:text-warning-300',
      ],
    },
  },
});

export default function AlertRoot({
  className = '',
  children,
  theme = 'warning',
}: AlertRootProps) {
  return (
    <div className={twMerge(alertRoot({ theme }), className)}>{children}</div>
  );
}
