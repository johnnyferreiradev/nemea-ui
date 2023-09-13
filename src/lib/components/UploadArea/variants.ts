import { tv } from 'tailwind-variants';

export const uploadAreaVariants = tv({
  base: [
    'au-upload-area',
    'w-full min-h-[284px]',
    'flex items-center justify-center',
    'rounded-[8px]',
    'border-2 border-dashed border-[var(--grayscale-100)]',
    'dark:border-[var(--grayscale-300)]',
    'focus:outline-none',
    'group-data-[overed=true]:border-solid group-data-[overed=true]:bg-[var(--gray-color)]',
    'dark:group-data-[overed=true]:bg-[var(--grayscale-400)]',
  ],
});
