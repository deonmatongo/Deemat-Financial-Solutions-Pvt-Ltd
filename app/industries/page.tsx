import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import IndustrySolutions from "@/components/IndustrySolutions";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Deep financial expertise in Security Services (manned guarding, cash-in-transit, alarm systems) and Manufacturing (product costing, inventory management).",
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
