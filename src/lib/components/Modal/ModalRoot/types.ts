import { DialogContentProps } from '@radix-ui/react-dialog';

export interface ModalRootProps extends DialogContentProps {
  contentClassName?: string;
  contentId?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
