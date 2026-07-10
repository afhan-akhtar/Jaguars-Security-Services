import Link from "next/link";
import {
  Shield,
  HeartPulse,
  GraduationCap,
  Building2,
  Sparkles,
  Warehouse,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategory } from "@/lib/services";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  "heart-pulse": HeartPulse,
  "graduation-cap": GraduationCap,
  "building-2": Building2,
  sparkles: Sparkles,
  warehouse: Warehouse,
};

interface ServiceCardProps {
  category: ServiceCategory;
}

export default function ServiceCard({ category }: ServiceCardProps) {
  const Icon = iconMap[category.icon] || Shield;

  return (
    <Link
      href={`/services/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-jaguar-charcoal p-8 transition-all duration-300 hover:border-jaguar-gold/50 hover:shadow-lg hover:shadow-jaguar-gold/5"
    >
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-jaguar-gold/30 bg-jaguar-gold/10 transition-colors group-hover:border-jaguar-gold group-hover:bg-jaguar-gold/20">
        <Icon className="h-7 w-7 text-jaguar-gold-bright" />
      </div>

      <h3 className="text-xl font-bold text-white group-hover:text-jaguar-gold-bright">
        {category.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
        {category.shortDescription}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-jaguar-gold">
        View Services
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>

      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-jaguar-gold/5 transition-transform group-hover:scale-150" />
    </Link>
  );
}
