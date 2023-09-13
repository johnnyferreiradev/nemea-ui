import { LoadingProps as ReactLoadingProps } from 'react-loading';

export enum LoaderTypes {
  blank = 'blank',
  balls = 'balls',
  bars = 'bars',
  bubbles = 'bubbles',
  cubes = 'cubes',
  cylon = 'cylon',
  spin = 'spin',
  spinningBubbles = 'spinningBubbles',
  spokes = 'spokes',
}

export enum LoaderColors {
  'primary' = 'primary-color',
  'primary100' = 'primary-color-100',
  'primary300' = 'primary-color-300',
  'primary400' = 'primary-color-400',
  'secondary' = 'secondary-color',
  'secondary200' = 'secondary-color-200',
  'tertiary1' = 'tertiary-color-1',
  'tertiary2' = 'tertiary-color-2',
  'tertiary3' = 'tertiary-color-3',
  'support1' = 'support-pastel-color-1',
  'support2' = 'support-pastel-color-2',
  'white' = 'white-color',
}

export enum LoaderSizes {
  xs = '18px',
  sm = '26px',
  md = '52px',
  lg = '104px',
}

export interface LoaderProps extends ReactLoadingProps {
  type?: keyof typeof LoaderTypes;
  className?: string;
  color?: keyof typeof LoaderColors;
  size?: keyof typeof LoaderSizes;
}
