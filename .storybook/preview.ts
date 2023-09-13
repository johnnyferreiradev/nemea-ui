import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

import 'react-datepicker/dist/react-datepicker.css'; // Required by DatePicker
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    // docs: {
    //   theme: themes.dark,
    // },
  },
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
    className: {
      defaultValue: 'dark',
    },
  },
};

export default preview;
