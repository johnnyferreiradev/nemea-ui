import { Meta, StoryObj } from '@storybook/react';

import Label from '../../Label';

import { RadioGroup } from '../index';

export default {
  title: 'Components/RadioGroup/RadioGroupRoot',
  component: RadioGroup.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="comfortable" id="r1" />
          <Label color="grayscale100" htmlFor="r1">
            Comfortable
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="compact" id="r2" />
          <Label color="grayscale100" htmlFor="r2">
            Compact
          </Label>
        </div>
      </>
    ),
  },
} as Meta;

export const Default: StoryObj = {};
