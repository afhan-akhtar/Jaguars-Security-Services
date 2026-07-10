import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Shield,
  Sparkles,
  Warehouse,
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
      className="elegant-card card-shine group flex flex-col"
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jaguar-black/60 via-jaguar-black/15 to-transparent" />
        <div className="absolute bottom-5 left-5 icon-ring h-11 w-11">
          <Icon className="h-5 w-5 text-jaguar-gold-bright" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-lg font-semibold text-jaguar-black transition-colors group-hover:text-jaguar-gold-bright">
          {category.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-jaguar-black/55">
          {category.shortDescription}
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-widest text-jaguar-gold-bright uppercase">
          View Services
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
