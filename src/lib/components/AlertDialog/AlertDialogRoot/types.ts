import { AlertDialogContentProps } from '@radix-ui/react-alert-dialog';

export interface AlertDialogRootProps extends AlertDialogContentProps {
  contentClassName?: string;
  contentId?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
