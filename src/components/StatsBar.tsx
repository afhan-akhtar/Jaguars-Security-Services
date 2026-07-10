import { companyInfo, stats } from "@/lib/services";
import AnimatedSection from "./AnimatedSection";

export default function StatsBar() {
  return (
    <section className="section-premium-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,162,39,0.08)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection
              key={stat.label}
              delay={i * 80}
              className="px-4 py-14 text-center md:py-16"
            >
              <p className="font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-jaguar-gold-light sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 text-xs font-bold tracking-[0.18em] text-white/55 uppercase">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
        <div className="border-t border-white/10 py-5 text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-jaguar-gold-light/80 uppercase">
            {companyInfo.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
