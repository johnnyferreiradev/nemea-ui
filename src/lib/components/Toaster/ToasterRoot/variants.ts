import { tv } from 'tailwind-variants';

export const toasterRoot = tv({
  base: [
    'au-toaster-root bg-[var(--light-color)]',
    'dark:bg-[--grayscale-color-800] p-4 rounded-lg outline-none',
    'shadow-md dark:shadow-[var(--grayscale-color-900)]',
    'data-[state="closed"]:animate-fade-out',
    'data-[swipe="cancel"]:transition-transform',
    'data-[swipe="cancel"]:duration-200 data-[swipe="cancel"]:ease-[ease-out]',
    'grid grid-rows-[max-content] grid-cols-[max-content_auto_max-content_max-content] gap-4',
    'items-center',

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
      success: [
        'bg-[var(--success-color)] border border-solid border-[var(--success-color)]',
        '[&>.au-toaster-icon]:text-[var(--success-color)] [&>.au-toaster-icon]:bg-[var(--white-color)]',
        '[&>.au-toaster-content>.au-toaster-title]:text-[var(--white-color)]',
        '[&>.au-toaster-content>.au-toaster-description]:text-[var(--white-color)]',
        '[&>.au-toaster-close]:text-[var(--white-color)]',
      ],
      danger: [
        'bg-[var(--danger-color)] border border-solid border-[var(--danger-color)]',
        '[&>.au-toaster-icon]:text-[var(--danger-color)] [&>.au-toaster-icon]:bg-[var(--white-color)]',
        '[&>.au-toaster-content>.au-toaster-title]:text-[var(--white-color)]',
        '[&>.au-toaster-content>.au-toaster-description]:text-[var(--white-color)]',
        '[&>.au-toaster-close]:text-[var(--white-color)]',
      ],
      danger100: [
        'bg-[var(--danger-color-100)] border border-solid border-[var(--danger-color-100)]',
        '[&>.au-toaster-icon]:text-[var(--danger-color)] [&>.au-toaster-icon]:bg-[var(--white-color)]',
        '[&>.au-toaster-content>.au-toaster-title]:text-[var(--danger-color)]',
        '[&>.au-toaster-content>.au-toaster-description]:text-[var(--danger-color)]',
        '[&>.au-toaster-close]:text-[var(--danger-color)]',
      ],
      warning: [
        'bg-[var(--warning-color-100)] border border-solid border-[var(--warning-color)]',
        '[&>.au-toaster-icon]:text-[var(--dark-color)] [&>.au-toaster-icon]:bg-[var(--warning-color)]',
        '[&>.au-toaster-content>.au-toaster-title]:text-[var(--dark-color)]',
        '[&>.au-toaster-content>.au-toaster-description]:text-[var(--grayscale-300)]',
        '[&>.au-toaster-close]:text-[var(--grayscale-300)]',
      ],
    },
  },
});

export const toasterViewport = tv({
  base: [
    'outline-none fixed flex flex-col p-4 translate-x-0',
    'gap-3 max-w-full z-50',
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
