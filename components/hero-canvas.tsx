"use client";

import { useEffect, useRef } from "react";

// Signature visual: a live knowledge graph. Nodes drift, edges light up
// as they connect. An honest picture of retrieval-augmented generation,
// not a decorative particle field.
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; pulse: number };
    let nodes: Node[] = [];

    function resize() {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      // Fewer nodes on small/low-power screens to protect battery and frame rate.
      const isNarrow = canvas.offsetWidth < 640;
      const maxNodes = isNarrow ? 24 : 46;
      const count = Math.min(maxNodes, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 26000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        r: (Math.random() * 1.6 + 1) * devicePixelRatio,
        pulse: Math.random() * Math.PI * 2,
      }));
    }

    window.addEventListener("resize", resize);
    resize();

    // Pause the animation loop entirely once the hero scrolls out of view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) frame();
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const LINK_DIST = 150 * devicePixelRatio;

    function frame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        n.pulse += 0.015;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.35;
            ctx.strokeStyle = `rgba(140,134,255,${alpha})`;
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        const glow = 0.5 + Math.sin(n.pulse) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = `rgba(140,134,255,${glow})`;
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion && running) raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-90"
      aria-hidden="true"
    />
  );
}
