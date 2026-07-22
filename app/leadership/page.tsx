import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import LeadershipSection from "@/components/LeadershipSection";
import CTASection from "@/components/CTASection";
import { LEADER } from "@/lib/content";

export const metadata: Metadata = {
  title: "Leadership",
  description: `${LEADER.name} (${LEADER.postnominals}), ${LEADER.role} — 20+ years of executive finance leadership across listed companies, manufacturing and security services.`,
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
