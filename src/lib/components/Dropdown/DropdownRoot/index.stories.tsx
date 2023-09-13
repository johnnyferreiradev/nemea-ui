import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';

import { Dropdown } from '../index';
import { DropdownProps } from './types';

export default {
  title: 'Components/Dropdown/DropdownRoot',
  component: Dropdown.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item disabled>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
        <Dropdown.Label>Checkboxes</Dropdown.Label>
        <Dropdown.CheckboxItem checked>Option 1</Dropdown.CheckboxItem>
        <Dropdown.CheckboxItem checked>Option 2</Dropdown.CheckboxItem>
        <Dropdown.Separator />
        <Dropdown.Label>Checkboxes</Dropdown.Label>
        <Dropdown.RadioGroup value="op1">
          <Dropdown.RadioItem value="op1">Option 1</Dropdown.RadioItem>
          <Dropdown.RadioItem value="op2">Option 2</Dropdown.RadioItem>
          <Dropdown.RadioItem value="op3">Option 3</Dropdown.RadioItem>
        </Dropdown.RadioGroup>
      </>
    ),
    trigger: (
      <Button.Root>
        <Button.Label>Button</Button.Label>
      </Button.Root>
    ),
  },
} as Meta<DropdownProps>;

export const Default: StoryObj<DropdownProps> = {};

export const WithoutArrow: StoryObj<DropdownProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
      </>
    ),
    trigger: (
      <Button.Root>
        <Button.Label>Button</Button.Label>
      </Button.Root>
    ),
  },
};
