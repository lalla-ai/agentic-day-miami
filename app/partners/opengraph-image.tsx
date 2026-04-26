import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Agentic Day Partners — Position your brand at the forefront of AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.18) 0%, transparent 60%), linear-gradient(180deg, #8b6dff 0%, #7c5cff 50%, #6948d4 100%)",
          color: "#fff",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.95)",
          }}
        >
          Sponsor at Agentic Day Miami
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
            }}
          >
            Meet the world&apos;s
          </div>
          <div
            style={{
              fontSize: "92px",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.0,
            }}
          >
            top AI decision-makers
          </div>
        </div>

        <div
          style={{
            fontSize: "22px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          May 4 · 2026 · Tesla Miami Design District
        </div>
      </div>
    ),
    { ...size }
  );
}
