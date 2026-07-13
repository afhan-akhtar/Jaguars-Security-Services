"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import CompanyWordmark from "./CompanyWordmark";
import { companyInfo } from "@/lib/services";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function isNavActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

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
  const atTop = !scrolled;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const navClass =
    "text-white/80 hover:text-jaguar-gold-light after:bg-jaguar-gold-light";

  const navActiveClass = "text-jaguar-gold-light after:w-full";

  const quoteClass =
    "border-white/35 text-white hover:border-jaguar-gold-light hover:bg-white/10";

  const shellClass = atTop
    ? "border-b border-white/10 bg-black/20 py-5 backdrop-blur-md"
    : "border-b border-jaguar-gold/20 bg-jaguar-black/95 py-3 shadow-lg shadow-black/25 backdrop-blur-xl";

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        <div className="gold-gradient h-0.5 opacity-80 transition-opacity duration-500" />
        <div className={`transition-all duration-500 ${shellClass}`}>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              aria-label="Jaguar Security Services home"
              className="flex items-center gap-3 sm:gap-3.5"
            >
              <Logo variant="icon" />
              <CompanyWordmark variant="light" />
            </Link>

            <nav
              className="hidden items-center gap-10 lg:flex"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => {
                const active = isNavActive(link.href, pathname);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative text-xs font-semibold tracking-[0.12em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:transition-all hover:after:w-full ${navClass} ${active ? navActiveClass : "after:w-0"}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
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
              className="rounded-lg p-2 text-white lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet side drawer */}
      <div className="lg:hidden" aria-hidden={!open}>
        <button
          type="button"
          aria-label="Close menu"
          className={`fixed inset-0 z-[60] bg-jaguar-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <aside
          className={`fixed top-0 right-0 z-[70] flex h-full w-[min(320px,88vw)] flex-col bg-jaguar-black shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="gold-gradient h-1" />

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="flex items-center gap-3">
              <Logo variant="icon" />
              <CompanyWordmark variant="light" size="sm" />
            </div>
            <button
              type="button"
              className="rounded-lg p-2 text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col px-5 py-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = isNavActive(link.href, pathname);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-lg px-4 py-3.5 text-base font-semibold tracking-wide transition-colors ${
                      active
                        ? "bg-jaguar-gold-bright/15 text-jaguar-gold-light"
                        : "text-white/80 hover:bg-white/10 hover:text-jaguar-gold-light"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto space-y-3 border-t border-white/10 pt-6">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-full bg-jaguar-gold-bright px-6 py-3.5 text-xs font-bold tracking-widest text-jaguar-black uppercase transition-all hover:bg-jaguar-gold-light"
                onClick={() => setOpen(false)}
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-xs font-bold tracking-wide text-white uppercase transition-all hover:border-jaguar-gold-light hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                {companyInfo.phone}
              </a>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
