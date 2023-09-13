import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import Text from '../../Text';

import { Popover } from '../index';
import { PopoverRootProps } from './types';

export default {
  title: 'Components/Popover/PopoverRoot',
  component: Popover.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Popover.Trigger>
          <Button.Root theme="primary">
            <Button.Label>Clique aqui</Button.Label>
          </Button.Root>
        </Popover.Trigger>
        <Popover.Content>
          <div className="p-4 flex flex-col justify-end">
            <Text className="mb-4">Conteúdo do popover</Text>
            <Popover.Close>
              <Button.Root theme="primaryFlat">
                <Button.Label>Fechar</Button.Label>
              </Button.Root>
            </Popover.Close>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </>
    ),
  },
} as Meta<PopoverRootProps>;

export const Default: StoryObj<PopoverRootProps> = {};

export const WithAnchor: StoryObj<PopoverRootProps> = {
  args: {
    children: (
      <>
        <Popover.Anchor>
          <div className="flex justify-center p-4 bg-white rounded">
            <span>Aqui vai algum conteúdo onde</span>{' '}
            <Popover.Trigger>
              <Button.Root theme="linkPrimary" size="sm" className="p-0 h-max">
                <Button.Label className="text-base mt-0 mx-1 leading-[24px]">
                  aqui
                </Button.Label>
              </Button.Root>
            </Popover.Trigger>{' '}
            <span>tem uma âncora</span>
          </div>
        </Popover.Anchor>
        <Popover.Content>
          <div className="p-4 flex flex-col justify-end">
            <Text className="mb-4">Conteúdo do popover</Text>
            <Popover.Close>
              <Button.Root theme="primaryFlat">
                <Button.Label>Fechar</Button.Label>
              </Button.Root>
            </Popover.Close>
          </div>
          <Popover.Arrow />
        </Popover.Content>
      </>
    ),
  },
};
