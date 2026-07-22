import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import ProcessSteps from "@/components/ProcessSteps";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Deemat difference: senior finance leadership sized to your business, plus our proven five-step engagement approach.",
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
