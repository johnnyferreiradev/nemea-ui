import { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from '../index';

export default {
  title: 'Components/RadioGroup/RadioGroupItem',
  component: RadioGroup.Item,
  tags: ['autodocs'],
  decorators: [(Story) => <RadioGroup.Root>{Story()}</RadioGroup.Root>],
} as Meta;

export const Default: StoryObj = {};
