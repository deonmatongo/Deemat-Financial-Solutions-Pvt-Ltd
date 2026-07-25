import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Get Financial Assistance in Zimbabwe",
  description:
    "Contact Deemat Financial Solutions in Harare for confidential financial assistance, fractional CFO services, or financial advisory. Serving businesses across Zimbabwe.",
  alternates: { canonical: "https://www.deemat.co.zw/contact" },
  keywords: [
    "contact financial advisor Zimbabwe",
    "financial help Zimbabwe",
    "get financial assistance Zimbabwe",
    "hire CFO Zimbabwe",
    "financial advisor Harare contact",
  ],
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Let’s talk"
        title="Schedule a confidential consultation."
        subtitle="Tell us where the business is headed and where finance is holding it back. We’ll respond within one business day."
        crumbs={[{ label: "Contact" }]}
      />
      <ContactSection showHeading={false} />
    </main>
  );
}
