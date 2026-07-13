"use client";

import { useId } from "react";

interface CompanyWordmarkProps {
  variant?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
}

function BrandLetterA() {
  const gradientId = useId();

  return (
    <span className="brand-wordmark-a-wrap" aria-hidden="true">
      <svg
        viewBox="0 0 20 24"
        className="brand-wordmark-a-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="10" y1="12" x2="10" y2="22" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#e8b923" />
            <stop offset="55%" stopColor="#c9a227" />
            <stop offset="100%" stopColor="#b8941f" />
          </linearGradient>
        </defs>
        <path
          d="M2.2 21.8 L10 2.4 L17.8 21.8"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7.4 18.2 L10 12.8 L12.6 18.2 Z" fill={`url(#${gradientId})`} />
      </svg>
    </span>
  );
}

export default function CompanyWordmark({
  variant = "dark",
  size = "md",
  className = "",
}: CompanyWordmarkProps) {
  const isLight = variant === "light";
  const titleSize = size === "sm" ? "brand-wordmark-title-sm" : "brand-wordmark-title-md";
  const subtitleSize =
    size === "sm" ? "brand-wordmark-subtitle-sm" : "brand-wordmark-subtitle-md";

  return (
    <div className={`brand-wordmark ${className}`} aria-label="Jaguar Security Services Ltd">
      <div
        className={`brand-wordmark-title ${titleSize} ${
          isLight ? "brand-wordmark-title-light" : "brand-wordmark-title-dark"
        }`}
      >
        <span>J</span>
        <BrandLetterA />
        <span>G</span>
        <span>U</span>
        <BrandLetterA />
        <span>R</span>
      </div>
      <div className="brand-wordmark-divider" />
      <p
        className={`brand-wordmark-subtitle ${subtitleSize} ${
          isLight ? "text-jaguar-gold-light" : "text-jaguar-gold-bright"
        }`}
      >
        Security Services Ltd
      </p>
    </div>
  );
}
