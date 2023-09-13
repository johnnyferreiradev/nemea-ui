export interface DropdownRadioGroupProps {
  className?: string;
  id?: string;
  children: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}
