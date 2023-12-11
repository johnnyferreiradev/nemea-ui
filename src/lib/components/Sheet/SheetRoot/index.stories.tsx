import { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';

import { Sheet } from '../index';
import { SheetRootProps } from './types';

export default {
  title: 'Components/Sheet/SheetRoot',
  component: Sheet.Root,
  tags: ['autodocs'],
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <Sheet.Title>Título do meu Sheet</Sheet.Title>
        <Sheet.Description>
          Uma breve descrição sobre o conteúdo do meu Sheet
        </Sheet.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <Sheet.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Sheet.Close>
          <Sheet.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Sheet.Close>
        </div>
        <Sheet.CloseButton />
      </>
    ),
  },
} as Meta<SheetRootProps>;

export const Default: StoryObj<SheetRootProps> = {};

export const WithoutCloseButton: StoryObj<SheetRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <Sheet.Title>Título do meu Sheet</Sheet.Title>
        <Sheet.Description>
          Uma breve descrição sobre o conteúdo do meu Sheet
        </Sheet.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <Sheet.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Sheet.Close>
          <Sheet.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Sheet.Close>
        </div>
      </>
    ),
  },
};

export const DisabledOverlayClick: StoryObj<SheetRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    onInteractOutside: (event) => event.preventDefault(),
    children: (
      <>
        <Sheet.Title>Título do meu Sheet</Sheet.Title>
        <Sheet.Description>
          Uma breve descrição sobre o conteúdo do meu Sheet
        </Sheet.Description>
        <div className="my-8">
          <p>Algum conteúdo aqui</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <Sheet.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Sheet.Close>
          <Sheet.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Sheet.Close>
        </div>
        <Sheet.CloseButton />
      </>
    ),
  },
};

export const WithScroll: StoryObj<SheetRootProps> = {
  args: {
    trigger: (
      <Button.Root theme="dark">
        <Button.Label>Show</Button.Label>
      </Button.Root>
    ),
    children: (
      <>
        <Sheet.Title>Título do meu Sheet</Sheet.Title>
        <Sheet.Description>
          Uma breve descrição sobre o conteúdo do meu Sheet
        </Sheet.Description>
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
          <Sheet.Close>
            <Button.Root theme="primaryFlat">
              <Button.Label>Cancel</Button.Label>
            </Button.Root>
          </Sheet.Close>
          <Sheet.Close>
            <Button.Root theme="dark">
              <Button.Label>Save</Button.Label>
            </Button.Root>
          </Sheet.Close>
        </div>
        <Sheet.CloseButton />
      </>
    ),
  },
};
