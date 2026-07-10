import Image from "next/image";
import type { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: string;
  description?: string;
  image?: string;
  children?: ReactNode;
  centered?: boolean;
}

export default function PageHero({
  label,
  title,
  description,
  image,
  children,
  centered = false,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[48vh] overflow-hidden lg:min-h-[52vh]">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-page-overlay absolute inset-0" />
          <div className="hero-premium-glow absolute inset-0" />
        </>
      ) : (
        <div className="absolute inset-0 bg-jaguar-charcoal" />
      )}

      <div
        className={`relative mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:min-h-[52vh] lg:px-8 lg:pb-24 lg:pt-40 ${
          centered ? "items-center text-center" : ""
        }`}
      >
        <div className={`max-w-3xl ${centered ? "mx-auto" : ""}`}>
          <p
            className={`hero-eyebrow animate-fade-up ${centered ? "justify-center" : ""}`}
          >
            {label}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-6 font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="animate-fade-up-delay-2 mt-5 text-lg leading-relaxed text-white/75">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>

      <div className="gold-gradient absolute bottom-0 left-0 right-0 h-0.5" />
    </section>
  );
}
