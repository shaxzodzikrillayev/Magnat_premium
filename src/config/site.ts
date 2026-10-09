export interface SiteConfig {
  name: string;
  contacts: {
    telegramChannel: {
      url: string;
      handle: string;
    };
    telegramPersonal: {
      url: string;
      handle: string;
    };
    phone: {
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
  contacts: {
    telegramChannel: {
      url: 'https://t.me/magnnatpremium',
      handle: '@magnnatpremium',
    },
    telegramPersonal: {
      url: 'https://t.me/akbarovvx',
      handle: '@akbarovvx',
    },
    phone: {
      number: phone,
      countryCode: phoneCountryCode,
      display: `${phoneCountryCode}${phone}`,
    },
  },
};

/** Рабочая ссылка tel: — код страны берётся из конфига, если задан. */
export const PHONE_HREF = `tel:${SITE.contacts.phone.countryCode}${SITE.contacts.phone.number}`;
