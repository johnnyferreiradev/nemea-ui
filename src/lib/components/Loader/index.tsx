import ReactLoading from 'react-loading';

import { LoaderColors, LoaderProps, LoaderSizes } from './types';

export default function Loader({
  type = 'spin',
  className = '',
  color = 'primary',
  size = 'md',
}: LoaderProps) {
  return (
    <ReactLoading
      className={className}
      type={type}
      color={`var(--${LoaderColors[color]})`}
      width={LoaderSizes[size]}
      height={LoaderSizes[size]}
    />
  );
}
