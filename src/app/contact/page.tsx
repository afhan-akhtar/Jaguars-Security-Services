import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { companyInfo, pageImages } from "@/lib/services";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import PillarBar from "@/components/PillarBar";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${companyInfo.name} for a free security quote. Call ${companyInfo.phone}, ${companyInfo.phone2} or email ${companyInfo.email}.`,
};

const contactItems = [
  {
    icon: Phone,
    label: "Mobile",
    content: (
      <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
        <a
          href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
          className="transition-colors hover:text-jaguar-gold-bright"
        >
          {companyInfo.phone}
        </a>
        <span className="hidden text-muted sm:inline" aria-hidden="true">
          /
        </span>
        <a
          href={`tel:${companyInfo.phone2.replace(/\s/g, "")}`}
          className="transition-colors hover:text-jaguar-gold-bright"
        >
          {companyInfo.phone2}
        </a>
      </div>
    ),
  },
  {
    icon: Phone,
    label: "Landline",
    content: <p>{companyInfo.landline}</p>,
    href: `tel:${companyInfo.landline.replace(/\s/g, "")}`,
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
        <p className="mt-1 text-muted">
          Office enquiries: Mon – Fri, 9am – 5pm
        </p>
      </>
    ),
  },
];

export default function ContactPage() {
  const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

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

      <section className="section-dark section-padding">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection delay={150} className="order-1 lg:order-2">
              <div className="elegant-card p-8 sm:p-10 lg:sticky lg:top-28">
                <SectionHeading
                  label="ENQUIRY FORM"
                  title="Send Us a Message"
                  description="Fill in the form and we'll get back to you as soon as possible."
                />
                <div className="mt-8">
                  <ContactForm accessKey={web3formsAccessKey} />
                </div>
              </div>
            </AnimatedSection>

            <div className="order-2 space-y-10 lg:order-1">
              <AnimatedSection>
                <SectionHeading
                  label="REACH US"
                  title="Contact Details"
                  description="We're here to help with all your security and facilities needs."
                />
              </AnimatedSection>

              <div className="space-y-5">
                {contactItems.map((item, i) => {
                  const Wrapper = item.href ? "a" : "div";
                  return (
                    <AnimatedSection key={item.href ?? item.label} delay={i * 100}>
                      <Wrapper
                        {...(item.href ? { href: item.href } : {})}
                        className="elegant-card flex items-start gap-4 p-5 transition-colors hover:border-jaguar-gold-bright/40"
                      >
                        <div className="icon-ring-solid h-12 w-12 shrink-0">
                          <item.icon className="h-5 w-5 text-jaguar-black" />
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
          </div>
        </div>
      </section>
    </>
  );
}
