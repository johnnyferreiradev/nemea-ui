import { Meta, StoryObj } from '@storybook/react';

import Icon from './index';
import { IconProps, IconNames } from './types';

export default {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    name: 'user-fill',
  },
} as Meta<IconProps>;

export const Default: StoryObj<IconProps> = {};

export const NameVariations: StoryObj<IconProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(IconNames).map((icon) => (
          <div key={icon} className="flex flex-col items-center px-2 py-4 w-48">
            <Icon
              name={icon as keyof typeof IconNames}
              size="2xl"
              color="grayscale400"
            />
            <p className="text-[var(--grayscale-200)] text-center">{icon}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
