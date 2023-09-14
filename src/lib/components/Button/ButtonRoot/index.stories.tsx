import { Meta, StoryObj } from '@storybook/react';

import { User } from '@phosphor-icons/react';

import { Button } from '../index';
import { ButtonProps, ButtonThemes } from './types';

export default {
  title: 'Components/Button/ButtonRoot',
  component: Button.Root,
  tags: ['autodocs'],
  args: {
    children: <Button.Label>Button</Button.Label>,
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Themes: StoryObj<ButtonProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(ButtonThemes).map((theme) => (
          <div
            key={theme}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Button.Root theme={theme as keyof typeof ButtonThemes}>
                <Button.Label>Button</Button.Label>
              </Button.Root>
              <Button.Root theme={theme as keyof typeof ButtonThemes} disabled>
                <Button.Label>Button</Button.Label>
              </Button.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{theme}</p>
          </div>
        ))}
      </div>
    ),
  ],
};

export const LeftIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <User weight="bold" />
        </Button.Icon>
        <Button.Label>Button</Button.Label>
      </>
    ),
    theme: 'primary',
  },
};

export const RightIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Button.Label>Button</Button.Label>
        <Button.Icon>
          <User weight="bold" />
        </Button.Icon>
      </>
    ),
    theme: 'primary',
  },
};

export const BothIcons: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <User weight="bold" />
        </Button.Icon>
        <Button.Label>Button</Button.Label>
        <Button.Icon>
          <User weight="bold" />
        </Button.Icon>
      </>
    ),
    theme: 'primary',
  },
};
