import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';

import { AlertDialog } from '../index';
import { AlertDialogRootProps } from './types';

export default {
  title: 'Components/AlertDialog',
  component: AlertDialog.Root,
  tags: ['autodocs'],
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <AlertDialog.Title>Título do meu alerta</AlertDialog.Title>
        <AlertDialog.Description>
          Tem certeza que deseja continuar?
        </AlertDialog.Description>
        <div className="w-full flex items-center justify-between mt-8">
          <AlertDialog.Cancel>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancelar</Button.Label>
            </Button.Root>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button.Root theme="outlineDanger" onClick={() => undefined}>
              <Button.Label>Continuar</Button.Label>
            </Button.Root>
          </AlertDialog.Action>
        </div>
      </>
    ),
  },
} as Meta<AlertDialogRootProps>;

export const Default: StoryObj<AlertDialogRootProps> = {};

export const WithScroll: StoryObj<AlertDialogRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <AlertDialog.Title>Excluir itens?</AlertDialog.Title>
        <AlertDialog.Description>
          Os seguintes itens serão apagados:
        </AlertDialog.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <AlertDialog.Cancel>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button.Root theme="outlineDanger">
              <Button.Label>Excluir</Button.Label>
            </Button.Root>
          </AlertDialog.Action>
        </div>
      </>
    ),
  },
};
