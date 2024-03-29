import { tv } from 'tailwind-variants';

export const toasterRoot = tv({
  base: [
    'au-toaster-root bg-light w-full',
    'dark:bg-grayscale-800 p-4 pt-[18px] rounded-lg outline-none',
    'shadow-md',
    'data-[state="closed"]:animate-fade-out',
    'data-[swipe="cancel"]:transition-transform',
    'data-[swipe="cancel"]:duration-200 data-[swipe="cancel"]:ease-[ease-out]',
    'grid grid-rows-[max-content_max-content] grid-cols-[max-content_auto_max-content] gap-4 gap-y-1',
    'items-center border-l-4 border-solid border-y-transparent border-r-transparent',
    'border-r-1 border-y-1',

    'data-[swipe-direction="right"]:data-[state="open"]:animate-slide-in-right',
    'data-[swipe-direction="left"]:data-[state="open"]:animate-slide-in-left',
    'data-[swipe-direction="up"]:data-[state="open"]:animate-slide-in-up',
    'data-[swipe-direction="down"]:data-[state="open"]:animate-slide-in-down',

    'data-[swipe-direction="right"]:translate-x-[var(--radix-toast-swipe-move-x)]',
    'data-[swipe-direction="left"]:translate-x-[var(--radix-toast-swipe-move-x)]',
    'data-[swipe-direction="up"]:translate-y-[var(--radix-toast-swipe-move-y)]',
    'data-[swipe-direction="down"]:translate-y-[var(--radix-toast-swipe-move-y)]',

    'data-[swipe-direction="up"]:data-[swipe="end"]:animate-swipe-out-up',
    'data-[swipe-direction="down"]:data-[swipe="end"]:animate-swipe-out-down',
    'data-[swipe-direction="right"]:data-[swipe="end"]:animate-swipe-out-right',
    'data-[swipe-direction="left"]:data-[swipe="end"]:animate-swipe-out-left',
  ],
  variants: {
    theme: {
      primary: [
        'border-l-4 border-l-primary-600',
        '[&>.au-toaster-icon]:text-primary-600',
      ],
      secondary: [
        'border-l-4 border-l-secondary-600',
        '[&>.au-toaster-icon]:text-secondary-600',
      ],
      tertiary: [
        'border-l-4 border-l-tertiary-600',
        '[&>.au-toaster-icon]:text-tertiary-600',
      ],
      success: [
        'border-l-4 border-l-success-500',
        '[&>.au-toaster-icon]:text-success-500',
      ],
      failure: [
        'border-l-4 border-l-failure-500',
        '[&>.au-toaster-icon]:text-failure-500',
      ],
      warning: [
        'border-l-4 border-l-warning-400',
        '[&>.au-toaster-icon]:text-warning-400 [&>.au-toaster-icon]:bg-warning-400',
      ],
    },
  },
});

export const toasterViewport = tv({
  base: [
    'outline-none fixed flex flex-col p-4 translate-x-0',
    'gap-3 w-full max-w-max z-50',
  ],
  variants: {
    position: {
      'top-right': 'top-0 right-0',
      'top-center': 'top-0 right-[50%] translate-x-[50%]',
      'top-left': 'top-0 left-0',
      'bottom-right': 'bottom-0 right-0',
      'bottom-center': 'bottom-0 right-[50%] translate-x-[50%]',
      'bottom-left': 'bottom-0 left-0',
    },
  },
});
