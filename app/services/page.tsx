import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServicesSection from "@/components/ServicesSection";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Financial Advisory Services Zimbabwe | Fractional CFO Harare",
  description:
    "Deemat Financial Solutions offers fractional CFO services, financial advisory, governance & compliance, and finance transformation for businesses in Zimbabwe. Expert financial assistance based in Harare.",
  alternates: { canonical: "https://www.deemat.co.zw/services" },
  keywords: [
    "fractional CFO Zimbabwe",
    "financial advisory services Zimbabwe",
    "CFO services Harare",
    "financial assistance Zimbabwe",
    "finance transformation Zimbabwe",
    "corporate governance Zimbabwe",
    "IFRS reporting Zimbabwe",
    "business financial consulting Harare",
  ],
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
