"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  motion,
} from "framer-motion";
import { STATS, type Stat } from "@/lib/content";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, reduce]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function StatValue({ stat }: { stat: Stat }) {
  const numeric = /^\d+$/.test(stat.value);
  if (numeric) {
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
    <section className="relative z-10 -mt-px bg-burgundy-gradient" aria-label="Key metrics">
      <div className="container-x grid grid-cols-2 gap-y-8 py-12 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="border-l border-white/15 px-5 first:border-l-0 md:px-8"
          >
            <div className="font-heading text-3xl font-extrabold text-white md:text-4xl">
              <StatValue stat={stat} />
            </div>
            <div className="mt-1.5 text-sm font-medium text-white/75">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
