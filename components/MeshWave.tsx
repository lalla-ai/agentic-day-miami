"use client";

import { useEffect, useRef } from "react";

export default function MeshWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const COLS = 90;
    const ROWS = 26;
    const DOT_BASE = 1.2;
    const PERSPECTIVE = 0.65;
    const SPEED = 0.014;

    let t = 0;
    let raf = 0;

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      for (let r = ROWS - 1; r >= 0; r--) {
        const depth = r / (ROWS - 1);
        const yBase = height * (1 - Math.pow(depth, PERSPECTIVE));

        for (let c = 0; c < COLS; c++) {
          const xRatio = c / (COLS - 1);
          const x = xRatio * width;

          const wave1 = Math.sin(xRatio * 2.4 + t * 1.4 + depth * 1.2) * 60;
          const wave2 = Math.sin(xRatio * 5.8 - t * 1.9 + depth * 2.6) * 22;
          const wave3 = Math.sin(xRatio * 1.2 + t * 0.7 - depth * 0.6) * 35;
          const yOffset = (wave1 + wave2 + wave3) * (0.3 + depth * 0.7);

          const y = yBase + yOffset;
          if (y < -20 || y > height + 20) continue;

          const size = DOT_BASE * (0.35 + depth * 1.5);
          const alpha = 0.12 + depth * 0.78;
          const edgeFade = Math.sin(xRatio * Math.PI);
          const greenBoost = 124 + Math.floor(edgeFade * 30);

          ctx.fillStyle = `rgba(${Math.floor(124 + edgeFade * 20)}, ${greenBoost + 70}, 66, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      t += SPEED;
      raf = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="mesh-canvas" />;
}
