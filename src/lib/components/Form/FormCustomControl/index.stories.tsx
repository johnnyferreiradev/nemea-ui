import { Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from '../index';
import { FormCustomControlProps } from './types';
import Icon from '../../Icon';
import { Select } from '../../Select';

type ValidationDefaultFormSchema = {
  name: string;
  born_at: Date;
  gender: string;
  is_admin: boolean;
  about: string;
};

function CustomControlTemplate(props: FormCustomControlProps) {
  const { control } = useForm<ValidationDefaultFormSchema>();

  return (
    <Form.CustomControl
      {...props}
      name="gender"
      control={control}
      render={({ field }) => (
        <Select.Root
          placeholder="Selecione..."
          onValueChange={field.onChange}
          isPopper
          icon={<Icon name="arrow-down-s-line" />}
          id="gender"
          {...field}
        >
          <Select.Viewport>
            <Select.Item value="male">
              <Select.ItemText>Masculino</Select.ItemText>
            </Select.Item>
            <Select.Item value="female">
              <Select.ItemText>Feminino</Select.ItemText>
            </Select.Item>
            <Select.Item value="other">
              <Select.ItemText>Outro</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Root>
      )}
    />
  );
}

export default {
  title: 'Components/Form/FormCustomControl',
  component: CustomControlTemplate,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Form.Root className="max-w-lg">
        <Form.Field>{Story()}</Form.Field>
      </Form.Root>
    ),
  ],
} as Meta<FormCustomControlProps>;

export const Default = CustomControlTemplate.bind({});
