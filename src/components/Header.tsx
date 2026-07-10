"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { companyInfo } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function getScrollSnapshot() {
  return window.scrollY > 20;
}

function getServerScrollSnapshot() {
  return false;
}

function useScrolled() {
  return useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerScrollSnapshot
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();

  const isHome = pathname === "/";
  const overHero = isHome && !scrolled;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navClass = overHero
    ? "text-white/80 hover:text-jaguar-gold-light after:bg-jaguar-gold-light"
    : "text-jaguar-black/65 hover:text-jaguar-gold-bright after:bg-jaguar-gold-bright";

  const quoteClass = overHero
    ? "border-white/35 text-white hover:border-jaguar-gold-light hover:bg-white/10"
    : "border-jaguar-gold/40 text-jaguar-gold hover:border-jaguar-gold-bright hover:bg-jaguar-gold-bright/10";

  const shellClass = scrolled
    ? "border-b border-jaguar-black/8 bg-white/95 py-3 shadow-lg shadow-black/8 backdrop-blur-xl"
    : overHero
      ? "border-b border-white/10 bg-black/20 py-5 backdrop-blur-md"
      : "border-b border-transparent bg-white/85 py-4 backdrop-blur-md";

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`gold-gradient transition-opacity duration-500 ${
          overHero ? "h-0.5 opacity-80" : "h-px opacity-100"
        }`}
      />
      <div className={`transition-all duration-500 ${shellClass}`}>
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
                className={`relative text-xs font-semibold tracking-[0.12em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:transition-all hover:after:w-full ${navClass}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`rounded-full border px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition-all ${quoteClass}`}
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
            className={`rounded-lg p-2 lg:hidden ${overHero ? "text-white" : "text-jaguar-black"}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
            open
              ? "max-h-96 border-jaguar-black/8 bg-white opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <nav className="px-4 py-6" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-jaguar-black/80 hover:text-jaguar-gold-bright"
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
