import { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '../index';
import { RadioGroupItemProps } from './types';

export default {
  title: 'Components/RadioGroup/RadioGroupItem',
  component: RadioGroup.Item,
  tags: ['autodocs'],
  decorators: [
    () => {
      return (
        <RadioGroup.Root>
          <RadioGroup.Item value="default">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
        </RadioGroup.Root>
      );
    },
  ],
} as Meta<RadioGroupItemProps>;

export const Default: StoryObj<RadioGroupItemProps> = {};
