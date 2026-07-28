"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, COMPANY } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const line =
    "block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ease-out";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-navy/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label="Deemat Financial Solutions — home"
            className="relative z-10"
          >
            <Logo variant="light" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative py-1 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gold-light transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              <CalendarCheck className="h-4 w-4" aria-hidden />
              Schedule a Consultation
            </Link>
          </div>

          {/* Animated burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 inline-flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`${line} ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`${line} ${open ? "opacity-0" : "opacity-100"}`} />
            <span
              className={`${line} ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu — blurs the page behind it */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-navy/80 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        aria-hidden={!open}
      >
        {/* Click-away layer */}
        <button
          type="button"
          className="absolute inset-0 -z-10 h-full w-full cursor-default"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
        />

        <nav className="container-x flex flex-1 flex-col justify-center gap-2 pt-20">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`group flex items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              } ${isActive(link.href) ? "text-gold-light" : "text-white"}`}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
            >
              {link.label}
              <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}

          <Link href="/contact" className="btn-primary mt-8 w-full text-base">
            <CalendarCheck className="h-4 w-4" aria-hidden />
            Schedule a Consultation
          </Link>

          <ul className="mt-10 space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold-light" aria-hidden />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold-light" aria-hidden />
              <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold-light" aria-hidden />
              {COMPANY.location}
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
