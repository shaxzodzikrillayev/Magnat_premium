export const LANGS = ['ru', 'uz', 'en'] as const;

export type Lang = (typeof LANGS)[number];

export interface Translation {
  slogan: string;
  caption: string;
  channel: string;
  personal: string;
  call: string;
  since: string;
  contactOptions: string;
  language: string;
  loading: string;
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  ru: {
    slogan: 'Статус. Качество. Совершенство.',
    caption: 'Связь с нами',
    channel: 'Наш канал',
    personal: 'Написать лично',
    call: 'Позвонить',
    since: 'SINCE 2014',
    contactOptions: 'Способы связи',
    language: 'Выбор языка',
    loading: 'Загрузка сайта',
  },
  uz: {
    slogan: 'Maqom. Sifat. Mukammallik.',
    caption: 'Biz bilan bog‘lanish',
    channel: 'Kanalimiz',
    personal: 'Shaxsiy xabar',
    call: 'Qo‘ng‘iroq qilish',
    since: 'SINCE 2014',
    contactOptions: 'Aloqa usullari',
    language: 'Tilni tanlash',
    loading: 'Sayt yuklanmoqda',
  },
  en: {
    slogan: 'Status. Quality. Excellence.',
    caption: 'Contact Us',
    channel: 'Our Channel',
    personal: 'Message Us',
    call: 'Call Us',
    since: 'SINCE 2014',
    contactOptions: 'Contact options',
    language: 'Select language',
    loading: 'Loading',
  },
};

export const LANG_LABELS: Record<Lang, string> = {
  ru: 'RU',
  uz: 'UZ',
  en: 'EN',
};
