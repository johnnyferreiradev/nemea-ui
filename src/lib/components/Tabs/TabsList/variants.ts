import { tv } from 'tailwind-variants';

export const tabsListVariants = tv({
  base: [
    'au-tabs-list p-2 w-max rounded-[14px] flex gap-1',
    'data-[orientation="horizontal"]:flex-col',
  ],
  variants: {
    theme: {
      default: [
        'bg-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--dark-color)]', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:bg-[var(--gray-color)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--dark-color)]', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--white-color)]', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-[var(--grayscale-400)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--white-color)]', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)]',
      ],
      white: [
        'bg-[var(--gray-color)]',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:bg-none [&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--dark-color)]', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:bg-[var(--white-color)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--dark-color)]', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:bg-[var(--grayscale-100)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)]',

        // darkmode
        'dark:bg-[var(--grayscale-400)]',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:dark:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--white-color)]', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-[var(--dark-color)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--white-color)]', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:bg-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-200)]',
      ],
      dark: [
        'bg-[var(--grayscale-400)]',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:bg-none [&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--white-color)]', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:bg-[var(--dark-color)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--white-color)]', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:bg-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)]',

        // darkmode
        'dark:bg-[var(--gray-color)]',
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--dark-color)]', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-[var(--white-color)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--dark-color)]', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:bg-[var(--grayscale-100)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-200)]',
      ],
      darkUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--dark-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-x-transparent [&>.au-tabs-trigger[data-state="active"]]:border-t-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-b-[var(--dark-color)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--dark-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-[var(--graycale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--white-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-b-[var(--white-color)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--white-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-[var(--graycale-300)]',
      ],
      primaryUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--primary-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-x-transparent [&>.au-tabs-trigger[data-state="active"]]:border-t-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-b-[var(--primary-color-100)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--primary-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-[var(--graycale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--primary-color-100)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-b-[var(--primary-color)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--primary-color-100)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-[var(--graycale-300)]',
      ],
      leftDarkUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--dark-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-y-transparent [&>.au-tabs-trigger[data-state="active"]]:border-r-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-l-[var(--dark-color)]',
        '[&>.au-tabs-trigger[data-state="active"]]:bg-[var(--gray-color)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--dark-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-l-[var(--graycale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--white-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-l-[var(--white-color)]',
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-[var(--grayscale-400)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--white-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:border-l-[var(--graycale-300)]',
      ],
      rightDarkUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--dark-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-y-transparent [&>.au-tabs-trigger[data-state="active"]]:border-l-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-r-[var(--dark-color)]',
        '[&>.au-tabs-trigger[data-state="active"]]:bg-[var(--gray-color)] [&>.au-tabs-trigger[data-state="active"]]:text-[var(--dark-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-r-[var(--graycale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--white-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-r-[var(--white-color)]',
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-[var(--grayscale-400)] [&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--white-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:border-r-[var(--graycale-300)]',
      ],
      leftPrimaryUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--primary-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-y-transparent [&>.au-tabs-trigger[data-state="active"]]:border-r-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-l-[var(--primary-color-100)]',
        '[&>.au-tabs-trigger[data-state="active"]]:text-[var(--primary-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-l-[var(--graycale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--primary-color-100)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-l-[var(--primary-color)]',
        '[&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--primary-color-100)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:border-l-[var(--graycale-300)]',
      ],
      rightPrimaryUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-[var(--grayscale-200)]', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:text-[var(--grayscale-100)]', // disabled
        '[&>.au-tabs-trigger:hover]:text-[var(--primary-color)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-y-transparent [&>.au-tabs-trigger[data-state="active"]]:border-l-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-r-[var(--primary-color-100)]',
        '[&>.au-tabs-trigger[data-state="active"]]:text-[var(--primary-color)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-[var(--grayscale-200)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-r-[var(--graycale-200)]',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:text-[var(--grayscale-300)]', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-[var(--primary-color-100)]', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-r-[var(--primary-color)]',
        '[&>.au-tabs-trigger[data-state="active"]]:dark:text-[var(--primary-color-100)]',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-[var(--grayscale-300)] [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:border-r-[var(--graycale-300)]',
      ],
    },
    rounded: {
      true: 'rounded-[44px] [&>.au-tabs-trigger]:rounded-[22px]',
      false: '',
    },
  },
});
