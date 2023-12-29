import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '..';

export default {
  title: 'Components/Pagination',
  component: Pagination.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Previous />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link isActive>1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>2</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>3</Pagination.Link>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Link>9</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link>10</Pagination.Link>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Next />
        </Pagination.Item>
      </Pagination.Content>
    ),
  },
} as Meta<React.ComponentProps<'nav'>>;

export const Default: StoryObj<React.ComponentProps<'nav'>> = {};
