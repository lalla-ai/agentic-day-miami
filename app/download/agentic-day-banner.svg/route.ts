import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  // Load logo and encode to base64 so the SVG is fully self-contained
  const logoBytes = await fs.readFile(
    path.join(process.cwd(), "public", "images", "agentic-day-logo.jpg")
  );
  const logoB64 = `data:image/jpeg;base64,${logoBytes.toString("base64")}`;

  // QR code as inline image — qrserver returns clean SVG
  const SITE = "https://www.agenticdaysummit.com";
  const QR =
    "https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=0&qzone=2&format=svg&ecc=H&data=" +
    encodeURIComponent(SITE);

  // Viewport: 850 x 2000 (1 unit = 1 mm so it prints at real size)
  // Coordinates below are in mm. Origin top-left.
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 850 2000" width="850mm" height="2000mm"
     preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="glow1" cx="20%" cy="8%" r="62%">
      <stop offset="0%" stop-color="#7CC242" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#7CC242" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="92%" r="62%">
      <stop offset="0%" stop-color="#7C5CFF" stop-opacity="0.35"/>
      <stop offset="55%" stop-color="#7C5CFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a0d12"/>
      <stop offset="100%" stop-color="#04050a"/>
    </linearGradient>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" stroke-opacity="0.025" stroke-width="0.5"/>
    </pattern>
    <style><![CDATA[
      text { font-family: 'Manrope', 'Helvetica Neue', sans-serif; fill: #fff; }
      .eyebrow { font-weight: 800; letter-spacing: 6px; text-transform: uppercase; }
      .pill { fill: rgba(255,255,255,0.10); stroke: rgba(255,255,255,0.40); stroke-width: 1.4; }
    ]]></style>
  </defs>

  <!-- background -->
  <rect width="850" height="2000" fill="url(#bg)"/>
  <rect width="850" height="2000" fill="url(#glow1)"/>
  <rect width="850" height="2000" fill="url(#glow2)"/>
  <rect width="850" height="2000" fill="url(#grid)"/>

  <!-- Logo (centered, 380mm wide) -->
  <image href="${logoB64}" x="235" y="100" width="380" height="380" preserveAspectRatio="xMidYMid meet"/>

  <!-- Subhead under logo -->
  <text x="425" y="540" font-size="18" class="eyebrow" fill="#a4e547" text-anchor="middle">
    The AI Investment &amp; Infrastructure Summit
  </text>

  <!-- Headline -->
  <text x="425" y="760" font-size="150" font-weight="800" text-anchor="middle" letter-spacing="-3">Where AI</text>
  <text x="425" y="900" font-size="150" font-weight="800" text-anchor="middle" letter-spacing="-3" fill="#a4e547">meets capital.</text>

  <!-- QR section -->
  <text x="425" y="1110" font-size="14" class="eyebrow" fill="rgba(255,255,255,0.65)" text-anchor="middle">
    Scan to Request Your Invite
  </text>

  <!-- White QR card -->
  <rect x="245" y="1140" width="360" height="360" rx="22" fill="#ffffff"/>
  <rect x="242" y="1137" width="366" height="366" rx="24" fill="none" stroke="#a4e547" stroke-width="3"/>
  <image href="${QR}" x="275" y="1170" width="300" height="300" preserveAspectRatio="xMidYMid meet"/>

  <!-- URL under QR -->
  <text x="425" y="1570" font-size="32" font-weight="800" text-anchor="middle" letter-spacing="-0.5">agenticdaysummit.com</text>

  <!-- Footer eyebrow -->
  <text x="425" y="1700" font-size="22" class="eyebrow" fill="#a4e547" text-anchor="middle">Follow the room</text>

  <!-- Social pills -->
  <!-- X -->
  <g transform="translate(120, 1740)">
    <rect class="pill" width="180" height="80" rx="40"/>
    <path transform="translate(18, 24) scale(1.4)" fill="#fff" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    <text x="65" y="52" font-size="22" font-weight="800" letter-spacing="-0.3">@AgenticDay</text>
  </g>

  <!-- Instagram -->
  <g transform="translate(335, 1740)">
    <rect class="pill" width="180" height="80" rx="40"/>
    <path transform="translate(18, 24) scale(1.4)" fill="#fff" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.75-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
    <text x="65" y="52" font-size="22" font-weight="800" letter-spacing="-0.3">@AgenticDay</text>
  </g>

  <!-- Telegram -->
  <g transform="translate(550, 1740)">
    <rect class="pill" width="180" height="80" rx="40"/>
    <path transform="translate(18, 24) scale(1.4)" fill="#fff" d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
    <text x="65" y="52" font-size="22" font-weight="800" letter-spacing="-0.3">@sheagentic</text>
  </g>

  <!-- "Presented by" sign-off -->
  <text x="425" y="1920" font-size="16" font-weight="800" letter-spacing="4" text-transform="uppercase" text-anchor="middle">
    Presented by Hello Agentic · pr@helloagentic.ai
  </text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Disposition":
        'attachment; filename="agentic-day-popup-banner.svg"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
