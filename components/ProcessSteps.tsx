import { PROCESS } from "@/lib/content";
import Reveal from "./Reveal";

export default function ProcessSteps() {
  return (
    <section id="process" className="section bg-mist">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold" />
            How we engage
          </span>
          <h2 className="mt-5 text-3xl font-extrabold text-navy sm:text-4xl">
            A proven five-step path from insight to impact.
          </h2>
          <p className="mt-4 text-lg text-slate-brand">
            Structured, transparent, and built around implementation — not just
            recommendations.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connecting line (desktop) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-gold/20 via-gold/40 to-gold/20 lg:block"
          />

          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {PROCESS.map((step, i) => (
              <Reveal
                key={step.n}
                as="li"
                delay={i * 0.12}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-white shadow-cta ring-8 ring-mist">
                  <step.icon className="h-6 w-6" aria-hidden />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy text-[11px] font-bold text-white">
                    {step.n}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand/80">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
