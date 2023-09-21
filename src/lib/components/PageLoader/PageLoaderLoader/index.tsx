import { twMerge } from 'tailwind-merge';

import Loader from '../../Loader';

import { PageLoaderLoaderProps } from './types';

export default function PageLoaderLoader({
  className = '',
  color = 'primary',
  size,
}: PageLoaderLoaderProps) {
  return (
    <Loader
      className={twMerge('au-page-loader-loader mb-4', className)}
      color={color}
      size={size}
    />
  );
}
