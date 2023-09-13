import { Meta, StoryObj } from '@storybook/react';

import Text from '../../Text';

import { Collapsible } from '../index';
import { CollapsibleRootProps } from './types';

export default {
  title: 'Components/Collapsible',
  component: Collapsible.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Collapsible.Header>
          <Text className="py-1">Collapsible header</Text>
        </Collapsible.Header>
        <Collapsible.Content>Collapsible content</Collapsible.Content>
      </>
    ),
  },
} as Meta<CollapsibleRootProps>;

export const Default: StoryObj<CollapsibleRootProps> = {};

export const DefaultOpen: StoryObj<CollapsibleRootProps> = {
  args: {
    defaultOpen: true,
  },
};
