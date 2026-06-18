import { promises as fs } from "fs";
import path from "path";

export const dynamic = "force-static";

export async function GET() {
  const iconBytes = await fs.readFile(
    path.join(process.cwd(), "public", "images", "helloagentic-icon.png")
  );
  const iconB64 = `data:image/png;base64,${iconBytes.toString("base64")}`;

  const SITE = "https://www.helloagentic.ai";
  const QR =
    "https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=0&qzone=2&format=svg&ecc=H&color=0E1117&bgcolor=F5EFE3&data=" +
    encodeURIComponent(SITE);

  const BRAND = "#FA4616";
  const INK = "#0E1117";
  const PAPER = "#F5EFE3";
  const PAPER_DEEP = "#EDE5D3";
  const MUTED = "#5B5544";

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     viewBox="0 0 850 2000" width="850mm" height="2000mm"
     preserveAspectRatio="xMidYMid meet">
  <defs>
    <radialGradient id="glowA" cx="20%" cy="4%" r="62%">
      <stop offset="0%" stop-color="${BRAND}" stop-opacity="0.12"/>
      <stop offset="55%" stop-color="${BRAND}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="80%" cy="96%" r="62%">
      <stop offset="0%" stop-color="${BRAND}" stop-opacity="0.10"/>
      <stop offset="55%" stop-color="${BRAND}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${INK}" stroke-opacity="0.025" stroke-width="0.5"/>
    </pattern>
    <style><![CDATA[
      text { font-family: 'Manrope', 'Helvetica Neue', sans-serif; fill: ${INK}; }
      .eyebrow { font-weight: 800; letter-spacing: 6px; text-transform: uppercase; }
      .pill { fill: rgba(14,17,23,0.04); stroke: rgba(14,17,23,0.25); stroke-width: 1.4; }
    ]]></style>
  </defs>

  <!-- Cream paper background + accents -->
  <rect width="850" height="2000" fill="${PAPER}"/>
  <rect width="850" height="2000" fill="url(#glowA)"/>
  <rect width="850" height="2000" fill="url(#glowB)"/>
  <rect width="850" height="2000" fill="url(#grid)"/>

  <!-- Top: icon + wordmark -->
  <image href="${iconB64}" x="240" y="120" width="80" height="80" preserveAspectRatio="xMidYMid meet"/>
  <text x="340" y="180" font-size="56" font-weight="800" letter-spacing="-2.5">HelloAgentic</text>

  <!-- Eyebrow -->
  <text x="425" y="290" font-size="16" class="eyebrow" fill="${BRAND}" text-anchor="middle">
    Agentic AI Infrastructure
  </text>

  <!-- Headline -->
  <text x="425" y="470" font-size="140" font-weight="800" text-anchor="middle" letter-spacing="-3">Deploy agents.</text>
  <text x="425" y="610" font-size="140" font-weight="800" text-anchor="middle" letter-spacing="-3" fill="${BRAND}">Own the foundation.</text>

  <!-- Subhead -->
  <text x="425" y="700" font-size="22" font-weight="500" text-anchor="middle" fill="${MUTED}">
    Production-ready agentic AI systems — sovereign, secure, and costed to the cent.
  </text>

  <!-- Three pillars -->
  <g transform="translate(60, 800)">
    <!-- Blueprint -->
    <rect x="0" y="0" width="230" height="220" rx="14" fill="${PAPER_DEEP}" stroke="${BRAND}" stroke-opacity="0.35" stroke-width="1.2"/>
    <text x="20" y="40" font-size="14" font-weight="800" letter-spacing="3" fill="${BRAND}">01</text>
    <text x="20" y="90" font-size="32" font-weight="800" letter-spacing="-1">Blueprint</text>
    <text x="20" y="135" font-size="14" fill="${MUTED}">Architecture +</text>
    <text x="20" y="155" font-size="14" fill="${MUTED}">unit economics</text>
    <text x="20" y="175" font-size="14" fill="${MUTED}">in 3–4 weeks</text>

    <!-- Build -->
    <rect x="250" y="0" width="230" height="220" rx="14" fill="${PAPER_DEEP}" stroke="${BRAND}" stroke-opacity="0.35" stroke-width="1.2"/>
    <text x="270" y="40" font-size="14" font-weight="800" letter-spacing="3" fill="${BRAND}">02</text>
    <text x="270" y="90" font-size="32" font-weight="800" letter-spacing="-1">Build</text>
    <text x="270" y="135" font-size="14" fill="${MUTED}">Production agent</text>
    <text x="270" y="155" font-size="14" fill="${MUTED}">on your data,</text>
    <text x="270" y="175" font-size="14" fill="${MUTED}">in your stack</text>

    <!-- Operate -->
    <rect x="500" y="0" width="230" height="220" rx="14" fill="${PAPER_DEEP}" stroke="${BRAND}" stroke-opacity="0.35" stroke-width="1.2"/>
    <text x="520" y="40" font-size="14" font-weight="800" letter-spacing="3" fill="${BRAND}">03</text>
    <text x="520" y="90" font-size="32" font-weight="800" letter-spacing="-1">Operate</text>
    <text x="520" y="135" font-size="14" fill="${MUTED}">Monitor, optimize,</text>
    <text x="520" y="155" font-size="14" fill="${MUTED}">scale</text>
  </g>

  <!-- QR block -->
  <text x="425" y="1130" font-size="14" class="eyebrow" fill="${MUTED}" text-anchor="middle">
    Scan to book a Blueprint
  </text>
  <rect x="265" y="1160" width="320" height="320" rx="22" fill="#ffffff"/>
  <rect x="262" y="1157" width="326" height="326" rx="24" fill="none" stroke="${BRAND}" stroke-width="3"/>
  <image href="${QR}" x="295" y="1190" width="260" height="260" preserveAspectRatio="xMidYMid meet"/>

  <!-- URL -->
  <text x="425" y="1550" font-size="32" font-weight="800" text-anchor="middle" letter-spacing="-0.5">helloagentic.ai</text>

  <!-- Talk to us -->
  <text x="425" y="1700" font-size="20" class="eyebrow" fill="${BRAND}" text-anchor="middle">Talk to us</text>

  <!-- Social pills -->
  <g transform="translate(120, 1740)">
    <rect class="pill" width="180" height="80" rx="40"/>
    <path transform="translate(18, 24) scale(1.4)" fill="${INK}" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    <text x="65" y="52" font-size="20" font-weight="800" letter-spacing="-0.3">@helloagentic</text>
  </g>
  <g transform="translate(335, 1740)">
    <rect class="pill" width="180" height="80" rx="40"/>
    <path transform="translate(18, 24) scale(1.4)" fill="${INK}" d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
    <text x="65" y="52" font-size="20" font-weight="800" letter-spacing="-0.3">@helloagentic</text>
  </g>
  <g transform="translate(550, 1740)">
    <rect class="pill" width="180" height="80" rx="40"/>
    <path transform="translate(18, 24) scale(1.4)" fill="${INK}" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5L4 6h16zM4 18V8l8 5 8-5v10H4z"/>
    <text x="65" y="52" font-size="18" font-weight="800" letter-spacing="-0.3">pr@helloagentic.ai</text>
  </g>

  <!-- Footer pillars -->
  <text x="425" y="1920" font-size="22" font-weight="800" letter-spacing="5" text-anchor="middle">
    BLUEPRINT · BUILD · OPERATE
  </text>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Content-Disposition":
        'attachment; filename="hello-agentic-popup-banner.svg"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
