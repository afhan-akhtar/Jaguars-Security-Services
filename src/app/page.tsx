import Link from "next/link";
import { ArrowRight, Shield, Eye, Radio, CheckCircle } from "lucide-react";
import { companyInfo, serviceCategories, heroServices } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";
import CTABlock from "@/components/CTABlock";

const whyChooseUs = [
  {
    icon: Shield,
    title: "Professional Team",
    description:
      "Highly trained, SIA-licensed security officers delivering visible, reliable protection.",
  },
  {
    icon: Eye,
    title: "24/7 Coverage",
    description:
      "Round-the-clock manned guarding, patrols and alarm response across Greater Manchester.",
  },
  {
    icon: Radio,
    title: "One-Stop Solution",
    description:
      "Security, facilities support and cleaning under one trusted provider.",
  },
  {
    icon: CheckCircle,
    title: "Flexible Service",
    description:
      "Tailored packages for commercial, healthcare, education and warehouse clients.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] overflow-hidden bg-jaguar-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,160,23,0.15)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,210,0,0.08)_0%,_transparent_50%)]" />

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="animate-fade-up mb-4 text-sm font-bold tracking-[0.3em] text-jaguar-gold">
              {companyInfo.motto}
            </p>
            <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Professional Security Services in{" "}
              <span className="text-gradient-gold">Greater Manchester</span>
            </h1>
            <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {companyInfo.description}
            </p>
            <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-jaguar-gold-bright px-8 py-4 text-sm font-bold tracking-wide text-jaguar-black transition-all hover:bg-jaguar-gold-light"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:border-jaguar-gold-bright hover:text-jaguar-gold-bright"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-2 border-t border-white/10 pt-8">
            {companyInfo.pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-jaguar-gold/30 px-4 py-1.5 text-xs font-bold tracking-widest text-jaguar-gold"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-jaguar-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
              WHAT WE OFFER
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Securing Your Environment
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Choose our premium security services for complete peace of mind.
              Expert protection tailored to your needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-jaguar-dark p-8 transition-all hover:border-jaguar-gold/40"
              >
                <h3 className="text-lg font-bold text-white group-hover:text-jaguar-gold-bright">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-jaguar-gold">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
                OUR SERVICES
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                Complete Protection Solutions
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-jaguar-gold-bright hover:underline"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <ServiceCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-jaguar-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
              WHY CHOOSE US
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-jaguar-black sm:text-4xl">
              Your Trusted Security Partner
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-jaguar-black">
                  <item.icon className="h-7 w-7 text-jaguar-gold-bright" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-jaguar-black">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-jaguar-black/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Blocks */}
      <CTABlock
        variant="gold"
        title="Need Security You Can Trust?"
        description="Get in touch today for a free, no-obligation quote. Our team is ready to protect your premises."
        buttonText="Request a Quote"
        buttonHref="/contact"
      />
      <CTABlock
        variant="dark"
        title="Looking for a One-Stop Solution?"
        description="From manned guarding to cleaning and facilities support — we cover all your operational needs under one roof."
        buttonText="Explore Services"
        buttonHref="/services"
      />
    </>
  );
}
