import { Meta, StoryObj } from '@storybook/react';

import Loader from './index';
import { LoaderProps, LoaderTypes, LoaderColors, LoaderSizes } from './types';

export default {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
} as Meta<LoaderProps>;

export const Default: StoryObj<LoaderProps> = {};

export const Types: StoryObj<LoaderProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(LoaderTypes).map((type) => (
          <div
            key={type}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Loader type={type as keyof typeof LoaderTypes} />
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{type}</p>
          </div>
        ))}
      </div>
    ),
  ],
};

export const Colors: StoryObj<LoaderProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(LoaderColors).map((color) => (
          <div
            key={color}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Loader color={color as keyof typeof LoaderColors} />
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{color}</p>
          </div>
        ))}
      </div>
    ),
  ],
};

export const Sizes: StoryObj<LoaderProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(LoaderSizes).map((size) => (
          <div
            key={size}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Loader size={size as keyof typeof LoaderSizes} />
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{size}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
