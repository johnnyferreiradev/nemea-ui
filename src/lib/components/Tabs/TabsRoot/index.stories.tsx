import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../index';
import { TabsRootProps } from './types';

export default {
  title: 'Components/Tabs/TabsRoot',
  component: Tabs.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1" className="p-4">
          Conteúdo da tab 1
        </Tabs.Content>
        <Tabs.Content value="tab2" className="p-4">
          Conteúdo da tab 2
        </Tabs.Content>
        <Tabs.Content value="tab3" className="p-4">
          Conteúdo da tab 3
        </Tabs.Content>
      </>
    ),
    defaultValue: 'tab1',
  },
} as Meta<TabsRootProps>;

export const Default: StoryObj<TabsRootProps> = {};

export const Horizontal: StoryObj<TabsRootProps> = {
  args: {
    orientation: 'horizontal',
  },
};
