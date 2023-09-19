import { Meta, StoryObj } from '@storybook/react';

import { Upload } from '@phosphor-icons/react';

import UploadArea from './index';
import { UploadAreaProps } from './types';

import Text from '../Text';

export default {
  title: 'Components/UploadArea',
  component: UploadArea,
  tags: ['autodocs'],
  args: {
    children: (
      <div>
        <div className="w-[52px] h-[52px] bg-[var(--gray-color)] dark:bg-[var(--primary-color)] rounded-[12px] flex items-center justify-center mx-auto group-data-[overed=true]:bg-[var(--primary-color)] dark:group-data-[overed=true]:bg-[var(--gray-color)]">
          <Upload />
        </div>
        <Text
          element="h6"
          weight="bold"
          size="lg"
          align="center"
          className="mt-3 text-[var(--dark-color)] dark:text-[var(--white-color)]"
        >
          Envie seu arquivo
        </Text>
        <Text
          element="p"
          weight="medium"
          align="center"
          className="text-[var(--dark-color)] dark:text-[var(--white-color)]"
        >
          .xls, .xlsx, .csv
        </Text>
        <div className="flex mt-4 gap-1">
          <Text
            element="p"
            color="primary200"
            weight="medium"
            className="cursor-pointer"
          >
            Pesquise no computador
          </Text>
          <Text element="p" color="grayscale200" weight="medium">
            ou arraste para esta área.
          </Text>
        </div>
      </div>
    ),
  },
} as Meta<UploadAreaProps>;

export const Default: StoryObj<UploadAreaProps> = {};
