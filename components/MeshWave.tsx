"use client";

/**
 * Soft violet/iridescent wisp ribbon at the bottom of the Hero.
 * Replaces the previous green-dot perspective grid with a SuperAI-style
 * blurred gradient ribbon. Pure SVG + CSS, lightweight, gently animated.
 */
export default function MeshWave() {
  return (
    <div className="wisp-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 1600 480"
        preserveAspectRatio="xMidYMax slice"
        className="wisp-svg"
      >
        <defs>
          {/* Main violet gradient — left to right */}
          <linearGradient id="wispMain" x1="0%" y1="0%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#c9c4ff" />
            <stop offset="35%" stopColor="#a78bfa" />
            <stop offset="65%" stopColor="#7c5cff" />
            <stop offset="100%" stopColor="#b794f6" />
          </linearGradient>

          {/* Iridescent rim — cyan/magenta edge highlight */}
          <linearGradient id="wispRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#f0abfc" stopOpacity="0.55" />
          </linearGradient>

          {/* Soft ground glow */}
          <radialGradient id="wispGlow" cx="50%" cy="100%" r="60%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>

          <filter id="wispBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        <rect x="0" y="0" width="1600" height="480" fill="url(#wispGlow)" />

        {/* Back ribbon (softer, blurred) */}
        <path
          d="M -80 380
             C 200 260, 420 460, 720 360
             C 1020 260, 1200 440, 1480 320
             C 1640 260, 1700 360, 1700 420
             L 1700 520 L -80 520 Z"
          fill="url(#wispMain)"
          opacity="0.7"
          filter="url(#wispBlur)"
        />

        {/* Front ribbon (sharper) */}
        <path
          d="M -80 410
             C 240 320, 500 480, 820 400
             C 1100 340, 1260 470, 1500 380
             C 1640 340, 1700 400, 1700 460
             L 1700 540 L -80 540 Z"
          fill="url(#wispMain)"
          opacity="0.9"
        />

        {/* Iridescent edge highlight */}
        <path
          d="M -40 405
             C 240 320, 500 478, 820 398
             C 1100 340, 1260 468, 1500 378"
          stroke="url(#wispRim)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />
      </svg>
    </div>
  );
}
