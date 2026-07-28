"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, type Stat } from "@/lib/content";
import Reveal from "./Reveal";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setVal(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const duration = 1400;
        let start: number | null = null;
        const tick = (t: number) => {
          if (start === null) start = t;
          const p = Math.min((t - start) / duration, 1);
          // easeOutCubic
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function StatValue({ stat }: { stat: Stat }) {
  if (/^\d+$/.test(stat.value)) {
    return <CountUp target={parseInt(stat.value, 10)} suffix={stat.suffix} />;
  }
  return (
    <span>
      {stat.value}
      {stat.suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section
      className="relative z-10 -mt-px bg-gold-gradient"
      aria-label="Key metrics"
    >
      <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.08}
            className="border-l border-white/15 px-5 first:border-l-0 md:px-8"
          >
            <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              <StatValue stat={stat} />
            </div>
            <div className="mt-1.5 text-sm font-medium text-white/75">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
