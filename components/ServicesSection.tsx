"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "@/lib/content";
import Reveal from "./Reveal";

export default function ServicesSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const [active, setActive] = useState(SERVICES[0].id);
  const activeService = SERVICES.find((s) => s.id === active)!;

  return (
    <section id="services" className="section bg-mist">
      <div className="container-x">
        {showHeading ? (
          <Reveal className="max-w-2xl">
            <span className="eyebrow">
              <span className="h-px w-6 bg-burgundy" />
              What we do
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-onyx sm:text-4xl">
              Four disciplines, one integrated finance partner.
            </h2>
            <p className="mt-4 text-lg text-slate-brand">
              Select a discipline to see how we deliver — or engage across all
              four for end-to-end financial leadership.
            </p>
          </Reveal>
        ) : (
          <p className="max-w-2xl text-lg text-slate-brand">
            Select a discipline below to see how we deliver — or engage across
            all four for end-to-end financial leadership.
          </p>
        )}

        {/* Card grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const isActive = service.id === active;
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => setActive(service.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                aria-pressed={isActive}
                className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-shadow duration-300 ${
                  isActive
                    ? "border-burgundy bg-white shadow-card-hover"
                    : "border-onyx/10 bg-white shadow-card hover:shadow-card-hover"
                }`}
              >
                {/* top accent bar */}
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left bg-burgundy transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-burgundy/10 text-burgundy transition-colors group-hover:bg-burgundy group-hover:text-white">
                  <service.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-onyx">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand/80">
                  {service.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-burgundy opacity-0 transition-opacity group-hover:opacity-100">
                  View capabilities
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Tabbed detail panel */}
        <div className="mt-8 overflow-hidden rounded-2xl bg-onyx-gradient p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-burgundy text-white">
                  <activeService.icon className="h-8 w-8" aria-hidden />
                </span>
                <div className="md:max-w-[14rem]">
                  <h3 className="font-heading text-xl font-bold text-white">
                    {activeService.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">
                    {activeService.summary}
                  </p>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {activeService.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/90"
                  >
                    <Check className="h-4 w-4 shrink-0 text-burgundy-light" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
