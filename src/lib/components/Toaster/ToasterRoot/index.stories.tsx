import { Meta, StoryObj } from '@storybook/react';

import { Warning } from '@phosphor-icons/react';

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
          <Warning />
        </Toaster.Icon>
        <Toaster.Content>
          <Toaster.Title>Toaster title</Toaster.Title>
          <Toaster.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            commodo sodales cursus. Cras porta, lorem pellentesque pharetra
            dictum, ipsum dolor mollis.
          </Toaster.Description>
        </Toaster.Content>
        <Toaster.Actions>
          <Toaster.Action altText="Test">
            <Button.Root theme="linkFailure" size="md" className="px-0">
              <Button.Label className="m-0">Action1</Button.Label>
            </Button.Root>
          </Toaster.Action>
          <Toaster.Action altText="Test">
            <Button.Root theme="linkPrimary" size="md" className="px-0">
              <Button.Label className="m-0">Action2</Button.Label>
            </Button.Root>
          </Toaster.Action>
        </Toaster.Actions>
        <Toaster.Close />
      </>
    ),
    defaultOpen: true,
  },
} as Meta<ToasterRootProps>;

export const Default: StoryObj<ToasterRootProps> = {};

export const WithoutActions: StoryObj<ToasterRootProps> = {
  args: {
    children: (
      <>
        <Toaster.Icon>
          <Warning />
        </Toaster.Icon>
        <Toaster.Content>
          <Toaster.Title>Toaster title</Toaster.Title>
          <Toaster.Description>Toaster description</Toaster.Description>
        </Toaster.Content>
        <Toaster.Close />
      </>
    ),
  },
};

export const DescriptionOnly: StoryObj<ToasterRootProps> = {
  args: {
    children: (
      <>
        <Toaster.Icon>
          <Warning />
        </Toaster.Icon>
        <Toaster.Content>
          <Toaster.Description>Toaster description</Toaster.Description>
        </Toaster.Content>
        <Toaster.Close />
      </>
    ),
  },
};

export const TitleOnly: StoryObj<ToasterRootProps> = {
  args: {
    children: (
      <>
        <Toaster.Icon>
          <Warning />
        </Toaster.Icon>
        <Toaster.Content>
          <Toaster.Title>Toaster title</Toaster.Title>
        </Toaster.Content>
        <Toaster.Close />
      </>
    ),
  },
};
