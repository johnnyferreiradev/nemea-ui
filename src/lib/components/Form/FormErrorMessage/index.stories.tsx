import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../index';
import { FormErrorMessageProps } from './types';

export default {
  title: 'Components/Form/ErrorMessage',
  component: Form.ErrorMessage,
  tags: ['autodocs'],
  args: {
    show: true,
    children: 'Este campo é obrigatório',
  },
  decorators: [
    (Story) => (
      <Form.Root className="max-w-lg">
        <Form.Field>
          <Form.Control>
            <input type="text" placeholder="Enter text..." />
          </Form.Control>
          {Story()}
        </Form.Field>
      </Form.Root>
    ),
  ],
} as Meta<FormErrorMessageProps>;

export const Default: StoryObj<FormErrorMessageProps> = {};
