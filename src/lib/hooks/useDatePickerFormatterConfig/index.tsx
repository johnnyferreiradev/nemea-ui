import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import * as dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';
import timezonePlugin from 'dayjs/plugin/timezone';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(utcPlugin);
dayjs.extend(timezonePlugin);
dayjs.extend(localizedFormat);

export const useDatePickerFormatterConfig = (
  language?: string,
  timezone?: string,
) => {
  const { i18n } = useTranslation();

  const setDateLocale = (currentLanguage: string, currentTimezone: string) => {
    if (!(currentLanguage && currentTimezone)) return;

    if (currentLanguage === 'pt') {
      currentLanguage = 'pt-br';
    }

    // Even if module is already loaded, instance will be reused
    // Fortunately, JS-TS interpreter is smart enough to do it
    import(
      /* @vite-ignore */ `dayjs/locale/${currentLanguage.toLowerCase()}.js`
    )
      .then(() => {
        dayjs.locale(currentLanguage.toLowerCase());
        dayjs.tz.setDefault(currentTimezone);
      })
      .catch(() => {
        // Fallback to en-us, it is default from dayjs
        dayjs.locale('en-us');
        dayjs.tz.setDefault('America/Recife');
      });
  };

  useEffect(() => {
    setDateLocale(language || i18n.language, timezone || 'America/Recife');
  }, [i18n.language, language, timezone]);

  return null;
};

export default useDatePickerFormatterConfig;
