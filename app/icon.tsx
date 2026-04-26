import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e1117",
          fontSize: 240,
          fontWeight: 800,
          color: "#7CC242",
          letterSpacing: "-0.04em",
          fontFamily: "sans-serif",
        }}
      >
        AI
      </div>
    ),
    { ...size }
  );
}
