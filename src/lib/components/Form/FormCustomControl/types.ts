import { Control, ControllerProps } from 'react-hook-form';

export interface FormCustomControlProps extends ControllerProps {
  /* eslint-disable */ control: Control<any, any>;
}
