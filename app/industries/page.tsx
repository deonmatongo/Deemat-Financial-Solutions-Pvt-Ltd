import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import IndustrySolutions from "@/components/IndustrySolutions";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Industries | Financial Advisory for Security & Manufacturing Zimbabwe",
  description:
    "Specialist financial advisory for security services and manufacturing companies in Zimbabwe. Deemat Financial Solutions brings deep sector knowledge to financial assistance, cost control, and governance in Harare and beyond.",
  alternates: { canonical: "https://www.deemat.co.zw/industries" },
  keywords: [
    "financial advisory security services Zimbabwe",
    "manufacturing finance consulting Zimbabwe",
    "security company CFO Zimbabwe",
    "financial assistance manufacturing Zimbabwe",
    "cash in transit finance Zimbabwe",
    "finance consultant Harare industry",
  ],
};

export default function IndustriesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Where we go deep"
        title="Sector expertise that speaks your operational language."
        subtitle="Two decades on the ground in operationally complex industries — so the advice is grounded in how the business actually runs."
        crumbs={[{ label: "Industries" }]}
      />
      <IndustrySolutions showHeading={false} />
      <CTASection />
    </main>
  );
}
