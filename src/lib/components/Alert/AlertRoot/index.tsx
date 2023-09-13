import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

import { AlertRootProps } from './types';

const alertRoot = tv({
  base: [
    'au-alert-root w-full translate-x-[var(--radix-toast-swipe-move-x)]',
    'py-5 px-6 rounded-xl outline-none animate-fade-in-down',
    'grid grid-rows-[max-content] grid-cols-[max-content_auto_max-content_max-content] gap-4',
    'items-center',
  ],
  variants: {
    theme: {
      success: [
        'bg-[var(--success-color)] border border-solid border-[var(--success-color)]',
        '[&>.au-alert-icon]:text-[var(--success-color)] [&>.au-alert-icon]:bg-[var(--white-color)]',
        '[&>.au-alert-content>.au-alert-title]:text-[var(--white-color)]',
        '[&>.au-alert-content>.au-alert-description]:text-[var(--white-color)]',
        '[&>.au-alert-close>.au-alert-close-button]:text-[var(--white-color)]',
      ],
      danger: [
        'bg-[var(--danger-color)] border border-solid border-[var(--danger-color)]',
        '[&>.au-alert-icon]:text-[var(--danger-color)] [&>.au-alert-icon]:bg-[var(--white-color)]',
        '[&>.au-alert-content>.au-alert-title]:text-[var(--white-color)]',
        '[&>.au-alert-content>.au-alert-description]:text-[var(--white-color)]',
        '[&>.au-alert-close>.au-alert-close-button]:text-[var(--white-color)]',
      ],
      danger100: [
        'bg-[var(--danger-color-100)] border border-solid border-[var(--danger-color-100)]',
        '[&>.au-alert-icon]:text-[var(--danger-color)] [&>.au-alert-icon]:bg-[var(--white-color)]',
        '[&>.au-alert-content>.au-alert-title]:text-[var(--danger-color)]',
        '[&>.au-alert-content>.au-alert-description]:text-[var(--danger-color)]',
        '[&>.au-alert-close>.au-alert-close-button]:text-[var(--danger-color)]',
      ],
      warning: [
        'bg-[var(--warning-color-100)] border border-solid border-[var(--warning-color)]',
        '[&>.au-alert-icon]:text-[var(--dark-color)] [&>.au-alert-icon]:bg-[var(--warning-color)]',
        '[&>.au-alert-content>.au-alert-title]:text-[var(--dark-color)]',
        '[&>.au-alert-content>.au-alert-description]:text-[var(--grayscale-300)]',
        '[&>.au-alert-close>.au-alert-close-button]:text-[var(--grayscale-300)]',
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
