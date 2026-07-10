"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { companyInfo } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-jaguar-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Jaguar Security Services home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-jaguar-gold-bright"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 rounded-full border border-jaguar-gold/40 px-5 py-2.5 text-sm font-semibold text-jaguar-gold-bright transition-all hover:border-jaguar-gold-bright hover:bg-jaguar-gold-bright/10"
          >
            <Phone className="h-4 w-4" />
            {companyInfo.phone}
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 bg-jaguar-charcoal px-4 py-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white/90 hover:text-jaguar-gold-bright"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="mt-2 flex items-center gap-2 font-semibold text-jaguar-gold-bright"
            >
              <Phone className="h-5 w-5" />
              {companyInfo.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
