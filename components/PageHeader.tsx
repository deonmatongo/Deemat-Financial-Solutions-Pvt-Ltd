import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
};

/**
 * Compact dark hero band used at the top of every interior page. Provides the
 * fixed navbar a dark backing so its transparent-to-solid scroll behaviour is
 * consistent site-wide.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient pt-32 pb-16 md:pt-40 md:pb-20">
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
        className="pointer-events-none absolute -right-24 -top-10 h-[420px] w-[420px] rounded-full bg-gold/25 blur-[120px]"
      />

      <div className="container-x relative">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs text-white/50">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3 w-3" aria-hidden />
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <span className="eyebrow text-gold-light">
          <span className="h-px w-6 bg-gold-light" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
