import { Meta, StoryObj } from '@storybook/react';

import Icon from '../../Icon';

import { Toaster } from '../index';
import { ToasterTitleProps } from './types';
import { Button } from '../../Button';

export default {
  title: 'Components/Toaster/ToasterTitle',
  component: Toaster.Title,
  tags: ['autodocs'],
  args: {
    children: 'Toaster title',
  },
  decorators: [
    (Story) => (
      <Toaster.Root open>
        <Toaster.Icon>
          <Icon name="alert" />
        </Toaster.Icon>
        <Toaster.Content>
          {Story()}
          <Toaster.Description>Toaster description</Toaster.Description>
        </Toaster.Content>
        <Toaster.Actions>
          <Toaster.Action altText="Test">
            <Button.Root>
              <Button.Label>Action1</Button.Label>
            </Button.Root>
          </Toaster.Action>
        </Toaster.Actions>
        <Toaster.Close />
      </Toaster.Root>
    ),
  ],
} as Meta<ToasterTitleProps>;

export const Default: StoryObj<ToasterTitleProps> = {};
