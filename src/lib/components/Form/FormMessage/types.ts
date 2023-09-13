enum FormMessageMatchs {
  valueMissing = 'valueMissing',
  badInput = 'badInput',
  patternMismatch = 'patternMismatch',
  rangeOverflow = 'rangeOverflow',
  rangeUnderflow = 'rangeUnderflow',
  stepMismatch = 'stepMismatch',
  tooLong = 'tooLong',
  tooShort = 'tooShort',
  typeMismatch = 'typeMismatch',
  valid = 'valid',
}

export interface FormMessageProps {
  className?: string;
  children?: React.ReactNode;
  match?:
    | keyof typeof FormMessageMatchs
    | ((value: string, formData: FormData) => boolean);
}
