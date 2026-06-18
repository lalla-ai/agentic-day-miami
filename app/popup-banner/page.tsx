/* eslint-disable @next/next/no-img-element */

export const metadata = {
  title: "Agentic Day — Pop-up Banner",
  description: "Print-ready pop-up banner for Agentic Day.",
  robots: { index: false, follow: false },
};

const SITE = "https://www.agenticdaysummit.com";
const QR =
  "https://api.qrserver.com/v1/create-qr-code/?size=900x900&margin=0&qzone=2&format=png&data=" +
  encodeURIComponent(SITE);

export default function PopupBannerPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0c14",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 20px",
        fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Banner canvas — roll-up ratio 33" x 80" = 1000 x 2425 px */}
      <div
        style={{
          width: 1000,
          height: 2425,
          maxWidth: "100%",
          background:
            "radial-gradient(ellipse at 20% 8%, rgba(124, 194, 66, 0.32) 0%, transparent 55%), radial-gradient(ellipse at 80% 92%, rgba(124, 92, 255, 0.32) 0%, transparent 55%), linear-gradient(180deg, #0a0d12 0%, #04050a 100%)",
          color: "#fff",
          padding: "100px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 60px 160px rgba(0,0,0,0.6)",
          borderRadius: 12,
        }}
      >
        {/* faint grid */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0 79px, rgba(255,255,255,0.025) 79px 80px), repeating-linear-gradient(90deg, transparent 0 79px, rgba(255,255,255,0.025) 79px 80px)",
            pointerEvents: "none",
          }}
        />

        {/* TOP — big logo + tagline */}
        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
          <img
            src="/images/agentic-day-logo.jpg"
            alt="Agentic Day"
            style={{
              width: 460,
              height: "auto",
              display: "block",
              margin: "0 auto 56px",
              borderRadius: 24,
              boxShadow: "0 30px 80px rgba(164, 229, 71, 0.20)",
            }}
          />
          <div
            style={{
              fontSize: 22,
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
              fontSize: 180,
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
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              marginBottom: 24,
              fontWeight: 700,
            }}
          >
            Scan to Request Your Invite
          </div>
          <div
            style={{
              padding: 36,
              background: "#fff",
              borderRadius: 32,
              boxShadow: "0 30px 80px rgba(164, 229, 71, 0.20), 0 0 0 2px rgba(164, 229, 71, 0.4)",
            }}
          >
            <img src={QR} alt="QR — agenticdaysummit.com" width={420} height={420} style={{ display: "block" }} />
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              marginTop: 30,
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
            gap: 22,
          }}
        >
          <div
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Follow the room
          </div>
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" width="22" height="22">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              label="@AgenticDay"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" width="22" height="22">
                  <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.75-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                </svg>
              }
              label="@AgenticDay"
            />
            <SocialPill
              icon={
                <svg viewBox="0 0 24 24" fill="#fff" width="22" height="22">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              }
              label="@sheagentic"
            />
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.30)", letterSpacing: "0.18em", marginTop: 16 }}>
            Presented by Hello Agentic · pr@helloagentic.ai
          </div>
        </div>
      </div>
    </main>
  );
}

function SocialPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 22px",
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.18)",
        borderRadius: 999,
        backdropFilter: "blur(10px)",
      }}
    >
      {icon}
      <span style={{ fontSize: 20, fontWeight: 600, color: "#fff", letterSpacing: "-0.01em" }}>{label}</span>
    </div>
  );
}
