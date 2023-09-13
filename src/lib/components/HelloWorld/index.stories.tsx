import { Meta, StoryObj } from '@storybook/react';

import HelloWorld from './index';
import { HelloWorldProps } from './types';

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
} as Meta<HelloWorldProps>;

export const Default: StoryObj<HelloWorldProps> = {};
