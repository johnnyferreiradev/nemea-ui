import { Meta, StoryObj } from '@storybook/react';

import Icon from '../../Icon';

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
          <Icon name="pin-side" />
        </Alert.Icon>
        <Alert.Content>
          <Alert.Title>Alert title</Alert.Title>
          <Alert.Description>Alert description</Alert.Description>
        </Alert.Content>
        <Alert.Actions>
          <Button.Root theme="linkDanger" size="md" className="px-2">
            <Button.Label>Button 1</Button.Label>
          </Button.Root>
          <Button.Root theme="linkPrimary" size="md" className="px-2">
            <Button.Label>Button 2</Button.Label>
          </Button.Root>
        </Alert.Actions>
        <Alert.Close>
          <Icon name="close" size="2xl" weight="bold" />
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
          <Icon name="close" size="2xl" weight="bold" />
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
          <Icon name="close" size="2xl" weight="bold" />
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
          <Icon name="close" size="2xl" weight="bold" />
        </Alert.Close>
      </>
    ),
  },
};
