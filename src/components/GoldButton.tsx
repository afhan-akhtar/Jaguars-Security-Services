import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface GoldButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "light";
  className?: string;
}

export default function GoldButton({
  href,
  children,
  variant = "primary",
  className = "",
}: GoldButtonProps) {
  const styles = {
    primary:
      "bg-jaguar-gold-bright text-jaguar-black hover:bg-jaguar-gold-light shadow-lg shadow-jaguar-gold-bright/20",
    outline:
      "border border-white/25 text-white hover:border-jaguar-gold-bright hover:text-jaguar-gold-bright bg-transparent",
    dark: "bg-jaguar-charcoal text-jaguar-gold-bright border border-jaguar-gold/20 hover:border-jaguar-gold-bright",
    light:
      "border border-white/50 text-white hover:bg-white hover:text-jaguar-black",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  );
}
