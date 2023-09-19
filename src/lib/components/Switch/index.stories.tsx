import { Meta, StoryObj } from '@storybook/react';

import Switch from './index';
import { SwitchProps, SwitchSizes } from './types';

export default {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    disabled: false,
    theme: 'primary',
  },
} as Meta<SwitchProps>;

export const Default: StoryObj<SwitchProps> = {};

export const Sizes: StoryObj<SwitchProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(SwitchSizes).map((size) => (
          <div
            key={size}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Switch size={size as keyof typeof SwitchSizes} />
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{size}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
