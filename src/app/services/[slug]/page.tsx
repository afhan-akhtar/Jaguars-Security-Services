import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import { serviceCategories } from "@/lib/services";
import CTABlock from "@/components/CTABlock";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);
  if (!category) return { title: "Service Not Found" };

  return {
    title: category.title,
    description: category.description,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = serviceCategories.find((c) => c.slug === slug);

  if (!category) notFound();

  const otherServices = serviceCategories.filter((c) => c.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-jaguar-charcoal py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,160,23,0.12)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-jaguar-gold hover:text-jaguar-gold-bright"
          >
            &larr; All Services
          </Link>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            {category.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/60">
            {category.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white">
                Services We Provide
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {category.services.map((service) => (
                  <div
                    key={service}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-jaguar-charcoal p-5 transition-colors hover:border-jaguar-gold/30"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-jaguar-gold-bright" />
                    <span className="text-sm font-medium text-white/90">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-jaguar-gold/30 bg-jaguar-charcoal p-8">
              <h3 className="text-xl font-bold text-jaguar-gold-bright">
                Request This Service
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                Contact us today for a free consultation and tailored quote for
                your {category.title.toLowerCase()} requirements.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-jaguar-gold-bright px-6 py-3.5 text-sm font-bold text-jaguar-black transition-all hover:bg-jaguar-gold-light"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-jaguar-charcoal py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white">Other Services</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-white/70 transition-all hover:border-jaguar-gold hover:text-jaguar-gold-bright"
              >
                {service.title}
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
      />
    </>
  );
}
