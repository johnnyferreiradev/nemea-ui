import { twMerge } from 'tailwind-merge';

import { appLoaderVariants } from './variants';

import { AppLoaderProps } from './types';

export default function AppLoaderRoot({
  className = '',
  children,
  show = false,
}: AppLoaderProps) {
  return (
    <div className={twMerge(appLoaderVariants({ show }), className)}>
      {children}
    </div>
  );
}
