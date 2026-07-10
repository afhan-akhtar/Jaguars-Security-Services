import { companyInfo, stats } from "@/lib/services";
import AnimatedSection from "./AnimatedSection";

export default function StatsBar() {
  return (
    <section className="section-charcoal border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={i * 80}
              className="px-4 py-12 text-center md:py-14"
            >
              <p className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold text-jaguar-gold-bright sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold tracking-[0.15em] text-white/50 uppercase">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
        <div className="border-t border-white/5 py-4 text-center">
          <p className="text-xs tracking-[0.2em] text-jaguar-gold/70 uppercase">
            {companyInfo.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
