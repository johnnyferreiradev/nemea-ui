import { DropzoneInputProps } from 'react-dropzone';

export interface UploadAreaProps extends DropzoneInputProps {
  onDropHandler: (files: File[]) => void;
}
