import { Meta, StoryObj } from '@storybook/react';
import { User } from '@phosphor-icons/react';

import Textarea from './index';
import { Button } from '../Button';

import { TextareaProps } from './types';

export default {
  title: 'Components/Textarea',
  component: Textarea,
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
} as Meta<TextareaProps>;

export const Default: StoryObj<TextareaProps> = {};

export const Themes: StoryObj<TextareaProps> = {
  decorators: [
    () => (
      <div className="flex gap-4">
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Light</p>
          <Textarea placeholder="Digite alguma coisa" />
          <Textarea placeholder="Com erro" aria-invalid />
          <Textarea placeholder="Digite alguma coisa" disabled />
          <Textarea value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Gray</p>
          <Textarea theme="gray" placeholder="Digite alguma coisa" />
          <Textarea theme="gray" placeholder="Com erro" aria-invalid />
          <Textarea theme="gray" placeholder="Digite alguma coisa" disabled />
          <Textarea theme="gray" value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">noBorder</p>
          <Textarea theme="noBorder" placeholder="Digite alguma coisa" />
          <Textarea theme="noBorder" placeholder="Com erro" aria-invalid />
          <Textarea
            theme="noBorder"
            placeholder="Digite alguma coisa"
            disabled
          />
          <Textarea theme="noBorder" value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Shadow</p>
          <Textarea theme="shadow" placeholder="Digite alguma coisa" />
          <Textarea theme="shadow" placeholder="Com erro" aria-invalid />
          <Textarea theme="shadow" placeholder="Digite alguma coisa" disabled />
          <Textarea theme="shadow" value="Alguma coisa" disabled />
        </div>
        <div className="max-w-md flex flex-col gap-2">
          <p className="text-center">Dark</p>
          <Textarea theme="dark" placeholder="Digite alguma coisa" />
          <Textarea theme="dark" placeholder="Com erro" aria-invalid />
          <Textarea theme="dark" placeholder="Digite alguma coisa" disabled />
          <Textarea theme="dark" value="Alguma coisa" disabled />
        </div>
      </div>
    ),
  ],
};

export const Sizes: StoryObj<TextareaProps> = {
  decorators: [
    () => (
      <div className="flex gap-4">
        <div className="max-w-md flex flex-col gap-2">
          <Textarea placeholder="xs" size="xs" />
          <Textarea placeholder="sm" size="sm" />
          <Textarea placeholder="md" size="md" />
          <Textarea placeholder="lg" size="lg" />
          <Textarea placeholder="xl" size="xl" />
        </div>
      </div>
    ),
  ],
};
