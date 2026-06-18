/* eslint-disable @next/next/no-img-element */

export const metadata = {
  title: "Hello Agentic — Pop-up Banner (Print Ready)",
  description: "Print-ready pop-up banner for Hello Agentic — 850 x 2000 mm.",
  robots: { index: false, follow: false },
};

const SITE = "https://www.helloagentic.ai";
// High-res QR with H-level error correction. Dark fg/light bg to match brand cream.
const QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=1600x1600&margin=0&qzone=2&format=png&ecc=H&color=0E1117&bgcolor=F5EFE3&data=" +
  encodeURIComponent(SITE);

// Brand spec from helloagentic.ai
const BRAND = "#FA4616"; // primary orange
const INK = "#0E1117"; // text
const PAPER = "#F5EFE3"; // cream background
const PAPER_DEEP = "#EDE5D3"; // deeper cream
const MUTED = "#5B5544"; // muted body text

export default function HelloAgenticBannerPage() {
  return (
    <>
      <style>{`
        @page {
          size: 850mm 2000mm;
          margin: 0;
        }
        html, body { margin: 0; padding: 0; background: #1a1d28; }
        body { font-family: Manrope, ui-sans-serif, system-ui, sans-serif; }

        .banner-frame {
          width: 850mm;
          height: 2000mm;
          margin: 8mm auto;
          background: ${PAPER};
          color: ${INK};
          padding: 90mm 70mm;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          text-align: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20mm 60mm rgba(0,0,0,0.5);
          box-sizing: border-box;
        }
        /* warm radial accents */
        .banner-frame::before {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse at 18% 4%, rgba(250, 70, 22, 0.10) 0%, transparent 55%),
            radial-gradient(ellipse at 82% 96%, rgba(250, 70, 22, 0.08) 0%, transparent 55%);
        }
        /* faint texture grid for premium paper feel */
        .grid-tex {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            repeating-linear-gradient(0deg, transparent 0 19mm, rgba(14,17,23,0.025) 19mm 20mm),
            repeating-linear-gradient(90deg, transparent 0 19mm, rgba(14,17,23,0.025) 19mm 20mm);
        }

        .help {
          max-width: 900px;
          margin: 24px auto 8px;
          padding: 22px 28px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          line-height: 1.55;
        }
        .help h3 { margin: 0 0 8px; font-size: 16px; color: ${BRAND}; letter-spacing: 0.05em; }
        .help kbd {
          background: rgba(255,255,255,0.12);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: ui-monospace, monospace;
          font-size: 12px;
        }

        @media print {
          html, body { background: #fff; }
          .help { display: none !important; }
          .banner-frame { margin: 0; box-shadow: none; border-radius: 0; }
        }
      `}</style>

      <div className="help">
        <h3>HOW TO PRINT THIS BANNER</h3>
        <p>
          Sized at <strong>850 × 2000 mm (33.5 × 78.7 inches)</strong> — the global
          standard pop-up roll-up. Hit <kbd>⌘ + P</kbd> / <kbd>Ctrl + P</kbd>,
          choose <em>Save as PDF</em>, paper size{" "}
          <em>Custom — 850 × 2000 mm</em>, margins <em>None</em>, scale{" "}
          <em>100</em>, enable <em>Background graphics</em>. Send the resulting
          PDF straight to your banner vendor — it's vector-perfect at any DPI.
        </p>
      </div>

      <div className="banner-frame">
        <div className="grid-tex" />

        {/* TOP — logo lockup */}
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12mm",
              marginBottom: "30mm",
            }}
          >
            <img
              src="/images/helloagentic-icon.png"
              alt="Hello Agentic"
              style={{
                width: "70mm",
                height: "70mm",
                display: "block",
                borderRadius: "16mm",
                boxShadow: `0 14mm 40mm rgba(250, 70, 22, 0.35)`,
              }}
            />
            <span
              style={{
                fontSize: "50mm",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: INK,
                lineHeight: 1,
              }}
            >
              HelloAgentic
            </span>
          </div>
          <div
            style={{
              fontSize: "16mm",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: BRAND,
              fontWeight: 800,
            }}
          >
            Agentic AI Infrastructure
          </div>
        </div>

        {/* CENTER — headline (verbatim from helloagentic.ai) */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "168mm",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.02,
              margin: 0,
              color: INK,
              padding: "10mm 0 30mm",
            }}
          >
            Deploy agents.
            <br />
            <span style={{ color: BRAND, display: "inline-block", padding: "8mm 0 14mm" }}>Own the foundation.</span>
          </h1>
          <p
            style={{
              fontSize: "20mm",
              fontWeight: 500,
              color: MUTED,
              maxWidth: "640mm",
              lineHeight: 1.4,
              margin: "20mm auto 0",
            }}
          >
            Production-ready agentic AI systems — sovereign, secure, and costed to the cent.
          </p>
        </div>

        {/* THREE PILLARS — Blueprint · Build · Operate */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            gap: "10mm",
          }}
        >
          {[
            { n: "01", title: "Blueprint", desc: "Architecture + unit economics in 3–4 weeks" },
            { n: "02", title: "Build", desc: "Production agent on your data, in your stack" },
            { n: "03", title: "Operate", desc: "Monitor, optimize, scale" },
          ].map((p) => (
            <div
              key={p.n}
              style={{
                flex: 1,
                padding: "24mm 18mm",
                background: PAPER_DEEP,
                border: `1mm solid ${BRAND}33`,
                borderRadius: "14mm",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: "10mm", color: BRAND, letterSpacing: "0.18em", fontWeight: 800, marginBottom: "6mm" }}>
                {p.n}
              </div>
              <div style={{ fontSize: "22mm", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "8mm", color: INK }}>
                {p.title}
              </div>
              <div style={{ fontSize: "11mm", color: MUTED, lineHeight: 1.35 }}>
                {p.desc}
              </div>
            </div>
          ))}
        </div>

        {/* QR CODE */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "14mm",
              color: MUTED,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: "16mm",
              fontWeight: 800,
            }}
          >
            Scan to book a Blueprint
          </div>
          <div
            style={{
              padding: "24mm",
              background: "#fff",
              borderRadius: "22mm",
              boxShadow: `0 18mm 50mm rgba(250, 70, 22, 0.25), 0 0 0 3mm ${BRAND}`,
            }}
          >
            <img
              src={QR}
              alt="QR — helloagentic.ai"
              style={{ display: "block", width: "260mm", height: "260mm" }}
            />
          </div>
          <div
            style={{
              fontSize: "28mm",
              fontWeight: 800,
              marginTop: "22mm",
              color: INK,
              letterSpacing: "-0.01em",
            }}
          >
            helloagentic.ai
          </div>
        </div>

        {/* BOTTOM — socials */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "14mm",
          }}
        >
          <div
            style={{
              fontSize: "13mm",
              color: BRAND,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            Talk to us
          </div>
          <div style={{ display: "flex", gap: "16mm", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill={INK} style={{ width: "20mm", height: "20mm" }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              label="@helloagentic"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill={INK} style={{ width: "20mm", height: "20mm" }}>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              }
              label="@helloagentic"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill={INK} style={{ width: "20mm", height: "20mm" }}>
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5L4 6h16zM4 18V8l8 5 8-5v10H4z" />
                </svg>
              }
              label="pr@helloagentic.ai"
            />
          </div>
          <div
            style={{
              fontSize: "18mm",
              color: INK,
              letterSpacing: "0.28em",
              marginTop: "14mm",
              fontWeight: 800,
              textTransform: "uppercase",
            }}
          >
            Blueprint · Build · Operate
          </div>
        </div>
      </div>
    </>
  );
}

function SocialPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "9mm",
        padding: "12mm 20mm",
        background: "rgba(14,17,23,0.04)",
        border: `1.2mm solid ${INK}25`,
        borderRadius: "999mm",
      }}
    >
      {icon}
      <span style={{ fontSize: "18mm", fontWeight: 700, color: INK, letterSpacing: "-0.01em" }}>
        {label}
      </span>
    </div>
  );
}
