import { Check, X } from "lucide-react";
import Reveal, { StaggerGroup } from "./Reveal";

const fullTime = [
  "Six-figure salary, bonus and benefits",
  "Long, risky executive recruitment cycle",
  "Fixed overhead regardless of workload",
  "Capacity you may not fully use",
];

const fractional = [
  "Senior expertise scaled to your needs",
  "Engaged in days, not months",
  "Predictable, project-based investment",
  "Board-grade insight, only when you need it",
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold" />
            The Deemat difference
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-navy sm:text-4xl">
            The strategic value of a CFO — sized to your business.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-brand">
            Most growing businesses need senior financial leadership long before
            they can justify a full-time executive salary. Deemat closes that
            gap: seasoned, board-level finance leadership engaged flexibly, so
            you pay for impact — not idle capacity.
          </p>
          <p className="mt-4 leading-relaxed text-slate-brand/80">
            The result is sharper decisions, tighter controls and a finance
            function that actively drives growth rather than merely reporting on
            it.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-5 sm:grid-cols-2">
          <Reveal className="rounded-2xl border border-navy/10 bg-mist p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-brand">
              Full-time CFO
            </h3>
            <ul className="mt-4 space-y-3">
              {fullTime.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-brand/80">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-brand/50" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.08}
            className="relative rounded-2xl border border-gold/30 bg-white p-6 shadow-card"
          >
            <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
              Deemat model
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-gold">
              Fractional CFO
            </h3>
            <ul className="mt-4 space-y-3">
              {fractional.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </StaggerGroup>
      </div>
    </section>
  );
}
