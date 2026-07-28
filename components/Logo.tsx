import Image from "next/image";
import { COMPANY } from "@/lib/content";
import logoFull from "@/public/deemat-logo-full.png";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="overflow-hidden rounded-xl">
        <Image
          src={logoFull}
          alt={COMPANY.legalName}
          width={192}
          height={108}
          priority
          className="h-16 w-auto object-contain"
        />
      </span>
    </span>
  );
}
