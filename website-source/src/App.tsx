import type { ReactNode } from 'react';
import { privacyPolicy } from './privacy-policy';

function LinkedText({ text }: { text: string }) {
  const matcher = /https?:\/\/[^\s]+|tech@nu3careplus\.com/g;
  const parts: ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = matcher.exec(text)) !== null) {
    let visible = match[0];
    let trailing = '';
    if (visible.startsWith('http')) {
      const punctuation = visible.match(/[.,;:)]+$/);
      if (punctuation) {
        trailing = punctuation[0];
        visible = visible.slice(0, -trailing.length);
      }
    }
    if (match.index > cursor) parts.push(text.slice(cursor, match.index));
    const href = visible.startsWith('http') ? visible : `mailto:${visible}`;
    parts.push(
      <a href={href} key={`${match.index}-${visible}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {visible}
      </a>,
    );
    if (trailing) parts.push(trailing);
    cursor = match.index + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));
  return <>{parts}</>;
}

function PrivacyPage() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Match Food privacy policy home" data-testid="link-brand-home">
          <img src="assets/brand/match-food-mark.png" alt="" width="38" height="38" />
          <span>Match Food</span>
        </a>
        <a className="top-link" href={`mailto:${privacyPolicy.contact}`} data-testid="link-contact-header">
          Questions? Get in touch
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="policy-title">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">A little more peace of mind</p>
            <h1 id="policy-title">Match Food Privacy Policy</h1>
            <p className="hero-intro">
              Here’s what Match Food keeps on your device, what happens when you use our games, and the choices that stay yours.
            </p>
            <p className="effective" data-testid="text-effective-date">Effective date: {privacyPolicy.effectiveDate}</p>
          </div>
          <div className="hero-art" aria-label="Match Food dishes" role="img">
            <img className="hero-food hero-food--one" src="assets/foods/macaron.webp" alt="Colorful macarons" width="170" height="170" />
            <img className="hero-food hero-food--two" src="assets/foods/eclair.webp" alt="Chocolate éclair" width="170" height="170" />
            <img className="hero-food hero-food--three" src="assets/foods/tiramisu.webp" alt="Tiramisu cake" width="170" height="170" />
            <img className="hero-food hero-food--four" src="assets/foods/puffpuff.png" alt="Puff-puff" width="110" height="110" />
            <img className="hero-food hero-food--five" src="assets/foods/blackforestcake.webp" alt="Black Forest cake" width="110" height="110" />
            <span className="hero-sticker" aria-hidden="true">PLAY<br />HAPPY</span>
          </div>
        </div>
      </section>

      <main className="content-wrap">
        <nav className="toc" aria-label="Privacy policy contents">
          <p className="toc-label">In this policy</p>
          {privacyPolicy.sections.map((section, index) => (
            <a key={section.title} href={`#section-${index + 1}`} data-testid={`link-policy-section-${index + 1}`}>
              {section.title.replace(/^\d+\.\s*/, '')}
            </a>
          ))}
        </nav>

        <article className="policy" aria-label="Match Food Privacy Policy">
          <p className="policy-intro">
            Match Food is for players aged 13 and over. This policy covers the website and Android and iOS games. Take your time reading it; the details matter.
          </p>
          {privacyPolicy.sections.map((section, index) => (
            <section className="policy-section" id={`section-${index + 1}`} key={section.title} aria-labelledby={`heading-${index + 1}`}>
              <h2 id={`heading-${index + 1}`}>
                <span className="section-number">{String(index + 1).padStart(2, '0')}</span>
                {section.title.replace(/^\d+\.\s*/, '')}
              </h2>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${section.title}-${paragraphIndex}`} data-testid={`text-policy-${index + 1}-${paragraphIndex + 1}`}>
                  <LinkedText text={paragraph} />
                </p>
              ))}
            </section>
          ))}
        </article>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="assets/brand/match-food-mark.png" alt="" width="26" height="26" />
          <span>Match Food</span>
        </div>
        <p>Privacy questions? <a href={`mailto:${privacyPolicy.contact}`}>{privacyPolicy.contact}</a></p>
        <p>Made for a good game and a clear understanding.</p>
      </footer>
    </div>
  );
}

export default PrivacyPage;
