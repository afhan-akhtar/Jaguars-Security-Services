import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { companyInfo, serviceCategories } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="section-charcoal border-t border-jaguar-gold/15">
      <div className="gold-gradient h-0.5" />

      <div className="mesh-gold mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo size="footer" />
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {companyInfo.motto}
            </p>
            <p className="mt-3 text-sm font-semibold text-jaguar-gold-bright">
              {companyInfo.tagline}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-bold tracking-[0.25em] text-jaguar-gold-bright">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-jaguar-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-bold tracking-[0.25em] text-jaguar-gold-bright">
              SERVICES
            </h3>
            <ul className="space-y-2.5">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-jaguar-gold-bright"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-bold tracking-[0.25em] text-jaguar-gold-bright">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-jaguar-gold-bright"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold-bright" />
                  <span>
                    Mobile: {companyInfo.phone}
                    <br />
                    Landline: {companyInfo.landline}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-3 text-sm text-white/60 transition-colors hover:text-jaguar-gold-bright"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold-bright" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold-bright" />
                <span>{companyInfo.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-12" />

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-jaguar-gold-bright sm:justify-start">
            {companyInfo.pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/20">•</span>}
                {pillar}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
