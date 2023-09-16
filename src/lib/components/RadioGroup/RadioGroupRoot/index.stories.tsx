import { Meta, StoryObj } from '@storybook/react';

import Label from '../../Label';

import { RadioGroup } from '../index';
import { RadioGroupRootProps } from './types';

export default {
  title: 'Components/RadioGroup/RadioGroupRoot',
  component: RadioGroup.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="comfortable" id="r1">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label color="grayscale100" htmlFor="r1">
            Comfortable
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="compact" id="r2">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <Label color="grayscale100" htmlFor="r2">
            Compact
          </Label>
        </div>
      </>
    ),
  },
} as Meta<RadioGroupRootProps>;

export const Default: StoryObj<RadioGroupRootProps> = {};
