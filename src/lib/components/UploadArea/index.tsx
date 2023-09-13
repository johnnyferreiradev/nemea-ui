import { useState } from 'react';
import Dropzone from 'react-dropzone';

import { twMerge } from 'tailwind-merge';

import { uploadAreaVariants } from './variants';

import { UploadAreaProps } from './types';

export default function UploadArea({
  className = '',
  onDropHandler,
  children,
}: UploadAreaProps) {
  const [overed, setOvered] = useState(false);

  return (
    <Dropzone
      onDrop={onDropHandler}
      onDragEnter={() => setOvered(true)}
      onDragLeave={() => setOvered(false)}
    >
      {({ getRootProps, getInputProps }) => (
        <section data-overed={overed} className="group">
          <div
            {...getRootProps()}
            className={twMerge(uploadAreaVariants(), className)}
          >
            <input {...getInputProps()} />
            {children}
          </div>
        </section>
      )}
    </Dropzone>
  );
}
