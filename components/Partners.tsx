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

const LOGO_STYLE = {
  height: "48px",
  width: "auto",
  maxWidth: "100%",
  objectFit: "contain" as const,
  mixBlendMode: "multiply" as const,
};

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
                    <Image src={s.logo} alt={s.name} width={200} height={60} style={LOGO_STYLE} />
                  </a>
                ) : (
                  <Image src={s.logo} alt={s.name} width={200} height={60} style={LOGO_STYLE} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div id="community" className="partner-tier reveal">
          <div className="partner-tier-title">— Community Partners —</div>
          <div className="partner-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { name: "Miami Fintech Club",        logo: "/images/community/miami_fintech_club.png",        url: "https://www.miamifintechclub.com/" },
              { name: "Miami Dade College",         logo: "/images/community/miami_dade_college.png",        url: "https://www.mdc.edu/" },
              { name: "Miami-Dade Beacon Council", logo: "/images/community/miami_dade_beacon_council.png", url: "https://www.beaconcouncil.com/" },
              { name: "Miami-Dubai Chamber",        logo: "/images/community/miami_dubai_chamber.png" },
              { name: "SheFi",                     logo: "/images/community/shefi.png",                     url: "https://www.shefi.org/" },
            ].map((p) => (
              <div key={p.name} className="partner-cell">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    <Image src={p.logo} alt={p.name} width={200} height={60} style={LOGO_STYLE} />
                  </a>
                ) : (
                  <Image src={p.logo} alt={p.name} width={200} height={60} style={LOGO_STYLE} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div id="media" className="partner-tier reveal">
          <div className="partner-tier-title">— Media Partners —</div>
          <div className="partner-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { name: "Luna PR",  logo: "/images/media/luna_pr.png",  url: "https://www.lunapr.io/" },
              { name: "Mindo AI", logo: "/images/media/mindo_ai.png" },
            ].map((p) => (
              <div key={p.name} className="partner-cell">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
                    <Image src={p.logo} alt={p.name} width={200} height={60} style={LOGO_STYLE} />
                  </a>
                ) : (
                  <Image src={p.logo} alt={p.name} width={200} height={60} style={LOGO_STYLE} />
                )}
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
