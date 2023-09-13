import { Meta } from '@storybook/react';

import { Range } from '../index';
import { RangeRootProps } from './types';

export default {
  title: 'Components/Range/RangeRoot',
  component: Range.Root,
  tags: ['autodocs'],
} as Meta<RangeRootProps>;

export const Default = () => {
  return (
    <Range.Root defaultValue={[50]} max={100} step={1} className="w-[200px]">
      <Range.Track>
        <Range.Range />
      </Range.Track>
      <Range.Thumb aria-label="Example Thumb" />
    </Range.Root>
  );
};

export const Vertical = () => {
  return (
    <Range.Root
      defaultValue={[50]}
      max={100}
      step={1}
      className="h-[200px]"
      orientation="vertical"
    >
      <Range.Track size="md">
        <Range.Range />
      </Range.Track>
      <Range.Thumb aria-label="Example Thumb" />
    </Range.Root>
  );
};

export const DoubleThumb = () => {
  return (
    <Range.Root
      defaultValue={[25, 75]}
      max={100}
      step={1}
      className="w-[200px]"
    >
      <Range.Track>
        <Range.Range />
      </Range.Track>
      <Range.Thumb aria-label="Example Thumb" />
      <Range.Thumb aria-label="Example Thumb" />
    </Range.Root>
  );
};
