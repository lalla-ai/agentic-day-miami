import React from "react";
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

// Container — flex centers the logo; every logo gets the same visual height
const SLOT: React.CSSProperties = {
  width: "100%",
  height: 80,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// Every logo renders at the same TARGET HEIGHT regardless of source aspect ratio.
// Width auto-scales to keep aspect; max-width caps very wide marks.
const IMG: React.CSSProperties = {
  height: 60,
  width: "auto",
  maxWidth: 180,
  objectFit: "contain" as const,
  mixBlendMode: "multiply" as const,
  display: "block",
};

// `square` legacy prop ignored — all logos use the same fixed-height slot
function LogoCell({ logo, name, url }: { logo: string; name: string; url?: string; square?: boolean }) {
  const slot = SLOT;
  const img = (
    <div style={slot}>
      <Image src={logo} alt={name} width={300} height={200} style={IMG} />
    </div>
  );
  return (
    <div className="partner-cell">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer"
           style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
          {img}
        </a>
      ) : (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%" }}>
          {img}
        </div>
      )}
    </div>
  );
}

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
              <LogoCell key={s.name} logo={s.logo} name={s.name} url={s.url} square={s.name === "AMAI"} />
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div id="community" className="partner-tier reveal">
          <div className="partner-tier-title">— Community Partners —</div>
          <div className="partner-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <LogoCell logo="/images/community/miami_dubai_chamber.png"          name="Miami Fintech Club"        url="https://www.miamifintechclub.com/" square />
            <LogoCell logo="/images/community/miami_fintech_club.png"           name="Miami-Dubai Chamber"                                    square />
            <LogoCell logo="/images/community/miami_dade_beacon_council_real.png" name="Miami-Dade Beacon Council" url="https://www.beaconcouncil.com/" square />
            <LogoCell logo="/images/community/shefi_real.png"                    name="SheFi"                      url="https://www.shefi.org/" />
            <LogoCell logo="/images/community/miami_dade_college.png"            name="Miami Dade College"         url="https://www.mdc.edu/" />
            <LogoCell logo="/images/community/blockchain_futurist.svg"           name="Blockchain Futurist Conference" url="https://futuristconference.com/" />
            <LogoCell logo="/images/community/ai4purpose.png"                    name="AI4Purpose"                 url="https://ai4purpose.com/" />
          </div>
        </div>

        {/* Media Partners */}
        <div id="media" className="partner-tier reveal">
          <div className="partner-tier-title">— Media Partners —</div>
          <div className="partner-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <LogoCell logo="/images/media/luna_pr.png"      name="Luna PR"      url="https://www.lunapr.io/" />
            <LogoCell logo="/images/media/mindo_ai.png"     name="Mindo AI"     url="https://mindo.ai/" />
            <LogoCell logo="/images/media/cryptoevents.png" name="CryptoEvents" url="https://cryptoevents.global/" />
            <LogoCell logo="/images/media/yellow.webp"      name="Yellow"       url="https://www.yellow.com/" />
            <LogoCell logo="/images/media/cryptonomads.jpg" name="CryptoNomads" url="https://cryptonomads.org/" square />
          </div>
        </div>

      </div>
    </section>
  );
}
