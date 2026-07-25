import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About | Financial Consulting Firm Zimbabwe",
  description:
    "Deemat Financial Solutions is Zimbabwe's specialist financial advisory and fractional CFO firm. 20+ years of executive finance leadership across listed companies, manufacturing, and security services in Zimbabwe.",
  alternates: { canonical: "https://www.deemat.co.zw/about" },
  keywords: [
    "financial consulting firm Zimbabwe",
    "financial advisory firm Harare",
    "Zimbabwe finance consultants",
    "business financial assistance Zimbabwe",
  ],
};

export default function AboutPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Who we are"
        title="About Deemat Financial Solutions."
        subtitle="Flexible executive finance leadership and business advisory for ambitious businesses — backed by 20+ years across listed companies, manufacturing and security services."
        crumbs={[{ label: "About" }]}
      />
      <About />
      <StatsBar />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
