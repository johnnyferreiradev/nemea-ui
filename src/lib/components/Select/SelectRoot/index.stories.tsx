import { Meta, StoryObj } from '@storybook/react';

import { Select } from '../index';
import { SelectRootProps } from './types';

import Icon from '../../Icon';

export default {
  title: 'Components/Select/SelectRoot',
  component: Select.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <Select.Viewport>
        <Select.Item value="op1">
          <Select.ItemText>Opção 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="op2">
          <Select.ItemText>Opção 2</Select.ItemText>
        </Select.Item>
      </Select.Viewport>
    ),
    placeholder: 'Selecione uma opção...',
  },
} as Meta<SelectRootProps>;

export const Default: StoryObj<SelectRootProps> = {};

export const WithIcon: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <Select.Viewport>
        <Select.Item value="op1">
          <Select.ItemText>Opção 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="op2">
          <Select.ItemText>Opção 2</Select.ItemText>
        </Select.Item>
      </Select.Viewport>
    ),
    placeholder: 'Selecione uma opção...',
    icon: <Icon name="arrow-down-s-line" />,
  },
};

export const WithSelectedValue: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <Select.Viewport>
        <Select.Item value="op1">
          <Select.ItemText>Opção 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="op2">
          <Select.ItemText>Opção 2</Select.ItemText>
        </Select.Item>
      </Select.Viewport>
    ),
    defaultValue: 'op1',
    icon: <Icon name="arrow-down-s-line" />,
  },
};

export const PopperStyle: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <Select.Viewport>
        <Select.Item value="op1">
          <Select.ItemText>Opção 1</Select.ItemText>
        </Select.Item>
        <Select.Item value="op2">
          <Select.ItemText>Opção 2</Select.ItemText>
        </Select.Item>
      </Select.Viewport>
    ),
    defaultValue: 'op1',
    icon: <Icon name="arrow-down-s-line" />,
    isPopper: true,
  },
};

export const WithIndicator: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <>
        <Select.Viewport>
          <Select.Item value="op1">
            <Select.ItemText>Opção 1</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
          <Select.Item value="op2">
            <Select.ItemText>Opção 2</Select.ItemText>
            <Select.ItemIndicator />
          </Select.Item>
        </Select.Viewport>
      </>
    ),
    defaultValue: 'op1',
    icon: <Icon name="arrow-down-s-line" />,
  },
};

export const WithCustomIndicator: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <>
        <Select.Viewport>
          <Select.Item value="op1">
            <Select.ItemText>Opção 1</Select.ItemText>
            <Select.ItemIndicator>
              <Icon name="check-double" />
            </Select.ItemIndicator>
          </Select.Item>
          <Select.Item value="op2">
            <Select.ItemText>Opção 2</Select.ItemText>
            <Select.ItemIndicator>
              <Icon name="check-double" />
            </Select.ItemIndicator>
          </Select.Item>
        </Select.Viewport>
      </>
    ),
    defaultValue: 'op1',
    icon: <Icon name="arrow-down-s-line" />,
  },
};

export const WithGroupsAndLabels: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <Select.Viewport>
        <Select.Group>
          <Select.Label>Group 1</Select.Label>
          <Select.Item value="op1">
            <Select.ItemText>Opção 1</Select.ItemText>
          </Select.Item>
          <Select.Item value="op2">
            <Select.ItemText>Opção 2</Select.ItemText>
          </Select.Item>
        </Select.Group>

        <Select.Separator />

        <Select.Group>
          <Select.Label>Group 2</Select.Label>
          <Select.Item value="op3">
            <Select.ItemText>Opção 3</Select.ItemText>
          </Select.Item>
          <Select.Item value="op4">
            <Select.ItemText>Opção 4</Select.ItemText>
          </Select.Item>
        </Select.Group>
      </Select.Viewport>
    ),
    defaultValue: 'op1',
    icon: <Icon name="arrow-down-s-line" />,
    isPopper: true,
  },
};

export const WithScrollButtons: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <>
        <Select.ScrollUpButton />
        <Select.Viewport>
          <Select.Item value="op1">
            <Select.ItemText>Opção 1</Select.ItemText>
          </Select.Item>
          <Select.Item value="op2">
            <Select.ItemText>Opção 3</Select.ItemText>
          </Select.Item>
          <Select.Item value="op4">
            <Select.ItemText>Opção 4</Select.ItemText>
          </Select.Item>
          <Select.Item value="op5">
            <Select.ItemText>Opção 5</Select.ItemText>
          </Select.Item>
          <Select.Item value="op6">
            <Select.ItemText>Opção 6</Select.ItemText>
          </Select.Item>
          <Select.Item value="op7">
            <Select.ItemText>Opção 7</Select.ItemText>
          </Select.Item>
          <Select.Item value="op8">
            <Select.ItemText>Opção 8</Select.ItemText>
          </Select.Item>
          <Select.Item value="op9">
            <Select.ItemText>Opção 9</Select.ItemText>
          </Select.Item>
          <Select.Item value="op10">
            <Select.ItemText>Opção 10</Select.ItemText>
          </Select.Item>
          <Select.Item value="op11">
            <Select.ItemText>Opção 11</Select.ItemText>
          </Select.Item>
          <Select.Item value="op12">
            <Select.ItemText>Opção 12</Select.ItemText>
          </Select.Item>
          <Select.Item value="op13">
            <Select.ItemText>Opção 13</Select.ItemText>
          </Select.Item>
          <Select.Item value="op14">
            <Select.ItemText>Opção 14</Select.ItemText>
          </Select.Item>
          <Select.Item value="op15">
            <Select.ItemText>Opção 15</Select.ItemText>
          </Select.Item>
          <Select.Item value="op16">
            <Select.ItemText>Opção 16</Select.ItemText>
          </Select.Item>
          <Select.Item value="op17">
            <Select.ItemText>Opção 17</Select.ItemText>
          </Select.Item>
          <Select.Item value="op18">
            <Select.ItemText>Opção 18</Select.ItemText>
          </Select.Item>
        </Select.Viewport>
        <Select.ScrollDownButton />
      </>
    ),
    placeholder: 'Selecione uma opção...',
    icon: <Icon name="arrow-down-s-line" />,
  },
};
