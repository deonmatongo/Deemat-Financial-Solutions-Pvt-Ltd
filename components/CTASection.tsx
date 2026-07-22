import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/content";
import Reveal from "./Reveal";

type CTASectionProps = {
  title?: string;
  subtitle?: string;
};

/** Reusable closing call-to-action band shown near the foot of most pages. */
export default function CTASection({
  title = "Ready to strengthen your finance function?",
  subtitle = "Book a confidential, no-obligation consultation. We’ll listen first, then show you exactly where fractional finance leadership can move the needle.",
}: CTASectionProps) {
  return (
    <section className="bg-burgundy-gradient">
      <div className="container-x py-16 md:py-20">
        <Reveal className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-white/80">{subtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Link
              href="/contact"
              className="btn bg-white text-burgundy hover:bg-white/90 hover:-translate-y-0.5"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="btn border border-white/40 text-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {COMPANY.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
