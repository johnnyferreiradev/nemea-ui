export interface DropdownCheckboxItemProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
}
