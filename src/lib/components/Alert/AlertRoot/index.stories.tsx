import { Meta, StoryObj } from '@storybook/react';

import { Warning } from '@phosphor-icons/react';

import { Alert } from '../index';
import { AlertRootProps } from './types';
import { Button } from '../../Button';

export default {
  title: 'Components/Alert/AlertRoot',
  component: Alert.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Alert.Icon>
          <Warning />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Alert title</Alert.Title>
          <Alert.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae
            odio enim. Morbi sed magna convallis urna fermentum viverra et non
            nunc. Vivamus molestie, magna sed auctor condimentum
          </Alert.Description>
        </Alert.Content>
        <Alert.Actions>
          <Button.Root theme="linkFailure" size="md" className="p-0">
            <Button.Label className="m-0">Button 1</Button.Label>
          </Button.Root>
          <Button.Root theme="linkPrimary" size="md" className="p-0">
            <Button.Label className="m-0">Button 2</Button.Label>
          </Button.Root>
        </Alert.Actions>
        <Alert.Close />
      </>
    ),
  },
} as Meta<AlertRootProps>;

export const Default: StoryObj<AlertRootProps> = {};

export const WithoutIcon: StoryObj<AlertRootProps> = {
  args: {
    children: (
      <>
        <Alert.Content>
          <Alert.Title>Alert title</Alert.Title>
          <Alert.Description>Alert description</Alert.Description>
        </Alert.Content>
        <Alert.Close />
      </>
    ),
  },
};

export const WithoutTitle: StoryObj<AlertRootProps> = {
  args: {
    children: (
      <>
        <Alert.Content>
          <Alert.Description>Alert description</Alert.Description>
        </Alert.Content>
        <Alert.Close />
      </>
    ),
  },
};

export const WithoutDescription: StoryObj<AlertRootProps> = {
  args: {
    children: (
      <>
        <Alert.Content>
          <Alert.Title>Alert title</Alert.Title>
        </Alert.Content>
        <Alert.Close />
      </>
    ),
  },
};
