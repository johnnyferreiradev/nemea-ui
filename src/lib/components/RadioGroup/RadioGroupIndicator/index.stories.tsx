import { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '../index';
import { RadioGroupIndicatorProps } from './types';

export default {
  title: 'Components/RadioGroup/RadioGroupIndicator',
  component: RadioGroup.Indicator,
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
} as Meta<RadioGroupIndicatorProps>;

export const Default: StoryObj<RadioGroupIndicatorProps> = {};
