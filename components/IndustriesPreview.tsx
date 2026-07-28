import Link from "next/link";
import { ShieldAlert, Factory, ArrowRight, Check } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";
import Reveal from "./Reveal";

const ICONS = { security: ShieldAlert, manufacturing: Factory } as const;

/** Home-page overview of the two core industry verticals, linking to /industries. */
export default function IndustriesPreview() {
  return (
    <section className="section bg-navy">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow text-gold-light">
              <span className="h-px w-6 bg-gold-light" />
              Where we go deep
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Sector expertise that speaks your operational language.
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light hover:text-white"
          >
            Explore industries
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map((industry, i) => {
            const Icon = ICONS[industry.id as keyof typeof ICONS];
            return (
              <Reveal key={industry.id} as="div" delay={i * 0.1}>
                <Link
                  href="/industries"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-8 transition-colors duration-300 hover:border-gold"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white transition-colors group-hover:bg-gold">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {industry.blurb}
                  </p>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                    {industry.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-center gap-2 text-sm text-white/80"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-gold-light"
                          aria-hidden
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
