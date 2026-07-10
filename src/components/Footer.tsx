import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { companyInfo } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-jaguar-charcoal">
      <div className="gold-gradient h-1" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              {companyInfo.motto}
            </p>
            <p className="mt-2 text-sm font-medium text-jaguar-gold">
              {companyInfo.tagline}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-jaguar-gold-bright">
              QUICK LINKS
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Our Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-jaguar-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-jaguar-gold-bright">
              SERVICES
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/services/security", label: "Security Services" },
                { href: "/services/healthcare", label: "Healthcare Security" },
                { href: "/services/education", label: "Education Security" },
                { href: "/services/warehouse", label: "Warehouse Security" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-jaguar-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold tracking-widest text-jaguar-gold-bright">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-jaguar-gold-bright"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold" />
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
                  className="flex items-start gap-3 text-sm text-white/70 transition-colors hover:text-jaguar-gold-bright"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-jaguar-gold" />
                <span>{companyInfo.address.full}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold tracking-widest text-jaguar-gold sm:justify-start">
            {companyInfo.pillars.map((pillar, i) => (
              <span key={pillar} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">|</span>}
                {pillar}
              </span>
            ))}
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
