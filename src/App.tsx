import { useCallback, useEffect, useState } from 'react';
import Preloader from './components/Preloader';
import VisitCard from './components/VisitCard';
import { useLanguage } from './hooks/useLanguage';

export default function App() {
  const [ready, setReady] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const handleLoaded = useCallback(() => setReady(true), []);

  // Страховка: при любой ошибке визитка всё равно станет доступна.
  useEffect(() => {
    if (ready) return;
    const safety = window.setTimeout(() => setReady(true), 6000);
    return () => window.clearTimeout(safety);
  }, [ready]);

  return (
    <>
      {!ready && <Preloader onDone={handleLoaded} label={t.loading} />}
      <VisitCard ready={ready} lang={lang} onLangChange={setLang} t={t} />
    </>
  );
}
