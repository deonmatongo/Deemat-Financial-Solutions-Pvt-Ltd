import Image from "next/image";
import { Mail } from "lucide-react";
import logoFull from "@/public/deemat-logo-full.jpg";
import { COMPANY } from "@/lib/content";

export const metadata = {
  title: "Under Construction — Deemat Financial Solutions",
  robots: { index: false, follow: false },
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Maintenance() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-[#0B1526] px-6 text-white overflow-hidden">
      {/* Subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(196,154,42,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
        {/* Logo */}
        <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 mb-10">
          <Image
            src={logoFull}
            alt={COMPANY.legalName}
            width={192}
            height={56}
            priority
            className="h-11 w-auto object-contain"
          />
        </span>

        {/* Gold rule */}
        <div className="h-px w-16 bg-[#C49A2A] mb-8" />

        {/* Headline */}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A2A] mb-4">
          Under Construction
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-white text-balance mb-4">
          We're putting the finishing touches on something great.
        </h1>
        <p className="text-white/55 text-sm leading-relaxed max-w-sm">
          Our new site will be live shortly. In the meantime, reach out directly — we're very much open for business.
        </p>

        {/* Gold rule */}
        <div className="h-px w-16 bg-[#C49A2A] my-8" />

        {/* Contact links */}
        <ul className="flex flex-col items-center gap-3 text-sm text-white/70">
          <li>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4 text-[#C49A2A]" aria-hidden />
              {COMPANY.email}
            </a>
          </li>
          <li>
            <a
              href={`https://wa.me/${COMPANY.phoneHref}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-white transition-colors"
            >
              <span className="text-[#C49A2A]"><WhatsAppIcon /></span>
              {COMPANY.phone}
            </a>
          </li>
        </ul>

        <p className="mt-12 text-xs text-white/25">
          © {new Date().getFullYear()} {COMPANY.legalName}
        </p>
      </div>
    </div>
  );
}
