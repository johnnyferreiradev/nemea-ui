export enum LoaderColors {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'tertiary' = 'tertiary',
  'success' = 'success',
  'failure' = 'failure',
  'warning' = 'warning',
  'dark' = 'dark',
  'light' = 'light',
  'white' = 'white',
}

export enum LoaderSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface LoaderProps {
  className?: string;
  color?: keyof typeof LoaderColors;
  size?: keyof typeof LoaderSizes;
}
