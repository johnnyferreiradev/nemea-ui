import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

import '../../locales/i18n';

import { HelloWorldProps } from './types';

export default function HelloWorld({ className = '' }: HelloWorldProps) {
  const { t } = useTranslation();
  return (
    <div className={twMerge('au-helloworld', className)}>
      {t('Hello world')}
    </div>
  );
}
