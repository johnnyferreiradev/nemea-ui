import { Meta, StoryObj } from '@storybook/react';

import { Select } from './index';

export default {
  title: 'Components/Select/SelectRoot',
  component: Select.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Select.Trigger>
          <Select.Value placeholder="Selecione" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Grupo 1</Select.Label>
            <Select.Item value="item1">Item 1</Select.Item>
            <Select.Item value="item2">Item 2</Select.Item>
            <Select.Item value="item3">Item 3</Select.Item>
          </Select.Group>

          <Select.Separator />

          <Select.Group>
            <Select.Label>Grupo 2</Select.Label>
            <Select.Item value="item4">Item 4</Select.Item>
            <Select.Item value="item5">Item 5</Select.Item>
            <Select.Item value="item6">Item 6</Select.Item>
          </Select.Group>
        </Select.Content>
      </>
    ),
  },
} as Meta;

export const Default: StoryObj = {};
