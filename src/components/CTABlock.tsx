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
          ? "gold-gradient"
          : "section-premium-dark"
      }`}
    >
      {!isGold && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,162,39,0.1)_0%,transparent_60%)]" />
      )}

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-20 sm:px-6 md:flex-row lg:px-8 lg:py-24">
        <div className="flex-1">
          {!isGold && (
            <p className="hero-eyebrow mb-5 before:w-8">Take Action</p>
          )}
          <h2
            className={`font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.85rem] ${
              isGold ? "text-jaguar-black" : "text-white"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
              isGold ? "text-jaguar-black/75" : "text-white/70"
            }`}
          >
            {description}
          </p>
          <Link
            href={buttonHref}
            className={`mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
              isGold
                ? "bg-jaguar-black text-jaguar-gold-light hover:bg-jaguar-black/90 shadow-xl"
                : "border border-jaguar-gold-light text-jaguar-gold-light hover:bg-jaguar-gold-light hover:text-jaguar-black"
            }`}
          >
            {buttonText}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {image && (
          <div className="relative hidden h-64 w-80 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:block lg:h-72 lg:w-96">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover"
              sizes="384px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jaguar-black/50 to-transparent" />
          </div>
        )}
      </div>
    </section>
  );
}
