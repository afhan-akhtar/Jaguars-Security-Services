import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CTABlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  variant: "gold" | "dark";
  image?: string;
}

export default function CTABlock({
  title,
  description,
  buttonText,
  buttonHref,
  variant,
  image,
}: CTABlockProps) {
  const isGold = variant === "gold";

  return (
    <section
      className={`relative overflow-hidden ${
        isGold
          ? "bg-gradient-to-r from-jaguar-gold via-jaguar-gold-bright to-jaguar-gold-light"
          : "section-slate mesh-gold border-t border-white/5"
      }`}
    >
      {!isGold && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(232,185,35,0.06)_0%,transparent_55%)]" />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 md:flex-row lg:px-8">
        <div className="flex-1">
          {!isGold && <p className="label-tag mb-4">Get Started</p>}
          <h2
            className={`font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
              isGold ? "text-jaguar-black" : "text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
              isGold ? "text-jaguar-black/75" : "text-white/60"
            }`}
          >
            {description}
          </p>
          <Link
            href={buttonHref}
            className={`mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
              isGold
                ? "bg-jaguar-black text-jaguar-gold-bright hover:bg-jaguar-charcoal"
                : "border border-jaguar-gold-bright text-jaguar-gold-bright hover:bg-jaguar-gold-bright hover:text-jaguar-black"
            }`}
          >
            {buttonText}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {image && (
          <div className="relative hidden h-60 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block lg:h-64 lg:w-96">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="384px"
            />
            <div
              className={`absolute inset-0 ${
                isGold
                  ? "bg-gradient-to-t from-jaguar-black/30 to-transparent"
                  : "bg-gradient-to-t from-jaguar-black/70 to-transparent"
              }`}
            />
          </div>
        )}
      </div>
    </section>
  );
}
