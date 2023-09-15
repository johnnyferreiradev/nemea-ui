import { Meta, StoryObj } from '@storybook/react';
import { User } from '@phosphor-icons/react';

import Input from './index';
import { Button } from '../Button';

import { InputProps } from './types';

export default {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'Digite alguma coisa',
    icon: <User className="text-primary-600" />,
    actions: (
      <Button.Root theme="linkPrimary" size="sm" className="p-0">
        <Button.Label>action</Button.Label>
      </Button.Root>
    ),
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};

export const Themes: StoryObj<InputProps> = {
  decorators: [
    () => (
      <div className="flex gap-4">
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Light</p>
          <Input placeholder="Digite alguma coisa" />
          <Input placeholder="Com erro" aria-invalid />
          <Input placeholder="Digite alguma coisa" disabled />
          <Input value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Gray</p>
          <Input theme="gray" placeholder="Digite alguma coisa" />
          <Input theme="gray" placeholder="Com erro" aria-invalid />
          <Input theme="gray" placeholder="Digite alguma coisa" disabled />
          <Input theme="gray" value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">noBorder</p>
          <Input theme="noBorder" placeholder="Digite alguma coisa" />
          <Input theme="noBorder" placeholder="Com erro" aria-invalid />
          <Input theme="noBorder" placeholder="Digite alguma coisa" disabled />
          <Input theme="noBorder" value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Shadow</p>
          <Input theme="shadow" placeholder="Digite alguma coisa" />
          <Input theme="shadow" placeholder="Com erro" aria-invalid />
          <Input theme="shadow" placeholder="Digite alguma coisa" disabled />
          <Input theme="shadow" value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Dark</p>
          <Input theme="dark" placeholder="Digite alguma coisa" />
          <Input theme="dark" placeholder="Com erro" aria-invalid />
          <Input theme="dark" placeholder="Digite alguma coisa" disabled />
          <Input theme="dark" value="Alguma coisa" disabled />
        </div>
      </div>
    ),
  ],
};

export const Sizes: StoryObj<InputProps> = {
  decorators: [
    () => (
      <div className="flex gap-4">
        <div className="max-w-md flex flex-col gap-2">
          <Input placeholder="xs" size="xs" />
          <Input placeholder="sm" size="sm" />
          <Input placeholder="md" size="md" />
          <Input placeholder="lg" size="lg" />
          <Input placeholder="xl" size="xl" />
        </div>
      </div>
    ),
  ],
};
