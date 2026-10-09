import type { CSSProperties } from 'react';
import { Send, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { PHONE_HREF, SITE } from '../config/site';

const delay = (ms: number): CSSProperties => ({ '--d': ms }) as CSSProperties;

interface VisitCardProps {
  ready: boolean;
}

export default function VisitCard({ ready }: VisitCardProps) {
  const year = new Date().getFullYear();

  return (
    <div className={`visit${ready ? ' is-ready' : ''}`}>
      <div className="visit__glow" aria-hidden="true" />

      <main className="visit__stage">
        <section className="visit__card" aria-labelledby="brand-title">
          <div className="visit__logo" style={delay(80)}>
            <span className="visit__mark" aria-hidden="true">
              <span>{SITE.monogram}</span>
            </span>
            <h1 className="visit__wordmark" id="brand-title">
              <span className="visit__line-1">Magnat</span>
              <span className="visit__line-2">Premium</span>
            </h1>
          </div>

          <span className="visit__rule" style={delay(220)} aria-hidden="true" />

          <p className="visit__slogan" style={delay(300)}>
            «{SITE.slogan}»
          </p>

          <p className="visit__caption" style={delay(380)}>
            <span aria-hidden="true" />
            {SITE.caption}
            <span aria-hidden="true" />
          </p>

          <nav className="visit__links" aria-label="Способы связи">
            <a
              className="link-btn"
              href={SITE.contacts.telegramChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              style={delay(460)}
            >
              <span className="link-btn__icon">
                <Send aria-hidden="true" />
              </span>
              <span className="link-btn__body">
                <span className="link-btn__title">{SITE.contacts.telegramChannel.label}</span>
                <span className="link-btn__value">{SITE.contacts.telegramChannel.handle}</span>
              </span>
              <ArrowUpRight className="link-btn__arrow" aria-hidden="true" />
            </a>

            <a
              className="link-btn"
              href={SITE.contacts.telegramPersonal.url}
              target="_blank"
              rel="noopener noreferrer"
              style={delay(540)}
            >
              <span className="link-btn__icon">
                <MessageCircle aria-hidden="true" />
              </span>
              <span className="link-btn__body">
                <span className="link-btn__title">{SITE.contacts.telegramPersonal.label}</span>
                <span className="link-btn__value">{SITE.contacts.telegramPersonal.handle}</span>
              </span>
              <ArrowUpRight className="link-btn__arrow" aria-hidden="true" />
            </a>

            <a className="link-btn" href={PHONE_HREF} style={delay(620)}>
              <span className="link-btn__icon">
                <Phone aria-hidden="true" />
              </span>
              <span className="link-btn__body">
                <span className="link-btn__title">{SITE.contacts.phone.label}</span>
                <span className="link-btn__value">{SITE.contacts.phone.display}</span>
              </span>
              <ArrowUpRight className="link-btn__arrow" aria-hidden="true" />
            </a>
          </nav>
        </section>
      </main>

      <footer className="visit__footer">
        <span className="visit__footer-brand" style={delay(700)}>
          {SITE.name}
        </span>
        <span className="visit__footer-copy" style={delay(760)}>
          © {year}
        </span>
      </footer>
    </div>
  );
}
