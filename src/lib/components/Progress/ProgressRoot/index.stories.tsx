import { Meta, StoryObj } from '@storybook/react';

import { Progress } from '../index';
import { ProgressProps, ProgressSizes } from './types';

export default {
  title: 'Components/Progress/ProgressRoot',
  component: Progress.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <Progress.Indicator style={{ transform: `translateX(-${100 - 40}%)` }} />
    ),
  },
} as Meta<ProgressProps>;

export const Default: StoryObj<ProgressProps> = {};

export const Sizes: StoryObj<ProgressProps> = {
  decorators: [
    () => (
      <div>
        {Object.keys(ProgressSizes).map((size) => (
          <div
            key={size}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Progress.Root
                value={40}
                className="mt-4"
                size={size as keyof typeof ProgressSizes}
              >
                <Progress.Indicator
                  style={{ transform: `translateX(-${100 - 40}%)` }}
                />
              </Progress.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{size}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
