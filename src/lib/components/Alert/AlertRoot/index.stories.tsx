import { Meta, StoryObj } from '@storybook/react';

import { Warning, X } from '@phosphor-icons/react';

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
          <Alert.Description>Alert description</Alert.Description>
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
        <Alert.Close>
          <X />
        </Alert.Close>
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
        <Alert.Close>
          <X />
        </Alert.Close>
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
        <Alert.Close>
          <X />
        </Alert.Close>
      </>
    ),
  },
};
