import { Meta, StoryObj } from '@storybook/react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { ScrollArea } from '..';

export default {
  title: 'Components/ScrollArea',
  component: ScrollArea.Root,
  tags: ['autodocs'],
  args: {
    className: 'h-72 w-48 rounded-md border',
    children: (
      <>
        <div className="p-4">
          <h2 className="pb-1 text-lg">Conteúdo 1</h2>
          <h2 className="py-1 text-lg">Conteúdo 2</h2>
          <h2 className="py-1 text-lg">Conteúdo 3</h2>
          <h2 className="py-1 text-lg">Conteúdo 4</h2>
          <h2 className="py-1 text-lg">Conteúdo 5</h2>
          <h2 className="py-1 text-lg">Conteúdo 6</h2>
          <h2 className="py-1 text-lg">Conteúdo 7</h2>
          <h2 className="py-1 text-lg">Conteúdo 8</h2>
          <h2 className="py-1 text-lg">Conteúdo 9</h2>
          <h2 className="pt-1 text-lg">Conteúdo 10</h2>
        </div>
        <ScrollArea.ScrollBar />
      </>
    ),
  },
} as Meta<typeof ScrollAreaPrimitive.Root>;

export const Default: StoryObj<typeof ScrollAreaPrimitive.Root> = {};
