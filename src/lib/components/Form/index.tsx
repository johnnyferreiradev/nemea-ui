import { FormProvider } from 'react-hook-form';

import FormField from './FormField';
import FormItem from './FormItem';
import FormLabel from './FormLabel';
import FormControl from './FormControl';
import FormDescription from './FormDescription';
import FormMessage from './FormMessage';

const FormRoot = FormProvider;

export const Form = {
  Root: FormRoot,
  Field: FormField,
  Item: FormItem,
  Label: FormLabel,
  Control: FormControl,
  Description: FormDescription,
  Message: FormMessage,
};
