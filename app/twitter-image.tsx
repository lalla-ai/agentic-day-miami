import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Agentic Day — Where AI meets capital. Miami · Amsterdam · Toronto.";
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
            "radial-gradient(ellipse at top left, rgba(124, 194, 66, 0.30) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(124, 92, 255, 0.22) 0%, transparent 55%), linear-gradient(180deg, #0a0d12 0%, #050608 100%)",
          color: "#fff",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#a4e547",
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              background: "#a4e547",
              boxShadow: "0 0 18px #a4e547",
            }}
          />
          Agentic Day
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "118px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            Where AI
          </div>
          <div
            style={{
              fontSize: "118px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
            }}
          >
            meets capital.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: "28px",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.85)",
          }}
        >
          <div style={{ fontWeight: 700, color: "#fff" }}>Miami</div>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#a4e547",
            }}
          />
          <div style={{ fontWeight: 700, color: "#fff" }}>Amsterdam</div>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#a4e547",
            }}
          />
          <div style={{ fontWeight: 700, color: "#fff" }}>Toronto</div>
          <div style={{ marginLeft: "24px", color: "rgba(255, 255, 255, 0.6)" }}>
            2026
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
