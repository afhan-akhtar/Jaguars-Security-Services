import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, Phone } from "lucide-react";
import { companyInfo } from "@/lib/services";

export default function BusinessCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-jaguar-black/10 shadow-2xl">
      {/* Brand header */}
      <div className="relative bg-jaguar-ink px-6 py-8 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,185,35,0.12)_0%,transparent_60%)]" />
        <div className="relative flex items-center gap-5">
          <div className="relative h-20 w-20 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Jaguar Security Services"
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
          <div>
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold tracking-wide text-white">
              JAGUAR
            </p>
            <p className="text-[0.65rem] font-bold tracking-[0.28em] text-jaguar-gold-light">
              SECURITY SERVICES LTD
            </p>
          </div>
        </div>
      </div>

      {/* Gold accent bar */}
      <div className="gold-gradient h-1" />

      {/* Contact details */}
      <div className="bg-white px-6 py-7 sm:px-8">
        <p className="label-tag">Contact Us</p>
        <ul className="mt-5 space-y-4">
          <li>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="group flex items-start gap-3 text-sm text-jaguar-black transition-colors hover:text-jaguar-gold-bright"
            >
              <span className="icon-ring-solid mt-0.5 h-9 w-9 shrink-0">
                <Phone className="h-4 w-4 text-jaguar-black" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-widest text-muted uppercase">
                  Mobile
                </span>
                <span className="font-semibold">{companyInfo.phone}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${companyInfo.landline.replace(/\s/g, "")}`}
              className="group flex items-start gap-3 text-sm text-jaguar-black transition-colors hover:text-jaguar-gold-bright"
            >
              <span className="icon-ring-solid mt-0.5 h-9 w-9 shrink-0">
                <Phone className="h-4 w-4 text-jaguar-black" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-widest text-muted uppercase">
                  Landline
                </span>
                <span className="font-semibold">{companyInfo.landline}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex items-start gap-3 text-sm text-jaguar-black transition-colors hover:text-jaguar-gold-bright"
            >
              <span className="icon-ring-solid mt-0.5 h-9 w-9 shrink-0">
                <Mail className="h-4 w-4 text-jaguar-black" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-widest text-muted uppercase">
                  Email
                </span>
                <span className="font-semibold break-all">{companyInfo.email}</span>
              </span>
            </a>
          </li>
          <li>
            <a
              href={companyInfo.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 text-sm text-jaguar-black transition-colors hover:text-jaguar-gold-bright"
            >
              <span className="icon-ring-solid mt-0.5 h-9 w-9 shrink-0">
                <Globe className="h-4 w-4 text-jaguar-black" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-widest text-muted uppercase">
                  Website
                </span>
                <span className="font-semibold">jaguarsecurityservices.co.uk</span>
              </span>
            </a>
          </li>
        </ul>
        <p className="mt-5 text-xs leading-relaxed text-muted">
          {companyInfo.address.full}
        </p>
      </div>

      {/* Pillars strip */}
      <div className="border-t border-jaguar-gold/20 bg-jaguar-ink px-4 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {companyInfo.pillars.map((pillar, i) => (
            <span
              key={pillar}
              className="flex items-center gap-2 text-[0.6rem] font-bold tracking-[0.2em] text-jaguar-gold-light sm:text-xs"
            >
              {i > 0 && <span className="text-white/25">|</span>}
              {pillar}
            </span>
          ))}
        </div>
        <p className="mt-3 text-center text-[0.65rem] font-bold tracking-[0.25em] text-jaguar-gold-light uppercase">
          {companyInfo.motto}
        </p>
        <p className="mt-1 text-center text-[0.6rem] font-semibold tracking-[0.2em] text-white/60 uppercase">
          {companyInfo.tagline}
        </p>
      </div>
    </div>
  );
}
