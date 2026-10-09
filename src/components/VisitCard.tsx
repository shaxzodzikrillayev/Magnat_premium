import type { CSSProperties } from 'react';
import { Send, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { LANGS, LANG_LABELS, type Lang, type Translation } from '../config/translations';
import { PHONE_HREF, SITE } from '../config/site';

const delay = (ms: number): CSSProperties => ({ '--d': ms }) as CSSProperties;

interface VisitCardProps {
  ready: boolean;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  t: Translation;
}

export default function VisitCard({ ready, lang, onLangChange, t }: VisitCardProps) {
  return (
    <div className={`visit${ready ? ' is-ready' : ''}`}>
      <div className="visit__glow" aria-hidden="true" />

      <div className="visit__lang" role="group" aria-label={t.language} style={delay(60)}>
        {LANGS.map((code) => (
          <button
            key={code}
            type="button"
            className={`lang__btn${code === lang ? ' is-active' : ''}`}
            onClick={() => onLangChange(code)}
            aria-pressed={code === lang}
            lang={code}
          >
            {LANG_LABELS[code]}
          </button>
        ))}
      </div>

      <main className="visit__stage">
        <section className="visit__card">
          <h1 className="visit__logo" style={delay(140)}>
            <BrandLogo />
            <span className="visually-hidden">{SITE.name}</span>
          </h1>

          <span className="visit__rule" style={delay(240)} aria-hidden="true" />

          <p className="visit__slogan" style={delay(320)}>
            {t.slogan}
          </p>

          <p className="visit__caption" style={delay(400)}>
            <span aria-hidden="true" />
            {t.caption}
            <span aria-hidden="true" />
          </p>

          <nav className="visit__links" aria-label={t.contactOptions}>
            <a
              className="link-btn"
              href={SITE.contacts.telegramChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              style={delay(480)}
            >
              <span className="link-btn__icon">
                <Send aria-hidden="true" />
              </span>
              <span className="link-btn__body">
                <span className="link-btn__title">{t.channel}</span>
                <span className="link-btn__value">{SITE.contacts.telegramChannel.handle}</span>
              </span>
              <ArrowUpRight className="link-btn__arrow" aria-hidden="true" />
            </a>

            <a
              className="link-btn"
              href={SITE.contacts.telegramPersonal.url}
              target="_blank"
              rel="noopener noreferrer"
              style={delay(560)}
            >
              <span className="link-btn__icon">
                <MessageCircle aria-hidden="true" />
              </span>
              <span className="link-btn__body">
                <span className="link-btn__title">{t.personal}</span>
                <span className="link-btn__value">{SITE.contacts.telegramPersonal.handle}</span>
              </span>
              <ArrowUpRight className="link-btn__arrow" aria-hidden="true" />
            </a>

            <a className="link-btn" href={PHONE_HREF} style={delay(640)}>
              <span className="link-btn__icon">
                <Phone aria-hidden="true" />
              </span>
              <span className="link-btn__body">
                <span className="link-btn__title">{t.call}</span>
                <span className="link-btn__value">{SITE.contacts.phone.display}</span>
              </span>
              <ArrowUpRight className="link-btn__arrow" aria-hidden="true" />
            </a>
          </nav>
        </section>
      </main>

      <footer className="visit__footer">
        <span className="visit__footer-brand" style={delay(720)}>
          {SITE.name}
        </span>
        <span className="visit__footer-since" style={delay(780)}>
          {t.since}
        </span>
      </footer>
    </div>
  );
}
