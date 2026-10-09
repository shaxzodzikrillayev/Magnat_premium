import { useEffect, useRef, useState } from 'react';
import { SITE } from '../config/site';

/** Время старта приложения — прогресс не сбрасывается при ре-маунте. */
const bootAt = Date.now();

let assetsPromise: Promise<void> | null = null;

const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Реальное ожидание ресурсов: window.load + шрифты.
 * Минимум — время на проигрывание анимации, максимум — жёсткий лимит,
 * чтобы загрузчик не мог «зависнуть» навсегда. Ошибки не блокируют показ сайта.
 */
function waitForAssets(): Promise<void> {
  if (assetsPromise) return assetsPromise;

  const minMs = prefersReducedMotion() ? 120 : 700;
  const maxMs = 5000;

  const sleep = (ms: number) =>
    new Promise<void>((resolve) => window.setTimeout(resolve, ms));

  const pageLoaded = new Promise<void>((resolve) => {
    if (document.readyState === 'complete') {
      resolve();
      return;
    }
    window.addEventListener('load', () => resolve(), { once: true });
    window.addEventListener('error', () => resolve(), { once: true, capture: true });
  });

  const fontsReady: Promise<void> =
    typeof document !== 'undefined' && 'fonts' in document
      ? document.fonts.ready.then(
          () => undefined,
          () => undefined,
        )
      : Promise.resolve();

  assetsPromise = Promise.all([sleep(minMs), pageLoaded, fontsReady, sleep(maxMs)])
    .then(() => undefined)
    .catch(() => undefined);

  return assetsPromise;
}

interface PreloaderProps {
  onDone: () => void;
}

export default function Preloader({ onDone }: PreloaderProps) {
  const fillRef = useRef<HTMLElement>(null);
  const doneRef = useRef(false);
  const calledRef = useRef(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('is-loading');

    let raf = 0;
    let hideTimer = 0;
    let current = 0;

    const tick = () => {
      const elapsed = Date.now() - bootAt;
      const t = Math.min(1, elapsed / 1400);
      const eased = 1 - Math.pow(1 - t, 3);
      const target = doneRef.current ? 100 : eased * 93;

      current += (target - current) * 0.16;
      if (Math.abs(target - current) < 0.35) current = target;

      if (fillRef.current) {
        fillRef.current.style.width = `${current.toFixed(2)}%`;
      }
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    const finish = () => {
      if (calledRef.current) return;
      calledRef.current = true;
      doneRef.current = true;
      hideTimer = window.setTimeout(() => setHiding(true), 380);
      window.setTimeout(() => onDone(), 1050);
    };

    waitForAssets().then(finish, finish);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(hideTimer);
      document.documentElement.classList.remove('is-loading');
    };
  }, [onDone]);

  return (
    <div
      className={`preloader${hiding ? ' is-hiding' : ''}`}
      role="status"
      aria-live="polite"
      aria-label={`Загрузка сайта ${SITE.name}`}
    >
      <div className="preloader__inner">
        <div className="preloader__mark" aria-hidden="true">
          <span>{SITE.monogram}</span>
        </div>
        <div className="preloader__brand">{SITE.name}</div>
        <div className="preloader__bar">
          <i ref={fillRef} />
        </div>
      </div>
    </div>
  );
}
