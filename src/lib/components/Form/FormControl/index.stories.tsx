import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Form } from '../index';
import { FormControlProps } from './types';
import { Button } from '../../Button';
import Icon from '../../Icon';

export default {
  title: 'Components/Form/FormControl',
  component: Form.Control,
  tags: ['autodocs'],
  args: {
    children: <input placeholder="My input placeholder" required />,
  },
  decorators: [
    (Story) => (
      <Form.Root className="max-w-lg">
        <Form.Field>{Story()}</Form.Field>
      </Form.Root>
    ),
  ],
} as Meta<FormControlProps>;

export const Default: StoryObj<FormControlProps> = {};

export const WithIcon: StoryObj<FormControlProps> = {
  args: {
    children: <input placeholder="My input placeholder" />,
    icon: <Icon name="user-line" color="primary200" />,
  },
};

function ControlTemplate(props: FormControlProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Form.Control
      icon={<Icon name="lock-fill-2" color="primary200" />}
      actions={
        <Button.Root
          theme="linkPrimary"
          type="button"
          size="sm"
          className="p-0"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Button.Icon>
            <Icon name={showPassword ? 'eye-off-line' : 'eye-line'} />
          </Button.Icon>
          <Button.Label>{showPassword ? 'hide' : 'show'}</Button.Label>
        </Button.Root>
      }
      {...props}
    >
      <input placeholder="Password" type={showPassword ? 'text' : 'password'} />
    </Form.Control>
  );
}

export const WithActions = ControlTemplate.bind({});
