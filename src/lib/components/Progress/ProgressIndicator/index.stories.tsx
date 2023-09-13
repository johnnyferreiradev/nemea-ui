import { Meta, StoryObj } from '@storybook/react';

import { Progress } from '../index';
import { ProgressIndicatorProps, ProgressIndicatorColors } from './types';

export default {
  title: 'Components/Progress/ProgressIndicator',
  component: Progress.Indicator,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    style: { transform: `translateX(-${100 - 40}%)` },
  },
} as Meta<ProgressIndicatorProps>;

export const Default: StoryObj<ProgressIndicatorProps> = {
  decorators: [
    (Story) => {
      return <Progress.Root>{Story()}</Progress.Root>;
    },
  ],
};

export const Colors: StoryObj<ProgressIndicatorProps> = {
  decorators: [
    (Story) => (
      <div className="flex flex-col">
        {Object.keys(ProgressIndicatorColors).map((color) => (
          <div key={color} className="flex flex-col items-center flex-wrap">
            <div className="flex items-center gap-2 mb-2">
              <Progress.Root value={40}>
                {Story({
                  args: {
                    color: color as keyof typeof ProgressIndicatorColors,
                    style: { transform: `translateX(-${100 - 40}%)` },
                  },
                })}
              </Progress.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center mb-4">
              {color}
            </p>
          </div>
        ))}
      </div>
    ),
  ],
};
