enum InputThemes {
  light = 'light',
  gray = 'gray',
  noBorder = 'noBorder',
  shadow = 'shadow',
  dark = 'dark',
}

enum InputSizes {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  theme?: keyof typeof InputThemes;
  size?: keyof typeof InputSizes;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
}
