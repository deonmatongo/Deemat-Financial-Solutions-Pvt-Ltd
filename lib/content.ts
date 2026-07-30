import {
  Briefcase,
  LineChart,
  ShieldCheck,
  Cpu,
  Users,
  Target,
  Lightbulb,
  Settings,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "Deemat Financial Solutions",
  legalName: "Deemat Financial Solutions (Pvt) Ltd",
  short: "Deemat",
  tagline: "Strategic Finance. Sustainable Growth.",
  valueProp:
    "Flexible executive finance leadership and business advisory — without the cost of maintaining a full-time senior finance executive. Backed by 20+ years of executive experience across listed companies, manufacturing, and security services.",
  location: "Harare, Zimbabwe",
  email: "naboth@deemat.co.zw",
  phone: "+263 773 436 295",
  phoneHref: "+263773436295",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Approach", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Contact", href: "/contact" },
];

export type Stat = { value: string; suffix?: string; label: string };
export const STATS: Stat[] = [
  { value: "20", suffix: "+", label: "Years Executive Experience" },
  { value: "Listed", label: "Company Leadership" },
  { value: "2", label: "Deep Industry Verticals" },
  { value: "Fractional", label: "CFO Solutions" },
];

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  items: string[];
};

export const SERVICES: Service[] = [
  {
    id: "leadership",
    icon: Briefcase,
    title: "Finance Leadership Services",
    summary:
      "Senior finance leadership on demand — strategic direction at a fraction of the full-time cost.",
    items: [
      "Fractional CFO",
      "Strategic Financial Leadership",
      "Budgeting & Forecasting",
      "Mentoring & Team Development",
    ],
  },
  {
    id: "performance",
    icon: LineChart,
    title: "Business Performance Solutions",
    summary:
      "Turn financial data into decisions that protect margin and unlock profitable growth.",
    items: [
      "Cost Optimization",
      "Financial Health Checks",
      "Profitability Analysis",
      "Financial Modeling",
    ],
  },
  {
    id: "governance",
    icon: ShieldCheck,
    title: "Governance, Risk & Compliance",
    summary:
      "Board-grade governance and controls that build trust with regulators, lenders and investors.",
    items: [
      "Corporate Governance",
      "Internal Controls",
      "IFRS Reporting",
      "Audit Readiness",
    ],
  },
  {
    id: "transformation",
    icon: Cpu,
    title: "Finance Transformation",
    summary:
      "Modernize the finance function with systems and automation that scale with the business.",
    items: [
      "ERP Implementation",
      "Systems Enhancement",
      "Process Automation",
      "Chart of Accounts Redesign",
    ],
  },
];

export type Industry = {
  id: string;
  title: string;
  blurb: string;
  capabilities: string[];
};

export const INDUSTRIES: Industry[] = [
  {
    id: "security",
    title: "Security Services",
    blurb:
      "Specialised financial insight for high-volume, cost-sensitive security operations.",
    capabilities: [
      "Manned guarding cost modelling",
      "Cash-in-transit route economics",
      "Alarm & monitoring systems billing",
      "Contract profitability analysis",
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    blurb:
      "Rigorous product costing and inventory discipline that protects the bottom line.",
    capabilities: [
      "Product & job costing",
      "Inventory management & valuation",
      "Standard vs. actual variance analysis",
      "Working capital optimization",
    ],
  },
];

export type ProcessStep = {
  n: number;
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const PROCESS: ProcessStep[] = [
  {
    n: 1,
    icon: Users,
    title: "Understand",
    desc: "Immersion in your business, goals, and financial context.",
  },
  {
    n: 2,
    icon: Target,
    title: "Assess",
    desc: "Diagnose gaps, risks and opportunities against the numbers.",
  },
  {
    n: 3,
    icon: Lightbulb,
    title: "Recommend",
    desc: "Practical, prioritised strategy tailored to your objectives.",
  },
  {
    n: 4,
    icon: Settings,
    title: "Implement",
    desc: "Hands-on execution alongside your team, not a report on a shelf.",
  },
  {
    n: 5,
    icon: LifeBuoy,
    title: "Support",
    desc: "Ongoing partnership to sustain and compound the results.",
  },
];

export const LEADER = {
  name: "Naboth Matongo",
  role: "Managing Consultant",
  postnominals: "MBA, ACMA, CGMA, ACG",
  bio: [
    "Naboth Matongo brings more than two decades of executive finance leadership across listed companies, manufacturing and security services — the kind of seasoned judgement that usually sits behind a full-time C-suite salary.",
    "As Managing Consultant, he partners with owner-managed businesses and boards to provide fractional CFO leadership, strengthen governance, and drive measurable financial performance.",
  ],
  credentials: [
    { short: "MBA", full: "MBA — University of Gloucestershire" },
    { short: "ACMA", full: "Associate Chartered Management Accountant (CIMA UK)" },
    { short: "CGMA", full: "Chartered Global Management Accountant" },
    { short: "ACG", full: "Chartered Governance Professional (CGI Zimbabwe)" },
  ],
};

export const YEAR = 2026;
