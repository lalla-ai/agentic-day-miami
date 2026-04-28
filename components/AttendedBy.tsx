"use client";
import Image from "next/image";

const ROW_0 = ["a16z","alchemy","anchorage-digital","animoca-brands","apple","arbitrum","arweave","avalanche","aws","binance","bitcoin-magazine","bitgo","bitmain","blockdaemon","blockstream","blockworks","chainalysis"];
const ROW_1 = ["chainlink","cleanspark","coinbase","coindesk","coinfund","cointelegraph","compound","consensys","cosmos","decrypt","digital-currency-group","figment","filecoin","fireblocks","foundry","framework","galaxy"];
const ROW_2 = ["google","hedera","ibm","infura","jump-trading","kraken","ledger","lightning-labs","luxor","marathon","mastercard","messari","meta","microsoft","multicoin","near","optimism"];
const ROW_3 = ["oracle","pantera","paradigm","paypal","polygon","riot","ripple","salesforce","solana","starkware","stripe","tezos","the-block","trm","visa","zksync"];

const ROWS = [
  { logos: ROW_0, duration: "70s", reverse: false },
  { logos: ROW_1, duration: "55s", reverse: true },
  { logos: ROW_2, duration: "65s", reverse: false },
  { logos: ROW_3, duration: "50s", reverse: true },
];

function toTitle(slug: string) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export default function AttendedBy() {
  return (
    <section className="attended-section">
      <div className="wrap">
        <div className="attended-eyebrow">— Unparalleled networking</div>
        <h2 className="attended-title">
          Attended by<br />
          <span className="attended-highlight">industry leaders.</span>
        </h2>
      </div>

      <div className="logo-wall">
        {ROWS.map((row, ri) => {
          const doubled = [...row.logos, ...row.logos];
          return (
            <div key={ri} className="logo-row">
              <div
                className="logo-track"
                style={{
                  animationDuration: row.duration,
                  animationDirection: row.reverse ? "reverse" : "normal",
                }}
              >
                {doubled.map((slug, i) => (
                  <div key={i} className="logo-item-img" title={toTitle(slug)}>
                    <Image
                      src={`/logos/${slug}.png`}
                      alt={toTitle(slug)}
                      width={200}
                      height={60}
                      style={{
                        height: "50px",
                        width: "auto",
                        maxWidth: "220px",
                        objectFit: "contain",
                        filter: "invert(1) brightness(0.95) saturate(0.3)",
                        opacity: 0.85,
                        transition: "opacity 0.2s, filter 0.2s",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .attended-section {
          background: #07091a;
          color: #fff;
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }
        .attended-section::after {
          content: '';
          position: absolute;
          top: 0; right: -10%;
          width: 50%; height: 100%;
          background-image: radial-gradient(circle, rgba(124,194,66,0.18) 1px, transparent 1px);
          background-size: 18px 18px;
          -webkit-mask-image: radial-gradient(ellipse at right, black 0%, transparent 70%);
          mask-image: radial-gradient(ellipse at right, black 0%, transparent 70%);
          pointer-events: none;
        }
        .attended-eyebrow {
          color: #a4e547;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .attended-title {
          font-size: clamp(48px, 7vw, 96px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 40px 0;
        }
        .attended-highlight { color: #7CC242; }
        .logo-wall {
          position: relative;
          padding: 60px 0;
        }
        .logo-wall::before, .logo-wall::after {
          content: '';
          position: absolute; top: 0; bottom: 0;
          width: 200px; z-index: 3; pointer-events: none;
        }
        .logo-wall::before { left: 0; background: linear-gradient(to right, #07091a, transparent); }
        .logo-wall::after { right: 0; background: linear-gradient(to left, #07091a, transparent); }
        .logo-row {
          overflow: hidden;
          margin-bottom: 24px;
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .logo-track {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: logo-scroll 60s linear infinite;
        }
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .logo-item-img {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          height: 70px;
        }
      `}</style>
    </section>
  );
}
