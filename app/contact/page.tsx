import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a confidential consultation with Deemat Financial Solutions. Based in Harare, Zimbabwe.",
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
