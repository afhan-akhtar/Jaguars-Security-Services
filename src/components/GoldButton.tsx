import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface GoldButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "dark" | "light" | "hero";
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
      "bg-jaguar-gold-bright text-jaguar-black hover:bg-jaguar-gold-light shadow-lg shadow-black/20",
    outline:
      "border-2 border-jaguar-black/25 text-jaguar-black bg-white hover:border-jaguar-gold-bright hover:text-jaguar-gold-bright shadow-sm",
    dark: "bg-jaguar-black text-white border border-jaguar-black hover:bg-jaguar-black/90",
    light:
      "border border-jaguar-gold/40 text-jaguar-gold hover:bg-jaguar-gold-bright hover:text-white",
    hero: "border border-white/40 text-white bg-white/5 backdrop-blur-sm hover:border-jaguar-gold-light hover:bg-jaguar-gold-bright/15 hover:text-jaguar-gold-light",
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
