import { tv } from 'tailwind-variants';

export const tabsListVariants = tv({
  base: [
    'au-tabs-list p-1.5 w-max rounded-md flex gap-1',
    'data-[orientation="horizontal"]:flex-col',
  ],
  variants: {
    theme: {
      default: [
        'bg-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-grayscale-400', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:text-dark', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:bg-grayscale-100 [&>.au-tabs-trigger[data-state="active"]]:text-dark', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:opacity-30',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:dark:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-light', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-grayscale-800 [&>.au-tabs-trigger[data-state="active"]]:dark:text-light', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:opacity-30',
      ],
      light: [
        'bg-grayscale-50',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-grayscale-400', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:text-dark', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:bg-light [&>.au-tabs-trigger[data-state="active"]]:text-dark', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-grayscale-400',

        // darkmode
        'dark:bg-grayscale-800',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:dark:text-grayscale-400', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:dark:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-light', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-grayscale-700 [&>.au-tabs-trigger[data-state="active"]]:dark:text-light', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-grayscale-500',
      ],
      dark: [
        'bg-grayscale-800',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-grayscale-400', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:text-light', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:bg-grayscale-700 [&>.au-tabs-trigger[data-state="active"]]:text-light', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-grayscale-500',

        // darkmode
        'dark:bg-grayscale-50',
        '[&>button.au-tabs-trigger[data-disabled]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:dark:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-dark', // hover
        '[&>.au-tabs-trigger[data-state="active"]]:dark:bg-light [&>.au-tabs-trigger[data-state="active"]]:dark:text-dark', // selected
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:text-grayscale-400',
      ],
      darkUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-grayscale-400', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:text-dark', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-x-transparent [&>.au-tabs-trigger[data-state="active"]]:border-t-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-b-dark [&>.au-tabs-trigger[data-state="active"]]:text-dark',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-grayscale-300',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:dark:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-light', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-b-light [&>.au-tabs-trigger[data-state="active"]]:dark:text-light',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-grayscale-500',
      ],
      primaryUnderline: [
        'bg-none [&>.au-tabs-trigger]:rounded-none',
        '[&>.au-tabs-trigger]:bg-none [&>.au-tabs-trigger]:text-grayscale-400', // enabled
        '[&>button.au-tabs-trigger[data-disabled]]:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:text-primary-600', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:border-x-transparent [&>.au-tabs-trigger[data-state="active"]]:border-t-transparent',
        '[&>.au-tabs-trigger[data-state="active"]]:border-b-primary-300 [&>.au-tabs-trigger[data-state="active"]]:text-primary-600',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:text-grayscale-400 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-grayscale-300',

        // darkmode
        '[&>button.au-tabs-trigger[data-disabled]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled]]:dark:pointer-events-none', // disabled
        '[&>.au-tabs-trigger:hover]:dark:text-primary-300', // hover
        // selected
        '[&>.au-tabs-trigger[data-state="active"]]:dark:border-b-primary-600 [&>.au-tabs-trigger[data-state="active"]]:dark:text-primary-300',
        // disabled and selected
        '[&>button.au-tabs-trigger[data-disabled][data-state="active"]]:dark:opacity-30 [&>button.au-tabs-trigger[data-disabled][data-state="active"]]:border-b-grayscale-500',
      ],
    },
    rounded: {
      true: 'rounded-[44px] [&>.au-tabs-trigger]:rounded-[22px]',
      false: '',
    },
  },
});
