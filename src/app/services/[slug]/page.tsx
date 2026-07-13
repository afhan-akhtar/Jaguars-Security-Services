import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  getAllServiceSlugs,
  getRelatedServicePages,
  getServicePage,
  companyInfo,
} from "@/lib/services";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) notFound();

  const relatedServices = getRelatedServicePages(slug);
  const parentCategory =
    service.type === "offering" && service.categorySlug
      ? getServicePage(service.categorySlug)
      : null;
  const descriptionParagraphs = service.description
    .split("\n\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const heroDescription = descriptionParagraphs[0] ?? service.description;

  return (
    <>
      <PageHero
        label="OUR SERVICES"
        title={service.title}
        description={heroDescription}
        image={service.image}
        imagePosition={service.imagePosition}
      >
        <div className="animate-fade-up-delay-3 mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-bold text-jaguar-gold-light hover:text-white"
          >
            &larr; All Services
          </Link>
          {parentCategory && (
            <Link
              href={`/services/${parentCategory.slug}`}
              className="inline-flex items-center gap-1 text-sm font-bold text-white/70 hover:text-jaguar-gold-light"
            >
              View {parentCategory.title}
            </Link>
          )}
        </div>
      </PageHero>

      <section className="section-dark section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              {descriptionParagraphs.length > 1 && (
                <AnimatedSection>
                  <div className="space-y-5 text-lg leading-relaxed text-body">
                    {descriptionParagraphs.slice(1).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              <AnimatedSection className={descriptionParagraphs.length > 1 ? "mt-12" : ""}>
                <SectionHeading
                  label="WHAT WE DELIVER"
                  title="Services We Provide"
                  description={`Comprehensive ${service.title.toLowerCase()} tailored to your site requirements.`}
                />
              </AnimatedSection>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {service.services.map((item, i) => (
                  <AnimatedSection key={item} delay={i * 50}>
                    <div className="elegant-card flex items-start gap-3 p-5">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-jaguar-gold-bright" />
                      <span className="text-sm font-medium text-jaguar-black">
                        {item}
                      </span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection delay={200}>
              <div className="elegant-card sticky top-28 overflow-hidden">
                <div className="relative h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover ${
                      service.imagePosition === "top"
                        ? "object-top"
                        : service.imagePosition === "bottom"
                          ? "object-bottom"
                          : "object-center"
                    }`}
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-jaguar-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-jaguar-black">
                    Request This Service
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">
                    Contact us today for a free consultation and tailored quote
                    for your {service.title.toLowerCase()} requirements.
                  </p>
                  <p className="mt-4 rounded-lg border border-jaguar-gold-bright/20 bg-jaguar-gold-bright/10 px-4 py-3 text-xs leading-relaxed text-body">
                    {companyInfo.quoteGuarantee.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-jaguar-gold-bright px-6 py-3.5 text-sm font-bold text-jaguar-black transition-all hover:bg-jaguar-gold-light gold-glow"
                  >
                    Get a Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-charcoal py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="EXPLORE MORE" title="Other Services" />
          <div className="mt-8 flex flex-wrap gap-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="rounded-full border border-jaguar-black/10 bg-white px-5 py-2.5 text-sm font-medium text-body transition-all hover:border-jaguar-gold-bright hover:text-jaguar-gold-bright"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="gold"
        title="Ready to Secure Your Premises?"
        description="Speak to our team for professional, reliable security services across Greater Manchester."
        buttonText="Contact Us Today"
        buttonHref="/contact"
        image={service.image}
      />
    </>
  );
}
