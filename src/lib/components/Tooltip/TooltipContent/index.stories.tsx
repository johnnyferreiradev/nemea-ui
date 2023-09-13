import { Meta, StoryObj } from '@storybook/react';

import Text from '../../Text';

import { Tooltip } from '../index';
import { TooltipContentProps } from './types';

export default {
  title: 'Components/Tooltip/TooltipContent',
  component: Tooltip.Content,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div className="p-4 flex flex-col justify-end">
          <Text>Conteúdo do tooltip</Text>
        </div>
        <Tooltip.Arrow />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Tooltip.Root>
        <Tooltip.Trigger>
          <div className="w-max">Passe o mouse</div>
        </Tooltip.Trigger>
        {Story()}
      </Tooltip.Root>
    ),
  ],
} as Meta<TooltipContentProps>;

export const Default: StoryObj<TooltipContentProps> = {};
