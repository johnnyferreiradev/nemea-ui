import { Meta, StoryObj } from '@storybook/react';

import Icon from '../../Icon';

import { Toaster } from '../index';
import { ToasterRootProps } from './types';
import { Button } from '../../Button';

export default {
  title: 'Components/Toaster/ToasterRoot',
  component: Toaster.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Toaster.Icon>
          <Icon name="alert" />
        </Toaster.Icon>
        <Toaster.Content>
          <Toaster.Title>Toaster title</Toaster.Title>
          <Toaster.Description>Toaster description</Toaster.Description>
        </Toaster.Content>
        <Toaster.Actions>
          <Toaster.Action altText="Test">
            <Button.Root theme="linkDanger" size="md" className="px-2">
              <Button.Label>Action1</Button.Label>
            </Button.Root>
          </Toaster.Action>
          <Toaster.Action altText="Test">
            <Button.Root theme="linkPrimary" size="md" className="px-2">
              <Button.Label>Action2</Button.Label>
            </Button.Root>
          </Toaster.Action>
        </Toaster.Actions>
        <Toaster.Close>
          <Button.Root size="sm" theme="linkGray">
            <Button.Label>
              <Icon name="close" size="2xl" weight="bold" />
            </Button.Label>
          </Button.Root>
        </Toaster.Close>
      </>
    ),
    defaultOpen: true,
  },
} as Meta<ToasterRootProps>;

export const Default: StoryObj<ToasterRootProps> = {};
