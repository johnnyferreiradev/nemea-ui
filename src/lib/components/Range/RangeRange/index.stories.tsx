import { Meta, StoryObj } from '@storybook/react';

import { Range } from '../index';
import { RangeRangeProps, RangeRangeThemes } from './types';

export default {
  title: 'Components/Range/RangeRange',
  component: Range.Range,
  tags: ['autodocs'],
} as Meta<RangeRangeProps>;

export const Default = (args: RangeRangeProps) => {
  return (
    <Range.Root defaultValue={[50]} max={100} step={1} className="w-[200px]">
      <Range.Track>
        <Range.Range theme={args.theme} />
      </Range.Track>
      <Range.Thumb aria-label="Example Range" theme={args.theme} />
    </Range.Root>
  );
};

export const Themes: StoryObj<RangeRangeProps> = {
  decorators: [
    () => (
      <div>
        {Object.keys(RangeRangeThemes).map((theme) => (
          <div
            key={theme}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Range.Root
                defaultValue={[50]}
                max={100}
                step={1}
                className="mt-4 w-[200px]"
              >
                <Range.Track>
                  <Range.Range theme={theme as keyof typeof RangeRangeThemes} />
                </Range.Track>
                <Range.Thumb
                  aria-label="Example Range"
                  theme={theme as keyof typeof RangeRangeThemes}
                />
              </Range.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{theme}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
