import { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../index';
import { SwitchThumbProps } from './types';

export default {
  title: 'Components/Switch/SwitchThumb',
  component: Switch.Thumb,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return <Switch.Root>{Story()}</Switch.Root>;
    },
  ],
  args: {
    children: '',
  },
} as Meta<SwitchThumbProps>;

export const Default: StoryObj<SwitchThumbProps> = {};
