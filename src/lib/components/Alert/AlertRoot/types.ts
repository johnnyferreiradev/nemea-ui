enum AlertRootThemes {
  success = 'success',
  failure = 'failure',
  warning = 'warning',
}

export interface AlertRootProps {
  className?: string;
  children: React.ReactNode;
  theme?: keyof typeof AlertRootThemes;
}
