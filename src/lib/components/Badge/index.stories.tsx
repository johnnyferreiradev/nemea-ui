import { Meta, StoryObj } from '@storybook/react';

import Badge from './index';
import { BadgeProps, BadgeThemes } from './types';
import Text from '../Text';

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
} as Meta<BadgeProps>;

export const Default: StoryObj<BadgeProps> = {};

export const Themes: StoryObj<BadgeProps> = {
  decorators: [
    () => (
      <div className="w-full flex flex-wrap gap-12">
        {Object.keys(BadgeThemes).map((theme) => (
          <div className="flex flex-col items-center" key={theme}>
            <Badge theme={theme as keyof typeof BadgeThemes} className="mb-2">
              Badge
            </Badge>
            <Text>{theme}</Text>
          </div>
        ))}
      </div>
    ),
  ],
};
