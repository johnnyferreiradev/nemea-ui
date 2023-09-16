import { Meta } from '@storybook/react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { User } from '@phosphor-icons/react';

import { Form } from './index';
import { Button } from '../Button';
import Input from '../Input';

export default {
  title: 'Components/Form/FormRoot',
  component: Form.Root,
  tags: ['autodocs'],
} as Meta;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

function DefaultFormTemplate() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const onSubmit = () => {
    // code...
  };

  return (
    <Form.Root {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-8">
        <Form.Field
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Username</Form.Label>
              <Form.Control>
                <Input
                  placeholder="Placeholder text"
                  icon={<User className="text-primary-300" weight="bold" />}
                  {...field}
                />
              </Form.Control>
              <Form.Description>
                This is your public display name.
              </Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button.Root theme="primary" type="submit">
          <Button.Label>Enviar</Button.Label>
        </Button.Root>
      </form>
    </Form.Root>
  );
}

export const Default = DefaultFormTemplate.bind({});
