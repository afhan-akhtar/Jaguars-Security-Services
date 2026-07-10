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
    <section className="section-dark relative min-h-[48vh] overflow-hidden lg:min-h-[52vh]">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
        </>
      )}

      <div className="mesh-gold absolute inset-0" />

      <div
        className={`relative mx-auto flex min-h-[48vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:min-h-[52vh] lg:px-8 ${
          centered ? "items-center text-center" : ""
        }`}
      >
        <p className="label-tag animate-fade-up">{label}</p>
        <h1 className="animate-fade-up-delay-1 mt-5 max-w-4xl font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            {description}
          </p>
        )}
        {children}
        {centered && <div className="gold-line mt-8 w-20" />}
      </div>

      <div className="gold-line absolute bottom-0 left-0 right-0" />
    </section>
  );
}
