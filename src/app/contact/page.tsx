import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo, pageImages } from "@/lib/services";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import PillarBar from "@/components/PillarBar";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${companyInfo.name} for a free security quote. Call ${companyInfo.phone} or email ${companyInfo.email}.`,
};

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    content: (
      <>
        <p>Mobile: {companyInfo.phone}</p>
        <p className="mt-1 text-jaguar-black/50">
          Landline: {companyInfo.landline}
        </p>
      </>
    ),
    href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    content: <p>{companyInfo.email}</p>,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    content: (
      <>
        <p>{companyInfo.address.line1}</p>
        <p>{companyInfo.address.line2}</p>
        <p>{companyInfo.address.postcode}</p>
      </>
    ),
  },
  {
    icon: Clock,
    label: "Availability",
    content: (
      <>
        <p>24/7 Emergency Response</p>
        <p className="mt-1 text-jaguar-black/50">
          Office enquiries: Mon – Fri, 9am – 5pm
        </p>
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="GET IN TOUCH"
        title="Contact Us"
        description="Ready to discuss your security requirements? Fill in the form below or reach us directly."
        image={pageImages.contact}
        centered
      />

      <PillarBar />

      <section className="section-dark mesh-gold py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-jaguar-black">
                  Contact Details
                </h2>
                <p className="mt-3 text-jaguar-black/65">
                  We&apos;re here to help with all your security and facilities
                  needs.
                </p>
              </AnimatedSection>

              <div className="mt-10 space-y-5">
                {contactItems.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <AnimatedSection key={item.label} delay={i * 100}>
                      <Wrapper
                        {...(item.href ? { href: item.href } : {})}
                        className="card-dark flex items-start gap-4 rounded-xl p-5"
                      >
                        <div className="icon-ring h-12 w-12 shrink-0">
                          <item.icon className="h-5 w-5 text-jaguar-gold-bright" />
                        </div>
                        <div>
                          <p className="text-xs font-bold tracking-[0.2em] text-jaguar-gold-bright">
                            {item.label}
                          </p>
                          <div className="mt-2 text-sm font-medium text-jaguar-black">
                            {item.content}
                          </div>
                        </div>
                      </Wrapper>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>

            <AnimatedSection delay={200} className="lg:col-span-3">
              <div className="rounded-2xl glass-card p-8 sm:p-10">
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-jaguar-black">
                  Send Us an Enquiry
                </h2>
                <p className="mt-2 text-sm text-jaguar-black/50">
                  Fill in the form and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
