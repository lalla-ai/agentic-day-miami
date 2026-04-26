import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Agentic Day Miami — Where AI meets capital. May 4, 2026.";
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
            "radial-gradient(ellipse at top left, rgba(124, 194, 66, 0.25) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(124, 92, 255, 0.20) 0%, transparent 50%), linear-gradient(180deg, #0a0d12 0%, #050608 100%)",
          color: "#fff",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {/* Top - eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#a4e547",
            fontSize: "24px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#a4e547",
              boxShadow: "0 0 16px #a4e547",
            }}
          />
          Agentic Day Miami
        </div>

        {/* Center - headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontSize: "108px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#fff",
            }}
          >
            Where AI
          </div>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "#fff",
            }}
          >
            meets capital.
          </div>
        </div>

        {/* Bottom - meta strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "26px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <div>May 4 · 2026</div>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#a4e547",
            }}
          />
          <div>Tesla Miami Design District</div>
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#a4e547",
            }}
          />
          <div>By Invitation</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
