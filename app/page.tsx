import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import ServicesPreview from "@/components/ServicesPreview";
import IndustriesPreview from "@/components/IndustriesPreview";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <StatsBar />
      <About />
      <ServicesPreview />
      <IndustriesPreview />
      <CTASection />
    </main>
  );
}
