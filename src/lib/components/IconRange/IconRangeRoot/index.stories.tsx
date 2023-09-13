import { Meta } from '@storybook/react';

import { IconRange } from '../index';
import { IconRangeRootProps } from './types';

import Icon from '../../Icon';

export default {
  title: 'Components/IconRange/IconRangeRoot',
  component: IconRange.Root,
  tags: ['autodocs'],
} as Meta<IconRangeRootProps>;

export const Default = () => {
  return (
    <IconRange.Root
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[400px]"
    >
      <IconRange.Track>
        <IconRange.Range />
      </IconRange.Track>
      <IconRange.Thumb aria-label="Volume">
        <Icon name="drag" className="text-white" />
      </IconRange.Thumb>
    </IconRange.Root>
  );
};
