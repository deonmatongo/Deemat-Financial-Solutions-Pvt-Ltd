import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY, NAV_LINKS, SERVICES, YEAR } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-onyx-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
        {/* Brand + blurb */}
        <div>
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
            {COMPANY.tagline} Flexible executive finance leadership and business
            advisory for ambitious businesses across Zimbabwe and the region.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-white/70">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-burgundy-light" aria-hidden />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-burgundy-light" aria-hidden />
              <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-white">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-burgundy-light" aria-hidden />
              {COMPANY.location}
            </li>
          </ul>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-white/90">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href="/services"
                  className="text-white/60 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {YEAR} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="max-w-2xl md:text-right">
            Deemat Financial Solutions provides advisory services only and does
            not offer regulated audit, legal, or investment advice. Engagements
            are subject to a formal letter of engagement.
          </p>
        </div>
      </div>
    </footer>
  );
}
