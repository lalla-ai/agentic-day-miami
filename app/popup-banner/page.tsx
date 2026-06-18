/* eslint-disable @next/next/no-img-element */

export const metadata = {
  title: "Agentic Day — Pop-up Banner (Print Ready)",
  description: "Print-ready pop-up banner for Agentic Day — 850 x 2000 mm.",
  robots: { index: false, follow: false },
};

const SITE = "https://www.agenticdaysummit.com";
// High-res QR: 1600x1600 with H-level error correction for print
const QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=1600x1600&margin=0&qzone=2&format=png&ecc=H&data=" +
  encodeURIComponent(SITE);

export default function PopupBannerPage() {
  return (
    <>
      <style>{`
        /* Real-world print dimensions: 850mm x 2000mm — standard pop-up roll-up */
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
            radial-gradient(ellipse at 20% 8%, rgba(124, 194, 66, 0.32) 0%, transparent 55%),
            radial-gradient(ellipse at 80% 92%, rgba(124, 92, 255, 0.32) 0%, transparent 55%),
            linear-gradient(180deg, #0a0d12 0%, #04050a 100%);
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
        .help h3 { margin: 0 0 8px; font-size: 16px; color: #a4e547; letter-spacing: 0.05em; }
        .help kbd {
          background: rgba(255,255,255,0.12);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: ui-monospace, monospace;
          font-size: 12px;
        }
        .print-btn {
          display: inline-block; margin-top: 12px;
          padding: 10px 20px; background: #a4e547; color: #0a0c14;
          border-radius: 999px; font-weight: 700; font-size: 14px;
          text-decoration: none; cursor: pointer; border: none;
        }

        @media print {
          html, body { background: #fff; }
          .help { display: none !important; }
          .banner-frame { margin: 0; box-shadow: none; border-radius: 0; }
        }
      `}</style>

      {/* Help panel — only on screen, hidden when printing */}
      <div className="help">
        <h3>HOW TO PRINT THIS BANNER</h3>
        <p>
          This page is sized at the exact real-world dimensions of a standard
          pop-up roll-up: <strong>850 × 2000 mm (33.5 × 78.7 inches)</strong>. To save
          a print-ready PDF, hit <kbd>⌘ + P</kbd> (Mac) or <kbd>Ctrl + P</kbd>{" "}
          (Windows), choose <em>Save as PDF</em>, and in <em>More settings</em>{" "}
          set <em>Paper size</em> to <em>Custom — 850 × 2000 mm</em>, margins{" "}
          <em>None</em>, scale <em>100</em>. The PDF will be vector-perfect at any DPI —
          send it straight to your banner vendor.
        </p>
      </div>

      <div className="banner-frame">
        <div className="grid-tex" />

        {/* TOP — big logo + tagline */}
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <img
            src="/images/agentic-day-logo.jpg"
            alt="Agentic Day"
            style={{
              width: "380mm",
              height: "auto",
              display: "block",
              margin: "0 auto 30mm",
              borderRadius: "20mm",
              boxShadow: "0 25mm 65mm rgba(164, 229, 71, 0.20)",
            }}
          />
          <div
            style={{
              fontSize: "18mm",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#a4e547",
              fontWeight: 700,
            }}
          >
            The AI Investment &amp; Infrastructure Summit
          </div>
        </div>

        {/* CENTER — headline */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "150mm",
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            Where AI
            <br />
            <span style={{ color: "#a4e547" }}>meets capital.</span>
          </h1>
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
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: "18mm",
              fontWeight: 700,
            }}
          >
            Scan to Request Your Invite
          </div>
          <div
            style={{
              padding: "26mm",
              background: "#fff",
              borderRadius: "26mm",
              boxShadow:
                "0 22mm 60mm rgba(164, 229, 71, 0.22), 0 0 0 3mm rgba(164, 229, 71, 0.5)",
            }}
          >
            <img
              src={QR}
              alt="QR — agenticdaysummit.com"
              style={{ display: "block", width: "320mm", height: "320mm" }}
            />
          </div>
          <div
            style={{
              fontSize: "28mm",
              fontWeight: 800,
              marginTop: "22mm",
              color: "#fff",
              letterSpacing: "-0.01em",
            }}
          >
            agenticdaysummit.com
          </div>
        </div>

        {/* BOTTOM — social handles */}
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
              fontSize: "16mm",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Follow the room
          </div>
          <div style={{ display: "flex", gap: "18mm", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" style={{ width: "22mm", height: "22mm" }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              label="@AgenticDay"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" style={{ width: "22mm", height: "22mm" }}>
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.75-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              }
              label="@AgenticDay"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" style={{ width: "22mm", height: "22mm" }}>
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              }
              label="@sheagentic"
            />
          </div>
          <div
            style={{
              fontSize: "11mm",
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.18em",
              marginTop: "12mm",
              fontWeight: 500,
            }}
          >
            Presented by Hello Agentic · pr@helloagentic.ai
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
        gap: "10mm",
        padding: "14mm 22mm",
        background: "rgba(255,255,255,0.08)",
        border: "1.2mm solid rgba(255,255,255,0.28)",
        borderRadius: "999mm",
      }}
    >
      {icon}
      <span style={{ fontSize: "20mm", fontWeight: 700, color: "#fff", letterSpacing: "-0.01em" }}>
        {label}
      </span>
    </div>
  );
}
