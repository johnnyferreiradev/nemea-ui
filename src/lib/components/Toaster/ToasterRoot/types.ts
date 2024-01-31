export enum ToasterRootThemes {
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  success = 'success',
  failure = 'failure',
  warning = 'warning',
}

export enum ToasterRootPositions {
  'top-right' = 'top-right',
  'top-center' = 'top-center',
  'top-left' = 'top-left',
  'bottom-right' = 'bottom-right',
  'bottom-center' = 'bottom-center',
  'bottom-left' = 'bottom-left',
}

export interface ToasterRootProps {
  className?: string;
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  defaultOpen?: boolean;
  trigger?: React.ReactNode;
  theme?: keyof typeof ToasterRootThemes;
  position?: keyof typeof ToasterRootPositions;
}
