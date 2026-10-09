export interface SiteConfig {
  name: string;
  shortName: string;
  monogram: string;
  slogan: string;
  caption: string;
  description: string;
  contacts: {
    telegramChannel: {
      label: string;
      url: string;
      handle: string;
    };
    telegramPersonal: {
      label: string;
      url: string;
      handle: string;
    };
    phone: {
      label: string;
      /** Только цифры, без кода страны — как указано заказчиком. */
      number: string;
      /**
       * Необязательный код страны / префикс, добавляется перед номером
       * в ссылку tel:, если понадобится. Пример: '+7'.
       */
      countryCode: string;
      display: string;
    };
  };
}

const phone = '777010308';
const phoneCountryCode = '';

export const SITE: SiteConfig = {
  name: 'MAGNAT PREMIUM',
  shortName: 'MAGNAT',
  monogram: 'MP',
  slogan: 'Статус. Качество. Совершенство.',
  caption: 'Связь с нами',
  description:
    'Премиальный подход, внимание к деталям и индивидуальный стиль',
  contacts: {
    telegramChannel: {
      label: 'Telegram-канал',
      url: 'https://t.me/magnnatpremium',
      handle: '@magnnatpremium',
    },
    telegramPersonal: {
      label: 'Написать лично',
      url: 'https://t.me/akbarovvx',
      handle: '@akbarovvx',
    },
    phone: {
      label: 'Позвонить',
      number: phone,
      countryCode: phoneCountryCode,
      display: `${phoneCountryCode}${phone}`,
    },
  },
};

/** Рабочая ссылка tel: — код страны берётся из конфига, если задан. */
export const PHONE_HREF = `tel:${SITE.contacts.phone.countryCode}${SITE.contacts.phone.number}`;
