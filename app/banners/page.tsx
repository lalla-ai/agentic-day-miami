export const metadata = {
  title: "Agentic Day & Hello Agentic — Pop-up Banners (Download)",
  description: "Download print-ready pop-up roll-up banners.",
  robots: { index: false, follow: false },
};

export default function BannersDownloadPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0c14",
        color: "#fff",
        padding: "60px 24px",
        fontFamily: "Manrope, ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            margin: 0,
          }}
        >
          Pop-up banners — <span style={{ color: "#a4e547" }}>downloads</span>.
        </h1>
        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginTop: 16, lineHeight: 1.55 }}>
          Two print-ready, 850 × 2000 mm vector roll-up banners. Click each card
          to download the <strong>.svg</strong>. Send straight to your banner printer.
        </p>

        <div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 24,
          }}
        >
          <BannerCard
            title="Agentic Day"
            subtitle="Where AI meets capital · QR → agenticdaysummit.com"
            color="#a4e547"
            previewHref="/popup-banner"
            downloadHref="/download/agentic-day-banner.svg"
            downloadName="agentic-day-popup-banner.svg"
          />
          <BannerCard
            title="Hello Agentic"
            subtitle="Deploy agents. Own the foundation. · QR → helloagentic.ai"
            color="#FA4616"
            previewHref="/hello-agentic-banner"
            downloadHref="/download/hello-agentic-banner.svg"
            downloadName="hello-agentic-popup-banner.svg"
          />
        </div>

        <div
          style={{
            marginTop: 48,
            padding: "28px 32px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 16,
            color: "rgba(255,255,255,0.78)",
            fontSize: 15,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "#a4e547", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 13 }}>
            How to print
          </strong>
          <div style={{ marginTop: 10 }}>
            <strong>Best:</strong> upload the SVG directly to your banner printer (Vistaprint, Helloprint, Banner Buzz, FedEx Office, or any local print shop). Tell them:{" "}
            <em>“Roll-up pop-up banner, 850 × 2000 mm finished size, vector SVG, full-bleed, do not resize.”</em>
          </div>
          <div style={{ marginTop: 10 }}>
            <strong>Alt — convert to PNG/JPEG:</strong> upload the .svg at{" "}
            <a href="https://cloudconvert.com/svg-to-png" style={{ color: "#a4e547" }} target="_blank" rel="noopener noreferrer">
              cloudconvert.com/svg-to-png
            </a>{" "}
            (or convertio.co), set width <strong>9921 px</strong> for 300 DPI. Download. Done.
          </div>
        </div>
      </div>
    </main>
  );
}

function BannerCard({
  title,
  subtitle,
  color,
  previewHref,
  downloadHref,
  downloadName,
}: {
  title: string;
  subtitle: string;
  color: string;
  previewHref: string;
  downloadHref: string;
  downloadName: string;
}) {
  return (
    <div
      style={{
        padding: "28px 32px",
        background: "rgba(255,255,255,0.05)",
        border: `1px solid ${color}55`,
        borderRadius: 20,
        boxShadow: `0 24px 60px ${color}20`,
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
        <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", margin: 0 }}>
          {title}
        </h2>
        <span
          style={{
            color,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          850 × 2000 mm · vector svg
        </span>
      </div>
      <p style={{ color: "rgba(255,255,255,0.65)", marginTop: 8, fontSize: 15 }}>{subtitle}</p>

      <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
        <a
          href={downloadHref}
          download={downloadName}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: color,
            color: "#0a0c14",
            padding: "16px 28px",
            borderRadius: 999,
            fontWeight: 800,
            fontSize: 16,
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          ↓ Download SVG
        </a>
        <a
          href={previewHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.06)",
            color: "#fff",
            padding: "16px 28px",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 16,
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.18)",
          }}
        >
          Preview in browser ↗
        </a>
      </div>
    </div>
  );
}
