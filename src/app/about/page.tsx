import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield, Target, Users, Award } from "lucide-react";
import { companyInfo } from "@/lib/services";
import CTABlock from "@/components/CTABlock";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${companyInfo.name} — your trusted security partner in Greater Manchester.`,
};

const values = [
  {
    icon: Shield,
    title: "Protection First",
    description:
      "Every decision we make is guided by the safety and security of your people, property and assets.",
  },
  {
    icon: Target,
    title: "Reliability",
    description:
      "Consistent, dependable service you can count on — day in, day out, without compromise.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description:
      "We listen to your needs and tailor our services to deliver exactly what your site requires.",
  },
  {
    icon: Award,
    title: "Professional Standards",
    description:
      "SIA-licensed officers, rigorous training and a commitment to excellence in every deployment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jaguar-charcoal py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.1)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
            ABOUT US
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            {companyInfo.name}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            {companyInfo.tagline}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white">
                Your One-Stop Security Partner
              </h2>
              <p className="mt-6 leading-relaxed text-white/70">
                {companyInfo.description}
              </p>
              <p className="mt-4 leading-relaxed text-white/70">
                Alongside our core security services, we also offer facilities
                support, reception services, cleaning services, warehouse
                security, healthcare security and education sector security —
                giving you a single, trusted partner for all your operational
                needs.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-jaguar-gold-bright hover:underline"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl border border-jaguar-gold/20 bg-jaguar-charcoal p-10">
              <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
                OUR COMMITMENT
              </p>
              <p className="mt-4 text-2xl font-bold text-white">
                {companyInfo.motto}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {companyInfo.pillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-jaguar-gold/40 px-5 py-2 text-xs font-bold tracking-widest text-jaguar-gold-bright"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-jaguar-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-jaguar-black">
              Our Values
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-jaguar-black">
                  <value.icon className="h-6 w-6 text-jaguar-gold-bright" />
                </div>
                <h3 className="mt-4 font-bold text-jaguar-black">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-jaguar-black/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="dark"
        title="Work With a Team You Can Trust"
        description="Based in Oldham, serving clients across Greater Manchester and beyond."
        buttonText="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
