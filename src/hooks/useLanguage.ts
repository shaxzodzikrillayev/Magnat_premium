import { useCallback, useEffect, useState } from 'react';
import { LANGS, TRANSLATIONS, type Lang } from '../config/translations';

const STORAGE_KEY = 'magnat-premium-lang';

const isLang = (value: string | null): value is Lang =>
  value !== null && (LANGS as readonly string[]).includes(value);

function readSavedLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    /* localStorage может быть недоступен */
  }
  return 'ru';
}

/**
 * Текущий язык сайта с сохранением в localStorage.
 * Переключение происходит мгновенно, без перезагрузки страницы.
 */
export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(readSavedLang);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* игнорируем недоступное хранилище */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  return { lang, setLang, t: TRANSLATIONS[lang] };
}
