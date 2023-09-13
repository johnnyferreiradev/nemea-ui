import { Meta, StoryObj } from '@storybook/react';

import Text from '../../Text';

import { Accordion } from '../index';
import { AccordionRootProps } from './types';

export default {
  title: 'Components/Accordion',
  component: Accordion.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Accordion.Item value="item-1">
          <Accordion.Header>
            <Text className="py-1">Item 1</Text>
          </Accordion.Header>
          <Accordion.Content>Conteúdo do item 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>
            <Text className="py-1">Item 2</Text>
          </Accordion.Header>
          <Accordion.Content>Conteúdo do item 2</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Header>
            <Text className="py-1">Item 3</Text>
          </Accordion.Header>
          <Accordion.Content>Conteúdo do item 3</Accordion.Content>
        </Accordion.Item>
      </>
    ),
  },
} as Meta<AccordionRootProps>;

export const Default: StoryObj<AccordionRootProps> = {};

export const WithDefaultValue: StoryObj<AccordionRootProps> = {
  args: {
    defaultValue: 'item-1',
  },
};

export const Collapsible: StoryObj<AccordionRootProps> = {
  args: {
    collapsible: true,
  },
};
