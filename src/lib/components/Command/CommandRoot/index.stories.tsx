import { Meta, StoryObj } from '@storybook/react';
import { Command as CommandPrimitive } from 'cmdk';
import { Calendar, Envelope, Person } from '@phosphor-icons/react';

import { Command } from '..';

export default {
  title: 'Components/Command',
  component: Command.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Command.Input placeholder="Type a command or search..." />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Suggestions">
            <Command.Item>
              <Calendar className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </Command.Item>
          </Command.Group>
          <Command.Separator />
          <Command.Group heading="Settings">
            <Command.Item>
              <Person className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <Command.Shortcut>⌘P</Command.Shortcut>
            </Command.Item>
            <Command.Item>
              <Envelope className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <Command.Shortcut>⌘B</Command.Shortcut>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </>
    ),
  },
} as Meta<typeof CommandPrimitive>;

export const Default: StoryObj<typeof CommandPrimitive> = {};
