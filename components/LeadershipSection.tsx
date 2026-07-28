import { Award, Quote } from "lucide-react";
import { LEADER } from "@/lib/content";
import Reveal from "./Reveal";

export default function LeadershipSection({
  showHeading = true,
}: {
  showHeading?: boolean;
}) {
  const initials = LEADER.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <section id="leadership" className="section bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        {/* Portrait / identity card */}
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gold/10 blur-lg"
            />
            <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gold-gradient font-heading text-3xl font-extrabold text-white ring-4 ring-white/10">
                {initials}
              </div>
              <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                {LEADER.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-gold-light">
                {LEADER.role}
              </p>
              <p className="mt-1 text-xs text-white/50">{LEADER.postnominals}</p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {LEADER.credentials.map((c) => (
                  <span
                    key={c.short}
                    title={c.full}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/90"
                  >
                    {c.short}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bio + credentials */}
        <div>
          {showHeading && (
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold" />
                Leadership
              </span>
              <h2 className="mt-5 text-3xl font-extrabold text-navy sm:text-4xl">
                Two decades of executive judgement, on your side of the table.
              </h2>
            </Reveal>
          )}

          {LEADER.bio.map((para, i) => (
            <Reveal key={i} delay={0.05 * (i + 1)}>
              <p className="mt-4 leading-relaxed text-slate-brand">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={0.2}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {LEADER.credentials.map((c) => (
                <li
                  key={c.short}
                  className="flex items-start gap-3 rounded-xl border border-navy/10 bg-mist px-4 py-3"
                >
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-sm text-navy">
                    <span className="font-bold">{c.short}</span>
                    <span className="block text-xs text-slate-brand/70">
                      {c.full}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <blockquote className="mt-8 flex gap-4 rounded-2xl border-l-4 border-gold bg-mist p-6">
              <Quote className="h-6 w-6 shrink-0 text-gold/50" aria-hidden />
              <p className="text-lg font-medium italic text-navy">
                “Good finance leadership isn’t about reporting the past — it’s
                about shaping decisions that build a stronger future.”
              </p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
