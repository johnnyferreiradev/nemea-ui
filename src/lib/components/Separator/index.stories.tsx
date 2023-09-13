import { Meta, StoryObj } from '@storybook/react';

import Separator from './index';
import { SeparatorColors, SeparatorProps } from './types';

export default {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
} as Meta<SeparatorProps>;

export const Default: StoryObj<SeparatorProps> = {
  decorators: [
    (Story) => {
      return <div>{Story()}</div>;
    },
  ],
};

export const Colors: StoryObj<SeparatorProps> = {
  decorators: [
    () => (
      <div>
        {Object.keys(SeparatorColors).map((color) => (
          <div key={color} className="flex flex-col items-center px-6 py-8">
            <Separator
              color={color as keyof typeof SeparatorColors}
              className="w-full"
            />
            <p className="text-[var(--grayscale-200)] text-center mt-4">
              {color}
            </p>
          </div>
        ))}
      </div>
    ),
  ],
};
