import { Controller } from 'react-hook-form';

import { FormCustomControlProps } from './types';

export default function FormCustomControl({ ...rest }: FormCustomControlProps) {
  return <Controller {...rest} />;
}
