export enum TextElements {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  pre = 'pre',
  small = 'small',
  code = 'code',
  sup = 'sup',
  sub = 'sub',
  span = 'span',
  strong = 'strong',
}

export enum TextSizes {
  xs = 'text-xs',
  sm = 'text-sm',
  base = 'text-base',
  lg = 'text-lg',
  xl = 'text-xl',
  '2xl' = 'text-2xl',
  '3xl' = 'text-3xl',
  '4xl' = 'text-4xl',
  '5xl' = 'text-5xl',
  '6xl' = 'text-6xl',
  '7xl' = 'text-7xl',
  '8xl' = 'text-8xl',
  '9xl' = 'text-9xl',
}

export enum TextColors {
  primary100 = 'text-[var(--primary-color-100)]',
  primary200 = 'text-[var(--primary-color)]',
  primary300 = 'text-[var(--primary-color-300)]',
  primary400 = 'text-[var(--primary-color-400)]',

  secondary100 = 'text-[var(--secondary-color)]',
  secondary200 = 'text-[var(--secondary-color-200)]',

  tertiary1 = 'text-[var(--tertiary-color-1)]',
  tertiary2 = 'text-[var(--tertiary-color-2)]',
  tertiary3 = 'text-[var(--tertiary-color-3)]',

  supportPastel1 = 'text-[var(--support-pastel-color-1)]',
  supportPastel2 = 'text-[var(--support-pastel-color-2)]',

  whiteGray = 'text-[var(--white-gray-color)]',
  gray = 'text-[var(--gray-color)]',
  grayscale100 = 'text-[var(--grayscale-100)]',
  grayscale200 = 'text-[var(--grayscale-200)]',
  grayscale300 = 'text-[var(--grayscale-300)]',
  grayscale400 = 'text-[var(--grayscale-400)]',

  success100 = 'text-[var(--success-color-100)]',
  success200 = 'text-[var(--success-color)]',
  success300 = 'text-[var(--success-color-300)]',

  warning100 = 'text-[var(--warning-color-100)]',
  warning200 = 'text-[var(--warning-color)]',

  danger100 = 'text-[var(--danger-color-100)]',
  danger200 = 'text-[var(--danger-color)]',
  danger300 = 'text-[var(--danger-color-300)]',

  dark = 'text-[var(--dark-color)]',
  white = 'text-[var(--white-color)]',
}

export enum TextWeights {
  'thin' = 'font-thin',
  'extralight' = 'font-extralight',
  'light' = 'font-light',
  'normal' = 'font-normal',
  'medium' = 'font-medium',
  'semibold' = 'font-semibold',
  'bold' = 'font-bold',
  'extrabold' = 'font-extrabold',
  'black' = 'font-black',
}

export enum TextAligns {
  'left' = 'text-left',
  'center' = 'text-center',
  'right' = 'text-right',
  'justify' = 'text-justify',
  'start' = 'text-start',
  'end' = 'text-end',
}

export enum TextDecorations {
  'underline' = 'underline',
  'overline' = 'overline',
  'line-through' = 'line-through',
  'no-underline' = 'no-underline',
}

export interface TextProps {
  className?: string;
  id?: string;
  element?: keyof typeof TextElements;
  children: React.ReactNode;
  size?: keyof typeof TextSizes;
  color?: keyof typeof TextColors;
  weight?: keyof typeof TextWeights;
  align?: keyof typeof TextAligns;
  decoration?: keyof typeof TextDecorations;
  italic?: boolean;
  limited?: boolean;
}
