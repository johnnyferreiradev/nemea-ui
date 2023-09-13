enum AlertRootThemes {
  success = 'success',
  danger = 'danger',
  warning = 'warning',
  danger100 = 'danger100',
}

export interface AlertRootProps {
  className?: string;
  children: React.ReactNode;
  theme?: keyof typeof AlertRootThemes;
}
