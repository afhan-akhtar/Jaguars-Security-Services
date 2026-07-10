import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Eye,
  Quote,
  Radio,
  Shield,
} from "lucide-react";
import {
  companyInfo,
  heroImage,
  heroServices,
  pageImages,
  serviceCategories,
  testimonials,
} from "@/lib/services";
import AnimatedSection from "@/components/AnimatedSection";
import CTABlock from "@/components/CTABlock";
import FeaturedServiceCard from "@/components/FeaturedServiceCard";
import GoldButton from "@/components/GoldButton";
import PillarBar from "@/components/PillarBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import StatsBar from "@/components/StatsBar";

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
      <section className="relative min-h-[95vh] overflow-hidden">
        <Image
          src={heroImage}
          alt="Professional security services"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        <div className="hero-premium-overlay absolute inset-0" />
        <div className="hero-premium-glow absolute inset-0" />

        <div className="relative mx-auto flex min-h-[95vh] max-w-7xl items-center px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-20">
            <div className="flex gap-6 sm:gap-8">
              <div className="hero-accent-line hidden sm:block" />
              <div className="max-w-2xl">
                <p className="hero-eyebrow animate-fade-up">
                  {companyInfo.motto}
                </p>
                <h1 className="animate-fade-up-delay-1 mt-7 font-[family-name:var(--font-cormorant)] text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-[4.5rem]">
                  Shaping Your{" "}
                  <span className="text-gradient-gold">Security</span>
                  <br />
                  in Greater Manchester
                </h1>
                <p className="animate-fade-up-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-white/75">
                  Professional manned guarding, facilities support and cleaning
                  — delivered by a trusted local team with 24/7 coverage.
                </p>
                <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap gap-4">
                  <GoldButton href="/contact" variant="primary">
                    Get a Free Quote
                  </GoldButton>
                  <GoldButton href="/services" variant="hero">
                    View All Services
                  </GoldButton>
                </div>
                <div className="animate-fade-up-delay-3 mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-8">
                  {["SIA Licensed", "24/7 Response", "Greater Manchester"].map(
                    (badge) => (
                      <span key={badge} className="hero-trust-badge">
                        <span className="h-1.5 w-1.5 rounded-full bg-jaguar-gold-light" />
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="animate-scale-in hidden justify-center lg:flex">
              <div className="hero-logo-glow animate-float relative h-80 w-80">
                <Image
                  src="/images/logo.png"
                  alt="Jaguar Security Services"
                  fill
                  className="object-contain drop-shadow-2xl"
                  sizes="320px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="gold-gradient absolute bottom-0 left-0 right-0 h-1" />
      </section>

      <PillarBar />
      <StatsBar />

      {/* Featured Services */}
      <section className="section-dark section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="What We Offer"
              title="Securing Your Environment"
              description="Choose our premium security services for complete peace of mind. Expert protection tailored to your needs."
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {heroServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 100}>
                <FeaturedServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  href={service.href}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Categories */}
      <section className="section-charcoal section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionHeading
                label="Our Services"
                title="Complete Protection Solutions"
                description="One trusted partner for security, facilities support, cleaning and sector-specific protection."
              />
              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 text-xs font-bold tracking-widest text-jaguar-gold-bright uppercase hover:text-jaguar-black"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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

      {/* Why Choose Us */}
      <section className="section-dark section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Why Choose Us"
              title="Your Trusted Security Partner"
              description="Reliable, flexible and professional — delivering complete peace of mind across every sector."
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="elegant-card card-shine p-8 text-center">
                  <div className="icon-ring mx-auto h-16 w-16">
                    <item.icon className="h-7 w-7 text-jaguar-gold-bright" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-jaguar-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-jaguar-black/55">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-charcoal section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeading
              label="Client Feedback"
              title="What Clients Say About Us"
              centered
            />
          </AnimatedSection>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, i) => (
              <AnimatedSection key={item.author} delay={i * 120}>
                <div className="elegant-card flex h-full flex-col border-l-2 border-l-jaguar-gold-bright/40 p-8">
                  <Quote className="h-7 w-7 text-jaguar-gold-bright/50" />
                  <p className="mt-5 flex-1 font-[family-name:var(--font-cormorant)] text-lg leading-relaxed text-jaguar-black/75 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-8 border-t border-jaguar-black/8 pt-5">
                    <p className="font-semibold text-jaguar-gold-bright">
                      {item.author}
                    </p>
                    <p className="mt-1 text-xs tracking-wide text-jaguar-black/45">
                      {item.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        variant="gold"
        title="Need Security You Can Trust?"
        description="Get in touch today for a free, no-obligation quote. Our team is ready to protect your premises."
        buttonText="Request a Quote"
        buttonHref="/contact"
        image={pageImages.ctaQuote}
      />
      <CTABlock
        variant="dark"
        title="Looking for a One-Stop Solution?"
        description="From manned guarding to cleaning and facilities support — we cover all your operational needs under one roof."
        buttonText="Explore Services"
        buttonHref="/services"
        image={pageImages.ctaExplore}
      />
    </>
  );
}
