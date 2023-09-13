import { tv } from 'tailwind-variants';

export const switchThumbVariants = tv({
  base: [
    'au-switch-thumb',
    'block bg-white rounded-full',
    'transition will-change-transform duration-[0.4s]',
    'shadow-[0px_1px_4px_rgba(0,0,0,0.25)]',
  ],
  variants: {
    size: {
      sm: [
        'w-[18px] h-[18px] ',
        'translate-x-[1px] data-[state="checked"]:translate-x-[15px]',
      ],
      md: [
        'w-[27px] h-[27px] ',
        'translate-x-[1px] data-[state="checked"]:translate-x-[21px]',
      ],
      lg: [
        'w-[36px] h-[36px]',
        'translate-x-[1px] data-[state="checked"]:translate-x-[27px]',
      ],
    },
  },
});
