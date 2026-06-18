export const metadata = {
  title: "Agentic Day — Pop-up Banner",
  description: "Print-ready pop-up banner for Agentic Day. Vertical roll-up format.",
  robots: { index: false, follow: false },
};

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
      {/* Banner canvas — standard roll-up ratio 33" x 80" → 1000 x 2425 px @ 30dpi */}
      <div
        style={{
          width: 1000,
          height: 2425,
          maxWidth: "100%",
          background:
            "radial-gradient(ellipse at 18% 10%, rgba(124, 194, 66, 0.28) 0%, transparent 55%), radial-gradient(ellipse at 85% 88%, rgba(124, 92, 255, 0.30) 0%, transparent 55%), linear-gradient(180deg, #0a0d12 0%, #04050a 100%)",
          color: "#fff",
          padding: "80px 70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 60px 160px rgba(0,0,0,0.6)",
          borderRadius: 12,
        }}
      >
        {/* faint grid pattern */}
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

        {/* TOP — brand mark */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              color: "#a4e547",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            <span
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#a4e547",
                boxShadow: "0 0 20px #a4e547",
              }}
            />
            Agentic Day
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
            The AI Infrastructure &amp; Investment Summit
          </div>
        </div>

        {/* CENTER — headline */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 30 }}>
          <h1
            style={{
              fontSize: 168,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 0.92,
              margin: 0,
            }}
          >
            Where AI
            <br />
            <span style={{ color: "#a4e547" }}>meets capital.</span>
          </h1>
          <p
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 760,
              lineHeight: 1.45,
              marginTop: 48,
            }}
          >
            The invitation-only summit series where the builders shipping agentic AI meet the capital deciding what scales.
          </p>
        </div>

        {/* CITIES */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 24,
            marginTop: 40,
          }}
        >
          <div style={{ fontSize: 18, color: "#a4e547", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            — Three editions
          </div>
          {[
            { city: "Miami", date: "May 4, 2026", venue: "Tesla Miami Design District" },
            { city: "Amsterdam", date: "June 22, 2026", venue: "Europe edition" },
            { city: "Toronto", date: "July 21, 2026", venue: "Blockchain Futurist Conference" },
          ].map((e) => (
            <div
              key={e.city}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                paddingBottom: 18,
                borderBottom: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#a4e547",
                  boxShadow: "0 0 12px #a4e547",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em", color: "#fff", minWidth: 240 }}>
                {e.city}
              </span>
              <span style={{ fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{e.date}</span>
              <span style={{ fontSize: 18, color: "rgba(255,255,255,0.55)", marginLeft: "auto" }}>{e.venue}</span>
            </div>
          ))}
        </div>

        {/* BOTTOM — CTA */}
        <div style={{ position: "relative", zIndex: 1, marginTop: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "28px 36px",
              background: "rgba(255,255,255,0.06)",
              border: "1.5px solid rgba(164, 229, 71, 0.55)",
              borderRadius: 999,
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>
                Request your invite
              </div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#fff" }}>agenticdaysummit.com</div>
            </div>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 999,
                background: "#a4e547",
                color: "#0a0c14",
                fontWeight: 800,
                fontSize: 28,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              →
            </div>
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", textAlign: "center", marginTop: 20, letterSpacing: "0.18em" }}>
            Presented by Hello Agentic · pr@helloagentic.ai
          </div>
        </div>
      </div>
    </main>
  );
}
