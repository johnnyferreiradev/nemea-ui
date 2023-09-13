import { Meta, StoryObj } from '@storybook/react';

import Icon from '../../Icon';

import { Checkbox } from '../index';
import { CheckboxProps, CheckboxThemes } from './types';

export default {
  title: 'Components/Checkbox/CheckboxRoot',
  component: Checkbox.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <Checkbox.Indicator>
        <Icon name="check" className="text-base" />
      </Checkbox.Indicator>
    ),
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const Themes: StoryObj<CheckboxProps> = {
  decorators: [
    () => (
      <div className="flex flex-wrap">
        {Object.keys(CheckboxThemes).map((theme) => (
          <div
            key={theme}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Checkbox.Root theme={theme as keyof typeof CheckboxThemes}>
                <Checkbox.Indicator>
                  <Icon name="check" className="text-base" />
                </Checkbox.Indicator>
              </Checkbox.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{theme}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
