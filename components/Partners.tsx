import Image from "next/image";

const SPONSORS = [
  { name: "WEEX Labs",          logo: "/images/sponsors/weex_labs_logo.svg", url: "https://www.weex.com/" },
  { name: "Cayman Finance",     logo: "/images/sponsors/cayman_finance.png", url: "https://www.caymanfinance.gov.ky/" },
  { name: "Verdant Management", logo: "/images/sponsors/verdant_management.png" },
  { name: "Shore Labs",         logo: "/images/sponsors/shore_labs.png" },
  { name: "Aon",                logo: "/images/sponsors/aon.png",      url: "https://www.aon.com/" },
  { name: "NXT Law",            logo: "/images/sponsors/nxt_law.png" },
  { name: "AMAI",               logo: "/images/sponsors/amai.png",     url: "https://allmyai.ai/" },
];

export default function Partners() {
  return (
    <section id="partners" className="section">
      <div className="wrap">
        <div style={{ textAlign: "center" }}>
          <div className="section-eyebrow reveal" style={{ textAlign: "center" }}>— Partners</div>
          <h2 className="reveal" style={{ textAlign: "center", margin: "0 auto 32px" }}>
            Building it together.
          </h2>
        </div>

        <div className="partners-subnav reveal">
          <a href="#sponsors" className="active">Sponsors</a>
          <a href="#community">Community Partners</a>
          <a href="#media">Media Partners</a>
        </div>

        {/* Sponsors — flat grid, no tiers */}
        <div id="sponsors" className="partner-tier reveal">
          <div className="partner-tier-title">— Sponsors —</div>
          <div className="partner-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {SPONSORS.map((s) => (
              <div key={s.name} className="partner-cell">
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    <Image src={s.logo} alt={s.name} width={200} height={60}
                      style={{ maxWidth: "75%", maxHeight: "60%", objectFit: "contain", width: "auto", height: "auto" }} />
                  </a>
                ) : (
                  <Image src={s.logo} alt={s.name} width={200} height={60}
                    style={{ maxWidth: "75%", maxHeight: "60%", objectFit: "contain", width: "auto", height: "auto" }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div id="community" className="partner-tier reveal">
          <div className="partner-tier-title">— Community Partners —</div>
          <div className="partner-grid cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="partner-cell">
                <div className="partner-name" style={{ color: "var(--ink-dim)", fontSize: 13, fontWeight: 500 }}>
                  Logo coming soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div id="media" className="partner-tier reveal">
          <div className="partner-tier-title">— Media Partners —</div>
          <div className="partner-grid">
            {[1, 2].map((i) => (
              <div key={i} className="partner-cell">
                <div className="partner-name" style={{ color: "var(--ink-dim)", fontSize: 13, fontWeight: 500 }}>
                  Logo coming soon
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Get involved */}
        <div className="partner-cta reveal">
          <a
            href="https://luma.com/event/evt-CPHbpuc52PLWqp0"
            target="_blank"
            rel="noopener noreferrer"
            className="involved-card tickets"
          >
            <h3 className="involved-headline">
              <span className="row">Request</span>
              <span className="row">your invite</span>
            </h3>
            <span className="involved-cta">
              Request Invite <span className="btn-dot" />
            </span>
          </a>
          <a href="mailto:pr@helloagentic.ai" className="involved-card speaker">
            <h3 className="involved-headline">
              <span className="row">Become</span>
              <span className="row">a speaker</span>
            </h3>
            <span className="involved-cta involved-cta-dark">
              Apply now <span className="btn-dot" />
            </span>
          </a>
          <a href="mailto:pr@helloagentic.ai" className="involved-card partner">
            <h3 className="involved-headline">
              <span className="row">Become</span>
              <span className="row">a partner</span>
            </h3>
            <span className="involved-cta involved-cta-dark">
              Partner with us <span className="btn-dot" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
