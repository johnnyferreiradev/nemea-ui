import { LoaderColors, LoaderSizes } from '../../Loader/types';

export interface PageLoaderLoaderProps {
  className?: string;
  color?: keyof typeof LoaderColors;
  size?: keyof typeof LoaderSizes;
}
