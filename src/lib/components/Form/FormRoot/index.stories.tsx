import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import useDatePickerFormatterConfig from '../../../hooks/useDatePickerFormatterConfig';

import Icon from '../../Icon';
import DatePicker from '../../DatePicker';
import { Select } from '../../Select';
import { Switch } from '../../Switch';
import { Checkbox } from '../../Checkbox';
import Text from '../../Text';
import { Button } from '../../Button';
import { RadioGroup } from '../../RadioGroup';

import { Form } from '../index';
import { FormProps } from './types';

export default {
  title: 'Components/Form/FormRoot',
  component: Form.Root,
  tags: ['autodocs'],
} as Meta<FormProps>;

type ValidationDefaultFormSchema = {
  name: string;
  born_at: Date;
  gender: string;
  is_admin: boolean;
  about: string;
};

function DefaultFormTemplate(props: FormProps) {
  useDatePickerFormatterConfig(); // Required by DatePicker

  const formSchema = z.object({
    name: z.string(),
    born_at: z.date(),
    gender: z.string(),
    is_admin: z.boolean(),
    about: z.string(),
  });

  const { register, handleSubmit, control } =
    useForm<ValidationDefaultFormSchema>({
      resolver: zodResolver(formSchema),
    });

  return (
    <Form.Root
      {...props}
      onSubmit={(event) => {
        event.preventDefault();
        return handleSubmit(() => undefined);
      }}
      className="max-w-lg"
    >
      {/* Name field */}
      <Form.Field className="mb-5">
        <Form.Label>Nome</Form.Label>
        <Form.Control icon={<Icon name="user-line" color="primary200" />}>
          <input {...register('name')} placeholder="Digite seu nome" />
        </Form.Control>
      </Form.Field>

      {/* Born at field */}
      <Form.Field className="mb-5">
        <Form.Label htmlFor="born_at">Data de nascimento</Form.Label>
        <Form.CustomControl
          name="born_at"
          control={control}
          render={({ field }) => (
            <DatePicker
              id="born_at"
              {...field}
              icon={<Icon name="calendar-2-line" color="primary200" />}
            />
          )}
        />
      </Form.Field>

      {/* Gender field */}
      <Form.Field className="mb-5">
        <Form.Label htmlFor="gender">Gênero</Form.Label>
        <Form.CustomControl
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
      </Form.Field>

      {/* Born at field */}
      <Form.Field className="mb-5">
        <Form.Label htmlFor="is_admin">É administrador?</Form.Label>
        <Form.CustomControl
          name="is_admin"
          control={control}
          render={({ field }) => (
            <Switch.Root
              checked={field.value}
              onCheckedChange={field.onChange}
              id="is_admin"
            >
              <Switch.Thumb />
            </Switch.Root>
          )}
        />
      </Form.Field>

      {/* About field */}
      <Form.Field className="mb-5">
        <Form.Label htmlFor="about">Fale sobre você</Form.Label>
        <Form.Control className="h-auto">
          <textarea
            {...register('about')}
            placeholder="Escreva um texto sobre você"
            rows={4}
            id="about"
          />
        </Form.Control>
      </Form.Field>

      {/* Role field */}

      <Form.Field className="mb-5">
        <Form.Label htmlFor="role">Cargo</Form.Label>
        <Form.CustomControl
          name="role"
          control={control}
          render={({ field }) => (
            <RadioGroup.Root
              orientation="vertical"
              value={field.value}
              onValueChange={field.onChange}
            >
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="default" id="r1">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <label className="text-[var(--grayscale-200)]" htmlFor="r1">
                  Funcionário
                </label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="comfortable" id="r2">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <label className=" text-[var(--grayscale-200)]" htmlFor="r2">
                  Gestor
                </label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup.Item value="compact" id="r3">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <label className=" text-[var(--grayscale-200)]" htmlFor="r3">
                  RH
                </label>
              </div>
            </RadioGroup.Root>
          )}
        />
      </Form.Field>

      {/* Use terms field */}
      <Form.Field className="mb-5">
        <Form.Label htmlFor="use_terms">Termos de uso</Form.Label>
        <Form.CustomControl
          name="use_terms"
          control={control}
          render={({ field }) => (
            <div className="flex items-center gap-2">
              <Checkbox.Root
                checked={field.value}
                onCheckedChange={field.onChange}
                id="use_terms"
              >
                <Checkbox.Indicator>
                  <Icon name="check" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <Text>Li e concordo com os termos de uso</Text>
            </div>
          )}
        />
      </Form.Field>

      {/* Submit */}
      <Form.Submit className="mt-12">
        <Button.Root theme="primary" className="w-full">
          <Button.Label>Salvar</Button.Label>
        </Button.Root>
      </Form.Submit>
    </Form.Root>
  );
}

export const Default = DefaultFormTemplate.bind({});

export const InputFieldTypes: StoryObj<FormProps> = {
  args: {
    children: (
      <>
        <Form.Field className="mb-5 max-w-lg">
          <Form.Label>Text</Form.Label>
          <Form.Control icon={<Icon name="user-line" color="primary200" />}>
            <input placeholder="Text input" />
          </Form.Control>
        </Form.Field>

        <Form.Field className="mb-5 max-w-lg">
          <Form.Label>E-mail</Form.Label>
          <Form.Control icon={<Icon name="at" color="primary200" />}>
            <input placeholder="E-mail input" type="email" />
          </Form.Control>
        </Form.Field>

        <Form.Field className="mb-5 max-w-lg">
          <Form.Label>Number</Form.Label>
          <Form.Control icon={<Icon name="number" color="primary200" />}>
            <input placeholder="Number input" type="number" />
          </Form.Control>
        </Form.Field>

        <Form.Field className="mb-5 max-w-lg">
          <Form.Label>Password</Form.Label>
          <Form.Control icon={<Icon name="lock-fill" color="primary200" />}>
            <input placeholder="Password input" type="password" />
          </Form.Control>
        </Form.Field>
      </>
    ),
  },
};
