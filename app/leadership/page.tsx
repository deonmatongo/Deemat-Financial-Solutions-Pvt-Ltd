import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LeadershipSection from "@/components/LeadershipSection";
import CTASection from "@/components/CTASection";
import { LEADER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership | Naboth Matongo — Zimbabwe Finance Expert",
  description: `${LEADER.name} (${LEADER.postnominals}), Managing Consultant at Deemat Financial Solutions — 20+ years of executive finance leadership in Zimbabwe. Leading provider of fractional CFO and financial assistance services in Harare.`,
  alternates: { canonical: "https://www.deemat.co.zw/leadership" },
  keywords: [
    "Naboth Matongo Zimbabwe",
    "ACMA CGMA Zimbabwe",
    "finance expert Zimbabwe",
    "CFO Zimbabwe",
    "financial advisor Zimbabwe",
    "chartered management accountant Zimbabwe",
    "Harare finance consultant",
  ],
};

export default function LeadershipPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Leadership"
        title="Two decades of executive judgement, on your side of the table."
        subtitle="Meet the senior practitioner who leads every Deemat engagement."
        crumbs={[{ label: "Leadership" }]}
      />
      <LeadershipSection showHeading={false} />
      <CTASection />
    </main>
  );
}
