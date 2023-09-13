import { twMerge } from 'tailwind-merge';

import { [FTName]Props } from './types';

export default function [FTName]({
  className = '',
  id,
}: [FTName]Props) {
  return (
    <div
      className={twMerge('am-[FTName | lowercase]', className)}
      id={id}
    >
      [FTName]
    </div>
  );
}
