import { Meta, StoryObj } from '@storybook/react';

import Text from '../../Text';

import { PageLoader } from '../index';
import { PageLoaderRootProps } from './types';

export default {
  title: 'Components/PageLoader',
  component: PageLoader.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <PageLoader.Loader />
        <Text weight="semibold" size="lg" color="grayscale300">
          Algum texto aqui
        </Text>
      </>
    ),
  },
} as Meta<PageLoaderRootProps>;

export const Default: StoryObj<PageLoaderRootProps> = {};
