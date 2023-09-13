import { AppLoaderLoaderProps } from './types';
import Loader from '../../Loader';

export default function AppLoaderLoader({
  type = 'bubbles',
  className = '',
  color = 'primary',
  size = 'md',
}: AppLoaderLoaderProps) {
  return <Loader className={className} type={type} color={color} size={size} />;
}
