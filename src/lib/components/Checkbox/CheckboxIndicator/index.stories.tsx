import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '../index';
import { CheckboxIndicatorProps } from './types';

import Icon from '../../Icon';

export default {
  title: 'Components/Checkbox/CheckboxIndicator',
  component: Checkbox.Indicator,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Checkbox.Root>
          <Checkbox.Indicator>{Story()}</Checkbox.Indicator>
        </Checkbox.Root>
      );
    },
  ],
  args: {
    children: <Icon name="check" />,
  },
} as Meta<CheckboxIndicatorProps>;

export const Default: StoryObj<CheckboxIndicatorProps> = {};
