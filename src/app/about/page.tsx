import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Shield, Target, Users } from "lucide-react";
import { companyInfo, pageImages } from "@/lib/services";
import AnimatedSection from "@/components/AnimatedSection";
import BusinessCard from "@/components/BusinessCard";
import CTABlock from "@/components/CTABlock";
import PageHero from "@/components/PageHero";
import PillarBar from "@/components/PillarBar";
import SectionHeading from "@/components/SectionHeading";

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
      <PageHero
        label="ABOUT US"
        title={companyInfo.name}
        description={companyInfo.tagline}
        image={pageImages.about}
        centered
      />

      <PillarBar />

      <section className="section-dark section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <AnimatedSection>
              <SectionHeading
                label="WHO WE ARE"
                title="Your One-Stop Security Partner"
              />
              <p className="mt-6 leading-relaxed text-body">
                {companyInfo.description}
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-jaguar-gold-bright hover:text-jaguar-black"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <BusinessCard />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-charcoal section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="OUR VALUES"
              title="Built on Trust & Excellence"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="elegant-card card-shine p-8 text-center">
                  <div className="icon-ring-solid mx-auto h-14 w-14">
                    <value.icon className="h-6 w-6 text-jaguar-black" />
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-cormorant)] text-lg font-semibold text-jaguar-black">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="gold"
        title="Work With a Team You Can Trust"
        description="Based in Oldham, serving clients across Greater Manchester and beyond."
        buttonText="Contact Us"
        buttonHref="/contact"
        image={pageImages.about}
      />
    </>
  );
}
