import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Finance Leadership, Business Performance, Governance & Risk, and Finance Transformation — integrated fractional-CFO services for growing businesses.",
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="What we do"
        title="Services built around impact, not headcount."
        subtitle="Engage a single discipline or all four for end-to-end financial leadership — scaled precisely to where your business is today."
        crumbs={[{ label: "Services" }]}
      />
      <ServicesSection showHeading={false} />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
