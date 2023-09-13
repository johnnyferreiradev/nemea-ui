import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';

import { Modal } from '../index';
import { ModalRootProps } from './types';

export default {
  title: 'Components/Modal/ModalRoot',
  component: Modal.Root,
  tags: ['autodocs'],
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <Modal.Title>Título do meu modal</Modal.Title>
        <Modal.Description>
          Uma breve descrição sobre o conteúdo do meu modal
        </Modal.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <Modal.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Modal.Close>
          <Modal.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Modal.Close>
        </div>
        <Modal.CloseButton />
      </>
    ),
  },
} as Meta<ModalRootProps>;

export const Default: StoryObj<ModalRootProps> = {};

export const WithoutCloseButton: StoryObj<ModalRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <Modal.Title>Título do meu modal</Modal.Title>
        <Modal.Description>
          Uma breve descrição sobre o conteúdo do meu modal
        </Modal.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <Modal.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Modal.Close>
          <Modal.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Modal.Close>
        </div>
      </>
    ),
  },
};

export const DisabledOverlayClick: StoryObj<ModalRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    onInteractOutside: (event) => event.preventDefault(),
    children: (
      <>
        <Modal.Title>Título do meu modal</Modal.Title>
        <Modal.Description>
          Uma breve descrição sobre o conteúdo do meu modal
        </Modal.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <Modal.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Modal.Close>
          <Modal.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Modal.Close>
        </div>
        <Modal.CloseButton />
      </>
    ),
  },
};

export const WithScroll: StoryObj<ModalRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <Modal.Title>Título do meu modal</Modal.Title>
        <Modal.Description>
          Uma breve descrição sobre o conteúdo do meu modal
        </Modal.Description>
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
          <Modal.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Modal.Close>
          <Modal.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Modal.Close>
        </div>
        <Modal.CloseButton />
      </>
    ),
  },
};
