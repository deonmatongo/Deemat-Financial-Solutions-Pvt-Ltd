"use client";

import { useState } from "react";
import { ShieldAlert, Factory, Check } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";
import Reveal from "./Reveal";

const ICONS = { security: ShieldAlert, manufacturing: Factory } as const;

export default function IndustrySolutions({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="industries" className="section bg-onyx">
      <div className="container-x">
        {showHeading && (
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-burgundy-light">
              <span className="h-px w-6 bg-burgundy-light" />
              Where we go deep
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Sector expertise that speaks your operational language.
            </h2>
            <p className="mt-4 text-lg text-white/65">
              Two decades on the ground in operationally complex industries — so
              the advice is grounded in how the business actually runs.
            </p>
          </Reveal>
        )}

        <div
          className={`flex flex-col gap-4 lg:h-[360px] lg:flex-row ${
            showHeading ? "mt-12" : ""
          }`}
        >
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[industry.id as keyof typeof ICONS];
            const dimmed = hovered !== null && hovered !== industry.id;
            return (
              <Reveal
                key={industry.id}
                as="article"
                delay={i * 0.1}
                onMouseEnter={() => setHovered(industry.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flexGrow: hovered === industry.id ? 1.6 : 1,
                  transition:
                    "flex-grow .3s ease, background-color .3s, border-color .3s, opacity .6s, transform .6s",
                }}
                className={`group relative flex-1 overflow-hidden rounded-2xl border p-8 ${
                  hovered === industry.id
                    ? "border-burgundy bg-burgundy-gradient"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/5 blur-2xl"
                />
                <div className="relative flex h-full flex-col">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70">
                    {industry.blurb}
                  </p>

                  <ul
                    className={`mt-auto grid gap-2 pt-6 transition-opacity duration-300 sm:grid-cols-2 ${
                      dimmed ? "opacity-45" : "opacity-100"
                    }`}
                  >
                    {industry.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-sm text-white/85"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-burgundy-light group-hover:text-white"
                          aria-hidden
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
