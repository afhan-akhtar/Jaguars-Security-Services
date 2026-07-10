import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { companyInfo } from "@/lib/services";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${companyInfo.name} for a free security quote. Call ${companyInfo.phone} or email ${companyInfo.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jaguar-charcoal py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,160,23,0.1)_0%,_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">
            GET IN TOUCH
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Ready to discuss your security requirements? Fill in the form below
            or reach us directly.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white">
                Contact Details
              </h2>
              <p className="mt-3 text-white/60">
                We&apos;re here to help with all your security and facilities
                needs.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-jaguar-charcoal p-5 transition-colors hover:border-jaguar-gold/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-jaguar-gold/10">
                    <Phone className="h-5 w-5 text-jaguar-gold-bright" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50">Mobile</p>
                    <p className="mt-1 font-semibold text-white">
                      {companyInfo.phone}
                    </p>
                    <p className="mt-2 text-sm text-white/50">
                      Landline: {companyInfo.landline}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-jaguar-charcoal p-5 transition-colors hover:border-jaguar-gold/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-jaguar-gold/10">
                    <Mail className="h-5 w-5 text-jaguar-gold-bright" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50">Email</p>
                    <p className="mt-1 font-semibold text-white">
                      {companyInfo.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-jaguar-charcoal p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-jaguar-gold/10">
                    <MapPin className="h-5 w-5 text-jaguar-gold-bright" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50">Address</p>
                    <p className="mt-1 font-semibold text-white">
                      {companyInfo.address.line1}
                      <br />
                      {companyInfo.address.line2}
                      <br />
                      {companyInfo.address.postcode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-jaguar-charcoal p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-jaguar-gold/10">
                    <Clock className="h-5 w-5 text-jaguar-gold-bright" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/50">
                      Availability
                    </p>
                    <p className="mt-1 font-semibold text-white">
                      24/7 Emergency Response
                    </p>
                    <p className="mt-1 text-sm text-white/50">
                      Office enquiries: Mon – Fri, 9am – 5pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-white/10 bg-jaguar-charcoal p-8 sm:p-10">
                <h2 className="text-2xl font-bold text-white">
                  Send Us an Enquiry
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  Fill in the form and we&apos;ll get back to you as soon as
                  possible.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
