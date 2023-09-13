import { twMerge } from 'tailwind-merge';
import ReactPaginate from 'react-paginate';

import { PaginationControlProps } from './types';

export default function PaginationControl({
  className = '',
  onPageChange,
  pageRangeDisplayed = 1,
  page,
  pageCount,
  breakLabel,
  nextLabel,
  previousLabel,
}: PaginationControlProps) {
  return (
    <ReactPaginate
      className={twMerge(
        'au-pagination-control w-max flex items-center justify-between',
        className,
      )}
      pageClassName={twMerge(
        'text-base font-semibold rounded-full hover:bg-[var(--gray-color)]',
        'h-10 w-10 p-0 mx-1.5 [&>a]:rounded-full',
        '[&>a]:p-4 [&>a]:h-10 [&>a]:h-10 [&>a]:flex [&>a]:items-center [&>a]:justify-center',
        '[&.selected]:bg-[var(--dark-color)] [&.selected]:text-[var(--white-color)] [&.selected:hover]:bg-[var(--grayscale-400)]',
        '[&>a]:outline-[var(--gray-color)]',
        'dark:text-[var(--white-color)] dark:hover:bg-[var(--grayscale-400)] [&>a]:dark:outline-[var(--grayscale-300)]',
      )}
      breakClassName={twMerge(
        '[&>a]:h-10 [&>a]:w-10 [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:outline-[var(--gray-color)]',
        '[&>a]:rounded-full [&>a:hover]:bg-[var(--gray-color)]',
        '[&>a]:dark:text-[var(--white-color)] [&>a]:dark:hover:bg-[var(--grayscale-400)] [&>a]:dark:outline-[var(--grayscale-300)]',
      )}
      nextClassName={twMerge(
        '[&>a]:h-10 [&>a]:w-10 [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:outline-[var(--gray-color)]',
        '[&>a]:text-[var(--primary-color)] [&>a]:rounded-full [&>a]:hover:bg-[var(--gray-color)]',
        '[&>a_i]:text-xl [&>a_i]:leading-4 [&.disabled>a:hover]:bg-transparent [&>a[aria-disabled="true"]_i]:text-[var(--grayscale-100)]',
        '[&>a]:dark:text-[var(--primary-color-100)] [&>a]:dark:hover:bg-[var(--grayscale-400)] [&>a]:dark:outline-[var(--grayscale-300)]',
        '[&.disabled>a:hover]:dark:bg-transparent [&>a[aria-disabled="true"]_i]:dark:text-[var(--grayscale-300)]',
      )}
      previousClassName={twMerge(
        '[&>a]:h-10 [&>a]:w-10 [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:outline-[var(--gray-color)]',
        '[&>a]:text-[var(--primary-color)] [&>a]:rounded-full [&>a]:hover:bg-[var(--gray-color)]',
        '[&>a_i]:text-xl [&>a_i]:leading-4 [&.disabled>a:hover]:bg-transparent [&>a[aria-disabled="true"]_i]:text-[var(--grayscale-100)]',
        '[&>a]:dark:text-[var(--primary-color-100)] [&>a]:dark:hover:bg-[var(--grayscale-400)] [&>a]:dark:outline-[var(--grayscale-300)]',
        '[&.disabled>a:hover]:dark:bg-transparent [&>a[aria-disabled="true"]_i]:dark:text-[var(--grayscale-300)]',
      )}
      onPageChange={onPageChange}
      forcePage={page}
      pageRangeDisplayed={pageRangeDisplayed}
      pageCount={pageCount}
      previousLabel={previousLabel}
      breakLabel={breakLabel}
      nextLabel={nextLabel}
    />
  );
}
