import { Meta, StoryObj } from '@storybook/react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { ScrollAreaRoot } from '.';

export default {
  title: 'Components/ScrollArea',
  component: ScrollAreaRoot,
  tags: ['autodocs'],
} as Meta<typeof ScrollAreaPrimitive.Root>;

export const Default: StoryObj<typeof ScrollAreaPrimitive.Root> = {};
