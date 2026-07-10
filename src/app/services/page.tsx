import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional security, facilities support, cleaning, warehouse, healthcare and education security services in Greater Manchester.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jaguar-charcoal py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.1)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
            WHAT WE OFFER
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            A complete range of security-led facilities and cleaning support
            services for every sector.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <ServiceCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-jaguar-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-white sm:text-3xl">
            What Our Services Include
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/60">
            Every service is delivered by trained professionals with a focus on
            reliability, flexibility and client satisfaction.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {serviceCategories.map((category) => (
              <div
                key={category.slug}
                className="rounded-2xl border border-white/10 bg-jaguar-dark p-8"
              >
                <h3 className="text-lg font-bold text-jaguar-gold-bright">
                  {category.title}
                </h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {category.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-sm text-white/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-jaguar-gold" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${category.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-jaguar-gold hover:text-jaguar-gold-bright"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="gold"
        title="Not Sure Which Service You Need?"
        description="Contact our team and we'll help you find the right security solution for your premises."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
