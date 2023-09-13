import { Meta, StoryObj } from '@storybook/react';

import Logo from '../../Logo';

import appLogo from '../../../assets/images/app-logo.svg';
import appLogoInverse from '../../../assets/images/app-logo-inverse.svg';

import { AppLoader } from '../index';
import { AppLoaderProps } from './types';

export default {
  title: 'Components/AppLoader/AppLoaderRoot',
  component: AppLoader.Root,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Logo
          className="opacity-100 animate-logo-fade-in absolute top-[calc(50%-100px)]"
          src={appLogo}
        />
        <Logo
          className="opacity-0 animate-logo-fade-out absolute top-[calc(50%-100px)]"
          src={appLogoInverse}
        />
        <AppLoader.Loader className="mt-8" />
      </>
    ),
  },
} as Meta<AppLoaderProps>;

export const Default: StoryObj<AppLoaderProps> = {};
