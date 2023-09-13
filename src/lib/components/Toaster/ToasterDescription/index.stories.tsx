import { Meta, StoryObj } from '@storybook/react';

import Icon from '../../Icon';

import { Toaster } from '../index';
import { ToasterDescriptionProps } from './types';
import { Button } from '../../Button';

export default {
  title: 'Components/Toaster/ToasterDescription',
  component: Toaster.Description,
  tags: ['autodocs'],
  args: {
    children: 'Toaster description',
  },
  decorators: [
    (Story) => (
      <Toaster.Root open>
        <Toaster.Icon>
          <Icon name="alert" />
        </Toaster.Icon>
        <Toaster.Content>
          <Toaster.Title>Toaster title</Toaster.Title>
          {Story()}
        </Toaster.Content>
        <Toaster.Actions>
          <Toaster.Action altText="Test">
            <Button.Root>
              <Button.Label>Action1</Button.Label>
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
      </Toaster.Root>
    ),
  ],
} as Meta<ToasterDescriptionProps>;

export const Default: StoryObj<ToasterDescriptionProps> = {};
