import Image from "next/image";
import { COMPANY } from "@/lib/content";
import mark from "@/public/deemat-mark.png";

type LogoProps = {
  /** "light" for dark backgrounds (white text + white icon tile), "dark" for light backgrounds. */
  variant?: "light" | "dark";
  showText?: boolean;
  className?: string;
};

/**
 * Deemat brand lockup — the official "DD" monogram mark paired with the
 * wordmark. On dark backgrounds the (predominantly black) mark is seated in a
 * white rounded tile — its native backing — so brand colours stay accurate.
 */
export default function Logo({
  variant = "dark",
  showText = true,
  className = "",
}: LogoProps) {
  const onDark = variant === "light";
  const primaryText = onDark ? "text-white" : "text-onyx";
  const subText = onDark ? "text-white/55" : "text-slate-brand";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl ${
          onDark ? "bg-white shadow-sm ring-1 ring-white/10" : "bg-transparent"
        }`}
      >
        <Image
          src={mark}
          alt={`${COMPANY.name} logo`}
          width={32}
          height={30}
          priority
          className="h-auto w-8 object-contain"
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-heading text-lg font-extrabold tracking-tight ${primaryText}`}
          >
            Deemat
          </span>
          <span
            className={`mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] ${subText}`}
          >
            Financial Solutions
          </span>
        </span>
      )}
    </span>
  );
}
