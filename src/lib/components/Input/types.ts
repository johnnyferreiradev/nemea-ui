enum InputThemes {
  white = 'white',
  gray = 'gray',
  noBorder = 'noBorder',
  shadow = 'shadow',
  dark = 'dark',
}

enum InputSizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  theme?: keyof typeof InputThemes;
  size?: keyof typeof InputSizes;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}
