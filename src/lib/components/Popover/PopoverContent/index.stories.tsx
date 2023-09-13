import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import Text from '../../Text';

import { Popover } from '../index';
import { PopoverContentProps } from './types';

export default {
  title: 'Components/Popover/PopoverContent',
  component: Popover.Content,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <div className="p-4 flex flex-col justify-end">
          <Text className="mb-4">Conteúdo do popover</Text>
          <Popover.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Fechar</Button.Label>
            </Button.Root>
          </Popover.Close>
        </div>
        <Popover.Arrow />
      </>
    ),
  },
  decorators: [
    (Story) => (
      <Popover.Root>
        <Popover.Trigger>
          <Button.Root theme="primary">
            <Button.Label>Clique aqui</Button.Label>
          </Button.Root>
        </Popover.Trigger>
        {Story()}
      </Popover.Root>
    ),
  ],
} as Meta<PopoverContentProps>;

export const Default: StoryObj<PopoverContentProps> = {};
