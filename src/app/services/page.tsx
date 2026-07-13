import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageImages, serviceCategories, serviceOfferings } from "@/lib/services";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";
import FeaturedServiceCard from "@/components/FeaturedServiceCard";
import PageHero from "@/components/PageHero";
import PillarBar from "@/components/PillarBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional security, facilities support, cleaning, warehouse, healthcare and education security services in Greater Manchester.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="WHAT WE OFFER"
        title="Our Services"
        description="A complete range of security-led facilities and cleaning support services for every sector."
        image={pageImages.services}
        centered
      />

      <PillarBar />

      <section className="section-charcoal section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="CORE SERVICES"
              title="Specialist Security Solutions"
              description="Dedicated services delivered by trained professionals — including key holding, manned guarding, mobile patrols and CCTV monitoring."
              centered
            />
          </AnimatedSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceOfferings.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 80}>
                <FeaturedServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  imagePosition={service.imagePosition}
                  href={`/services/${service.slug}`}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="SERVICE CATEGORIES"
              title="Protection for Every Sector"
              description="From manned guarding to specialist healthcare and education security — we deliver tailored solutions across Greater Manchester."
              centered
            />
          </AnimatedSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, i) => (
              <AnimatedSection key={category.slug} delay={i * 80}>
                <ServiceCard category={category} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-charcoal section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="FULL SERVICE LIST"
              title="What Our Services Include"
              description="Every service is delivered by trained professionals with a focus on reliability, flexibility and client satisfaction."
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {serviceCategories.map((category, i) => (
              <AnimatedSection key={category.slug} delay={i * 80}>
                <div className="elegant-card p-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-jaguar-gold-bright">
                    {category.title}
                  </h3>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {category.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-2.5 text-sm text-body"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-jaguar-gold-bright" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${category.slug}`}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-jaguar-gold-bright hover:text-jaguar-black"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="dark"
        title="Not Sure Which Service You Need?"
        description="Contact our team and we'll help you find the right security solution for your premises."
        buttonText="Get in Touch"
        buttonHref="/contact"
        image={pageImages.contact}
      />
    </>
  );
}
