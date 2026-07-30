import Image from "next/image";
import { COMPANY } from "@/lib/content";
import logoFull from "@/public/deemat-logo-full.jpg";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="inline-flex items-center rounded-xl bg-white px-3 py-1.5">
        <Image
          src={logoFull}
          alt={COMPANY.legalName}
          width={192}
          height={56}
          priority
          className="h-11 w-auto object-contain"
        />
      </span>
    </span>
  );
}
