import { Meta, StoryObj } from '@storybook/react';

import Text from '../../Text';

import { Tooltip } from '../index';
import { TooltipRootProps } from './types';

export default {
  title: 'Components/Tooltip/TooltipRoot',
  component: Tooltip.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Tooltip.Trigger>
          <div className="w-max">Passe o mouse</div>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <div className="p-4 flex flex-col justify-end">
            <Text>Conteúdo do tooltip</Text>
          </div>
          <Tooltip.Arrow />
        </Tooltip.Content>
      </>
    ),
  },
} as Meta<TooltipRootProps>;

export const Default: StoryObj<TooltipRootProps> = {};
