import { Meta, StoryObj } from '@storybook/react';

import { Warning, X } from '@phosphor-icons/react';

import { Alert } from '../index';
import { AlertDescriptionProps } from './types';
import { Button } from '../../Button';

export default {
  title: 'Components/Alert/AlertDescription',
  component: Alert.Description,
  tags: ['autodocs'],
  args: {
    children: 'Aqui vai o titulo do meu alerta',
  },
  decorators: [
    (Story) => (
      <Alert.Root>
        <Alert.Icon>
          <Warning />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Meu titulo</Alert.Title>
          {Story()}
        </Alert.Content>
        <Alert.Actions>
          <Button.Root theme="linkFailure" size="md" className="px-2">
            <Button.Label>Button 1</Button.Label>
          </Button.Root>
          <Button.Root theme="linkPrimary" size="md" className="px-2">
            <Button.Label>Button 2</Button.Label>
          </Button.Root>
        </Alert.Actions>
        <Alert.Close>
          <X />
        </Alert.Close>
      </Alert.Root>
    ),
  ],
} as Meta<AlertDescriptionProps>;

export const Default: StoryObj<AlertDescriptionProps> = {};
