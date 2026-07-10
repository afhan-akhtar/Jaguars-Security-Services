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
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div
        className={`relative mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-xl ${
          isGold ? "gold-gradient" : "section-premium-dark"
        }`}
      >
        {!isGold && (
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(201,162,39,0.1)_0%,transparent_60%)]" />
        )}

        <div className="relative flex flex-col md:flex-row md:items-stretch">
          <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:p-12">
            {!isGold && (
              <p className="hero-eyebrow mb-4 before:w-8">Take Action</p>
            )}
            <h2
              className={`font-[family-name:var(--font-cormorant)] text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl ${
                isGold ? "text-jaguar-black" : "text-white"
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-4 max-w-xl text-sm leading-relaxed sm:text-base ${
                isGold ? "text-jaguar-black/75" : "text-white/70"
              }`}
            >
              {description}
            </p>
            <Link
              href={buttonHref}
              className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 ${
                isGold
                  ? "bg-jaguar-black text-jaguar-gold-light hover:bg-jaguar-black/90 shadow-lg"
                  : "border border-jaguar-gold-light text-jaguar-gold-light hover:bg-jaguar-gold-light hover:text-jaguar-black"
              }`}
            >
              {buttonText}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {image && (
            <div className="relative h-52 w-full shrink-0 md:h-auto md:w-2/5 md:min-h-[280px] lg:w-[42%]">
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-jaguar-black/30 via-transparent to-transparent md:bg-gradient-to-l md:from-jaguar-black/40" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
