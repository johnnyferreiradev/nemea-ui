import { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../index';
import { SwitchProps, SwitchSizes } from './types';

export default {
  title: 'Components/Switch/SwitchRoot',
  component: Switch.Root,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Object.values(SwitchSizes),
      },
    },
  },
} as Meta<SwitchProps>;

export const Default = (args: SwitchProps) => {
  return (
    <Switch.Root {...args}>
      <Switch.Thumb size={args.size} />
    </Switch.Root>
  );
};

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
              <Switch.Root size={size as keyof typeof SwitchSizes}>
                <Switch.Thumb size={size as keyof typeof SwitchSizes} />
              </Switch.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{size}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
