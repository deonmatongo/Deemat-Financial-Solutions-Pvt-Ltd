"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Landmark } from "lucide-react";
import { COMPANY } from "@/lib/content";

const trustBadges = [
  { icon: Landmark, label: "Listed-company experience" },
  { icon: ShieldCheck, label: "Governance & IFRS" },
  { icon: TrendingUp, label: "20+ years executive" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-onyx-gradient pt-32 pb-24 md:pt-40 md:pb-32"
    >
      {/* Decorative background grid + glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-burgundy/25 blur-[120px]"
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-burgundy-light"
          >
            <span className="h-px w-6 bg-burgundy-light" />
            {COMPANY.tagline}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Executive finance leadership,{" "}
            <span className="text-burgundy-light">without the full-time cost.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            {COMPANY.valueProp}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link href="/services" className="btn-ghost">
              Explore Services
            </Link>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3"
          >
            {trustBadges.map((b) => (
              <li
                key={b.label}
                className="flex items-center gap-2 text-sm text-white/60"
              >
                <b.icon className="h-4 w-4 text-burgundy-light" aria-hidden />
                {b.label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Abstract financial visual */}
        <div className="relative hidden justify-center lg:flex" aria-hidden>
          <div className="relative h-[420px] w-[420px]">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-burgundy/30"
                style={{ margin: `${i * 46}px` }}
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.04, 1], opacity: [0.35, 0.6, 0.35] }
                }
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Center card — mini financial dashboard */}
            <div className="absolute left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-white/60">
                  Profitability
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400">
                  <TrendingUp className="h-3.5 w-3.5" /> +18.4%
                </span>
              </div>
              <div className="mt-4 flex h-24 items-end gap-2">
                {[38, 52, 44, 66, 58, 80, 92].map((h, idx) => (
                  <motion.span
                    key={idx}
                    className="flex-1 rounded-t bg-gradient-to-t from-burgundy to-burgundy-light"
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + idx * 0.08,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
              <div className="mt-4 border-t border-white/10 pt-3 text-[11px] text-white/50">
                Fractional CFO dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
