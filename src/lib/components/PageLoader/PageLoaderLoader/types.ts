import { LoaderColors, LoaderSizes, LoaderTypes } from '../../Loader/types';

export interface PageLoaderLoaderProps {
  className?: string;
  color?: keyof typeof LoaderColors;
  size?: keyof typeof LoaderSizes;
  type?: keyof typeof LoaderTypes;
}
