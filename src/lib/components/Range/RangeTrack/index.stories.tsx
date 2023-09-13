import { Meta, StoryObj } from '@storybook/react';

import { Range } from '../index';
import { RangeTrackProps, RangeTrackSizes } from './types';

export default {
  title: 'Components/Range/RangeTrack',
  component: Range.Track,
  tags: ['autodocs'],
} as Meta<RangeTrackProps>;

export const Default = (args: RangeTrackProps) => {
  return (
    <Range.Root
      defaultValue={[50]}
      max={100}
      step={1}
      className={`${
        args.size === 'md' || !args.size ? 'w-[200px]' : 'w-[400px]'
      }`}
    >
      <Range.Track size={args.size}>
        <Range.Range />
      </Range.Track>
      <Range.Thumb aria-label="Example Range" size={args.size} />
    </Range.Root>
  );
};

export const Sizes: StoryObj<RangeTrackProps> = {
  decorators: [
    () => (
      <div>
        {Object.keys(RangeTrackSizes).map((size) => (
          <div
            key={size}
            className="flex flex-col items-center px-6 py-8 w-60 flex-wrap"
          >
            <div className="flex items-center gap-2 mb-4">
              <Range.Root
                defaultValue={[50]}
                max={100}
                step={1}
                className={`mt-4 ${size === 'md' ? 'w-[200px]' : 'w-[400px]'}`}
              >
                <Range.Track size={size as keyof typeof RangeTrackSizes}>
                  <Range.Range />
                </Range.Track>
                <Range.Thumb
                  aria-label="Example Range"
                  size={size as keyof typeof RangeTrackSizes}
                />
              </Range.Root>
            </div>
            <p className="text-[var(--grayscale-200)] text-center">{size}</p>
          </div>
        ))}
      </div>
    ),
  ],
};
