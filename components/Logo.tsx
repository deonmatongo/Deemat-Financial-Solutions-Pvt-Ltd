import Image from "next/image";
import { COMPANY } from "@/lib/content";
import logoFull from "@/public/deemat-logo-full.png";

type LogoProps = {
  /** "light" for navy/dark backgrounds (logo seated in white pill), "dark" for light backgrounds. */
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const onDark = variant === "light";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded-xl ${
          onDark ? "bg-white px-3 py-1.5 shadow-sm ring-1 ring-white/10" : ""
        }`}
      >
        <Image
          src={logoFull}
          alt={COMPANY.legalName}
          width={148}
          height={52}
          priority
          className="h-auto w-[148px] object-contain"
        />
      </span>
    </span>
  );
}
