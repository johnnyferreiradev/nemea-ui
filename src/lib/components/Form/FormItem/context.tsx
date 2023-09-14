import { createContext } from 'react';

import { FormItemContextValue } from './types';

export const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);
