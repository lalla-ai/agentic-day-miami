"use client";

import { useEffect, useRef } from "react";

/**
 * Signature green-dot wave — exact algorithm from the original
 * index-18 reference. A 7px grid of #7CC242 dots fills the area
 * below an organic wavy boundary produced by three overlapping sines.
 * Density grows toward the bottom; edges soften with sin(nx * π).
 */
export default function MeshWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GAP = 7;
    const DOT = 1.15;
    let W = 0;
    let H = 0;
    let dpr = 1;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function draw(time: number) {
      if (!ctx) return;
      const t = time * 0.00018;
      ctx.clearRect(0, 0, W, H);

      for (let x = 0; x <= W; x += GAP) {
        const nx = x / W;
        const wave =
          Math.sin(nx * 3.1 + 1.4) * 0.115 +
          Math.sin(nx * 6.283 + t) * 0.055 +
          Math.sin(nx * 11.0 - t * 0.5) * 0.024;
        const boundary = H * (0.26 + wave);

        for (let y = 0; y <= H; y += GAP) {
          if (y < boundary) continue;
          const below = y - boundary;
          let a = Math.min(below / (H * 0.42), 1) * 0.7;
          a *= 0.55 + 0.45 * Math.sin(Math.min(Math.max(nx, 0), 1) * Math.PI);
          if (a <= 0.012) continue;
          ctx.globalAlpha = a;
          ctx.fillStyle = "#7CC242";
          ctx.beginPath();
          ctx.arc(x, y, DOT, 0, 6.283);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
    }

    let raf = 0;
    function loop(ts: number) {
      draw(ts);
      raf = requestAnimationFrame(loop);
    }

    resize();
    if (reduce) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onResize = () => {
      resize();
      if (reduce) draw(0);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="mesh-canvas" />;
}
