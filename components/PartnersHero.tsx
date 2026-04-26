export default function PartnersHero() {
  return (
    <section className="partners-hero">
      <div className="wrap">
        <div className="partners-hero-content">
          <p className="partners-hero-eyebrow">Exhibit at Agentic Day</p>
          <h1 className="partners-hero-title">
            Meet the world&apos;s top AI<br />decision-makers
          </h1>
          <p className="partners-hero-sub">
            Last call for sponsorship and exhibition opportunities — available until 1 May 2026.
          </p>
          <a
            href="mailto:pr@helloagentic.ai?subject=Sponsorship Inquiry — Agentic Day Miami"
            className="btn-light partners-hero-cta"
          >
            Sponsor With Us <span className="btn-dot" />
          </a>
        </div>

        {/* Image strip at the bottom */}
        <div className="partners-hero-strip">
          <div className="strip-card strip-card-1" />
          <div className="strip-card strip-card-2" />
          <div className="strip-card strip-card-3" />
          <div className="strip-card strip-card-4" />
        </div>
      </div>
    </section>
  );
}
