import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/lib/services";

const contactItems = [
  {
    icon: Phone,
    label: "Mobile",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Phone,
    label: "Landline",
    value: companyInfo.landline,
    href: `tel:${companyInfo.landline.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: "jaguarsecurityservices.co.uk",
    href: companyInfo.website,
    external: true,
  },
];

export default function BusinessCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-jaguar-black/8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
      <div className="flex flex-col sm:flex-row">
        {/* Logo panel — large, no duplicate text */}
        <div className="relative flex min-h-[220px] items-center justify-center bg-jaguar-ink p-8 sm:w-[42%] sm:min-h-[360px]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,185,35,0.12)_0%,transparent_65%)]" />
          <div className="relative h-44 w-44 sm:h-52 sm:w-52">
            <Image
              src="/images/logo.png"
              alt="Jaguar Security Services Ltd"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 176px, 208px"
            />
          </div>
        </div>

        {/* Contact panel */}
        <div className="flex flex-1 flex-col justify-between border-t border-jaguar-gold/20 sm:border-l sm:border-t-0">
          <div className="gold-gradient h-1 sm:hidden" />

          <div className="p-6 sm:p-8">
            <p className="text-[0.65rem] font-bold tracking-[0.3em] text-jaguar-gold uppercase">
              Get In Touch
            </p>

            <ul className="mt-5 space-y-4">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-3 transition-colors hover:text-jaguar-gold-bright"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jaguar-gold-bright/15 text-jaguar-gold-bright transition-colors group-hover:bg-jaguar-gold-bright group-hover:text-jaguar-black">
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.6rem] font-bold tracking-widest text-muted uppercase">
                        {item.label}
                      </span>
                      <span className="block truncate text-sm font-semibold text-jaguar-black group-hover:text-jaguar-gold-bright">
                        {item.value}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-start gap-3 border-t border-jaguar-black/8 pt-5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold-bright" />
              <p className="text-sm leading-relaxed text-body">
                {companyInfo.address.full}
              </p>
            </div>
          </div>

          <div className="border-t border-jaguar-black/8 bg-jaguar-charcoal px-6 py-4">
            <p className="text-center text-xs font-semibold tracking-[0.2em] text-jaguar-gold uppercase">
              {companyInfo.motto}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom pillars strip */}
      <div className="flex flex-wrap items-center justify-center gap-3 border-t border-jaguar-gold/20 bg-jaguar-ink px-4 py-4">
        {companyInfo.pillars.map((pillar) => (
          <span
            key={pillar}
            className="text-[0.62rem] font-bold tracking-[0.18em] text-jaguar-gold-light"
          >
            {pillar}
          </span>
        ))}
        <span className="hidden h-3 w-px bg-white/20 sm:block" />
        <span className="text-[0.62rem] font-semibold tracking-[0.15em] text-white/50 uppercase">
          {companyInfo.tagline}
        </span>
      </div>
    </div>
  );
}
