import { Meta, StoryObj } from '@storybook/react';

import { Form } from '../index';
import { FormLabelProps } from './types';

export default {
  title: 'Components/Form/FormLabel',
  component: Form.Label,
  tags: ['autodocs'],
  args: {
    children: 'Input name',
  },
  decorators: [
    (Story) => (
      <Form.Root className="max-w-lg">
        <Form.Field>
          {Story()}
          <Form.Control>
            <input type="text" />
          </Form.Control>
        </Form.Field>
      </Form.Root>
    ),
  ],
} as Meta<FormLabelProps>;

export const Default: StoryObj<FormLabelProps> = {};
