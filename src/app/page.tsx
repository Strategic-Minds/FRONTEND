import type { CSSProperties } from "react";

const SOURCE_IMAGE = "data:image/jpeg;base64,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";

const sourceStyle = { "--source-img": `url(${SOURCE_IMAGE})` } as CSSProperties;

const models = [
  ["SIENNA ROSE", "MIAMI, FL", "m1"],
  ["LUNA SKYE", "LOS ANGELES, CA", "m2"],
  ["ALEXIS VOSS", "NEW YORK, NY", "m3"],
  ["CLAIRE MONTEL", "MIAMI, FL", "m4"],
  ["NATALIA BLISS", "LOS ANGELES, CA", "m5"],
  ["ZOE SAINT", "NEW YORK, NY", "m6"]
];

export default function HomePage() {
  return (
    <div className="site-shell" style={sourceStyle}>
      <header className="topbar">
        <a className="brand" href="#" aria-label="Eden Skye Studios home">
          <span className="brand-main">EDEN <strong>SKYE</strong> STUDIOS</span>
          <span className="brand-sub">DIGITAL MODELING & CONTENT CREATOR AGENCY</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">MODELS</a>
          <a href="#">SERVICES</a>
          <a href="#">AUTO SOCIAL™</a>
          <a href="#">BRAND PARTNERS</a>
          <a href="#">APPLY</a>
          <a href="#">PWA APP</a>
          <a href="#">CONTACT</a>
        </nav>
        <div className="top-actions">
          <a className="button button-solid" href="#">APPLY NOW</a>
          <a className="download" href="#" aria-label="Download app">⇩</a>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-mask" />
          <div className="hero-copy">
            <p className="eyebrow">WELCOME TO EDEN SKYE STUDIOS</p>
            <h1 id="hero-title">BEAUTY.<br /><span>INFLUENCE.</span><br />IMPACT.</h1>
            <p className="hero-text">
              We represent elite digital models and content creators.<br />
              We build iconic brands. We create viral content.<br />
              We drive results.
            </p>
            <div className="hero-actions">
              <a className="button button-solid" href="#">APPLY NOW</a>
              <a className="button button-ghost" href="#">VIEW OUR MODELS</a>
            </div>
            <div className="stats" aria-label="Agency stats">
              <div><span className="stat-icon">♚</span><strong>100+</strong><small>MODELS</small></div>
              <div><span className="stat-icon">▣</span><strong>24/7</strong><small>CONTENT</small></div>
              <div><span className="stat-icon">↗</span><strong>GLOBAL</strong><small>REACH</small></div>
              <div><span className="stat-icon">☆</span><strong>PREMIUM</strong><small>BRANDS</small></div>
            </div>
          </div>
        </section>

        <section className="difference" aria-labelledby="difference-title">
          <h2 id="difference-title">THE <span>EDEN SKYE</span> STUDIOS DIFFERENCE</h2>
          <div className="difference-grid">
            <article><span>♕</span><div><h3>ELITE TALENT</h3><p>Top 1% of digital models and content creators.</p></div></article>
            <article><span>ϟ</span><div><h3>VIRAL CONTENT</h3><p>High-converting content that drives engagement.</p></div></article>
            <article><span>◎</span><div><h3>GLOBAL REACH</h3><p>Worldwide audience. Limitless opportunity.</p></div></article>
            <article><span>◇</span><div><h3>PREMIUM BRANDS</h3><p>We connect talent with iconic brands.</p></div></article>
            <article><span>$</span><div><h3>MAXIMUM PROFIT</h3><p>Built for creators. Designed for results.</p></div></article>
          </div>
        </section>

        <section className="models" aria-labelledby="models-title">
          <div className="section-heading">
            <h2 id="models-title">OUR MODELS</h2>
            <a href="#">VIEW ALL MODELS →</a>
          </div>
          <button className="rail-arrow left" aria-label="Previous models">‹</button>
          <div className="model-grid">
            {models.map(([name, city, crop]) => (
              <article className="model-card" key={name}>
                <div className={`model-photo ${crop}`} />
                <div className="model-caption"><strong>{name}</strong><small>{city}</small></div>
              </article>
            ))}
          </div>
          <button className="rail-arrow right" aria-label="Next models">›</button>
        </section>

        <section className="services" aria-label="Services">
          <a className="service-tile s1" href="#" aria-label="Creator production"><span>CREATOR<br /><b>PRODUCTION</b></span></a>
          <a className="service-tile s2" href="#" aria-label="Auto Social"><span>AUTO SOCIAL™</span></a>
          <a className="service-tile s3" href="#" aria-label="Brand partnerships"><span>BRAND<br /><b>PARTNERSHIPS</b></span></a>
        </section>

        <section className="app-band" aria-label="Eden Skye app">
          <div className="phone-glow">ES</div>
          <div>
            <h2>THE EDEN SKYE APP</h2>
            <p>Your agency. In your pocket.</p>
          </div>
          <a className="store-badge" href="#">Download on the<br /><strong>App Store</strong></a>
          <a className="store-badge" href="#">Get it on<br /><strong>Google Play</strong></a>
          <a className="button button-solid install" href="#">INSTALL NOW ⇩</a>
        </section>
      </main>
    </div>
  );
}
