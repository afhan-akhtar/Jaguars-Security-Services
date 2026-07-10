"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { companyInfo } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="gold-gradient h-px" />
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-white/8 bg-jaguar-black/95 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "border-b border-transparent bg-jaguar-black/70 py-4 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" aria-label="Jaguar Security Services home">
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-10 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs font-semibold tracking-[0.12em] text-white/65 uppercase transition-colors hover:text-jaguar-gold-bright after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-jaguar-gold-bright after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full border border-jaguar-gold/30 px-5 py-2.5 text-xs font-bold tracking-widest text-jaguar-gold-bright uppercase transition-all hover:border-jaguar-gold-bright hover:bg-jaguar-gold-bright/10"
            >
              Get a Quote
            </Link>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 rounded-full bg-jaguar-gold-bright px-5 py-2.5 text-xs font-bold tracking-wide text-jaguar-black transition-all hover:bg-jaguar-gold-light"
            >
              <Phone className="h-3.5 w-3.5" />
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

        <div
          className={`overflow-hidden border-t border-white/8 bg-jaguar-charcoal transition-all duration-300 lg:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
          }`}
        >
          <nav className="px-4 py-6" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-white/85 hover:text-jaguar-gold-bright"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit rounded-full bg-jaguar-gold-bright px-6 py-3 text-xs font-bold tracking-widest text-jaguar-black uppercase"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
