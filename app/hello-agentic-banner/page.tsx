/* eslint-disable @next/next/no-img-element */

export const metadata = {
  title: "Hello Agentic — Pop-up Banner (Print Ready)",
  description: "Print-ready pop-up banner for Hello Agentic — 850 x 2000 mm.",
  robots: { index: false, follow: false },
};

const SITE = "https://www.helloagentic.ai";
const QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=1600x1600&margin=0&qzone=2&format=png&ecc=H&data=" +
  encodeURIComponent(SITE);

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
          background:
            radial-gradient(ellipse at 25% 8%, rgba(167, 139, 250, 0.35) 0%, transparent 55%),
            radial-gradient(ellipse at 75% 92%, rgba(56, 189, 248, 0.28) 0%, transparent 55%),
            linear-gradient(180deg, #0b0a1a 0%, #04030b 100%);
          color: #fff;
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
        .grid-tex {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            repeating-linear-gradient(0deg, transparent 0 19mm, rgba(255,255,255,0.025) 19mm 20mm),
            repeating-linear-gradient(90deg, transparent 0 19mm, rgba(255,255,255,0.025) 19mm 20mm);
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
        .help h3 { margin: 0 0 8px; font-size: 16px; color: #a78bfa; letter-spacing: 0.05em; }
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
          Sized in real-world dimensions at <strong>850 × 2000 mm (33.5 × 78.7 inches)</strong>,
          the global standard for pop-up roll-ups. Hit <kbd>⌘ + P</kbd> /{" "}
          <kbd>Ctrl + P</kbd>, choose <em>Save as PDF</em>, paper size{" "}
          <em>Custom — 850 × 2000 mm</em>, margins <em>None</em>, scale{" "}
          <em>100</em>, and enable <em>Background graphics</em>. The PDF will be
          vector-perfect — send it straight to your banner vendor.
        </p>
      </div>

      <div className="banner-frame">
        <div className="grid-tex" />

        {/* TOP — wordmark + tagline */}
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10mm",
              marginBottom: "30mm",
            }}
          >
            <span
              style={{
                width: "20mm",
                height: "20mm",
                borderRadius: "999mm",
                background: "#a78bfa",
                boxShadow: "0 0 35mm #a78bfa",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "46mm",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              hello agentic
            </span>
          </div>
          <div
            style={{
              fontSize: "18mm",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#a78bfa",
              fontWeight: 700,
            }}
          >
            Agentic AI Infrastructure
          </div>
        </div>

        {/* CENTER — headline */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "160mm",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            Deploy agents.
            <br />
            <span style={{ color: "#a78bfa" }}>Own the foundation.</span>
          </h1>
          <p
            style={{
              fontSize: "18mm",
              fontWeight: 500,
              color: "rgba(255,255,255,0.75)",
              maxWidth: "640mm",
              lineHeight: 1.4,
              margin: "30mm auto 0",
            }}
          >
            Production-grade agentic AI. Built for finance, retail, and operations
            — engineered to scale on your data, in your stack.
          </p>
        </div>

        {/* THREE PILLARS */}
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
            { n: "01", title: "Blueprint", desc: "Architecture + plan in 3–4 weeks" },
            { n: "02", title: "Build", desc: "Production agent on your data" },
            { n: "03", title: "Operate", desc: "Monitor, optimize, scale" },
          ].map((p) => (
            <div
              key={p.n}
              style={{
                flex: 1,
                padding: "22mm 18mm",
                background: "rgba(167, 139, 250, 0.08)",
                border: "1mm solid rgba(167, 139, 250, 0.35)",
                borderRadius: "14mm",
                textAlign: "left",
              }}
            >
              <div style={{ fontSize: "10mm", color: "#a78bfa", letterSpacing: "0.18em", fontWeight: 700, marginBottom: "6mm" }}>
                {p.n}
              </div>
              <div style={{ fontSize: "20mm", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "8mm" }}>
                {p.title}
              </div>
              <div style={{ fontSize: "11mm", color: "rgba(255,255,255,0.65)", lineHeight: 1.35 }}>
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
              fontSize: "13mm",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: "16mm",
              fontWeight: 700,
            }}
          >
            Scan to book a Blueprint
          </div>
          <div
            style={{
              padding: "22mm",
              background: "#fff",
              borderRadius: "22mm",
              boxShadow:
                "0 22mm 60mm rgba(167, 139, 250, 0.30), 0 0 0 3mm rgba(167, 139, 250, 0.55)",
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
              fontSize: "26mm",
              fontWeight: 800,
              marginTop: "20mm",
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            helloagentic.ai
          </div>
        </div>

        {/* BOTTOM — social + contact */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12mm",
          }}
        >
          <div
            style={{
              fontSize: "9mm",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Talk to us
          </div>
          <div style={{ display: "flex", gap: "16mm", alignItems: "center" }}>
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" style={{ width: "14mm", height: "14mm" }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              label="@helloagentic"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" style={{ width: "14mm", height: "14mm" }}>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              }
              label="@helloagentic"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" style={{ width: "14mm", height: "14mm" }}>
                  <path d="M12 2 1.5 21h21L12 2zm0 4 7.5 13.5h-15L12 6z" />
                  <path d="M11 10h2v6h-2zM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              }
              label="pr@helloagentic.ai"
            />
          </div>
          <div
            style={{
              fontSize: "7mm",
              color: "rgba(255,255,255,0.30)",
              letterSpacing: "0.18em",
              marginTop: "6mm",
            }}
          >
            Hello Agentic · Agentic AI built, deployed, operated.
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
        gap: "7mm",
        padding: "9mm 14mm",
        background: "rgba(255,255,255,0.06)",
        border: "1mm solid rgba(255,255,255,0.18)",
        borderRadius: "999mm",
      }}
    >
      {icon}
      <span style={{ fontSize: "13mm", fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>
        {label}
      </span>
    </div>
  );
}
