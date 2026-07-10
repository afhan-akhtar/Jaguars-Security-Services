import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant: "gold" | "dark";
  secondary?: boolean;
}

export default function CTABlock({
  title,
  description,
  buttonText,
  buttonHref,
  variant,
}: CTABlockProps) {
  const isGold = variant === "gold";

  return (
    <section
      className={`relative overflow-hidden ${
        isGold ? "bg-jaguar-gold-bright" : "bg-jaguar-dark"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 sm:px-6 md:flex-row md:py-20 lg:px-8">
        <div className="flex-1">
          <h2
            className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
              isGold ? "text-jaguar-black" : "text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-4 max-w-xl text-lg ${
              isGold ? "text-jaguar-black/80" : "text-white/70"
            }`}
          >
            {description}
          </p>
          <Link
            href={buttonHref}
            className={`mt-8 inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-sm font-bold tracking-wide transition-all ${
              isGold
                ? "border-jaguar-black text-jaguar-black hover:bg-jaguar-black hover:text-jaguar-gold-bright"
                : "border-white text-white hover:bg-white hover:text-jaguar-black"
            }`}
          >
            {buttonText}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative hidden h-48 w-72 shrink-0 md:block lg:h-56 lg:w-80">
          <div
            className={`absolute inset-0 rounded-2xl ${
              isGold ? "bg-jaguar-black/10" : "bg-jaguar-gold/10"
            }`}
          />
          <div
            className={`absolute -right-4 top-4 h-full w-full rounded-2xl border-2 ${
              isGold ? "border-jaguar-black/20" : "border-jaguar-gold/30"
            } flex items-center justify-center`}
          >
            <span
              className={`text-6xl font-black opacity-20 ${
                isGold ? "text-jaguar-black" : "text-jaguar-gold"
              }`}
            >
              JSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
