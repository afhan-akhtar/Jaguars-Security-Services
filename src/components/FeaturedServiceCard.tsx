import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function FeaturedServiceCard({
  title,
  description,
  image,
  href,
}: FeaturedServiceCardProps) {
  return (
    <Link href={href} className="elegant-card card-shine group block">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jaguar-black/70 via-jaguar-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-lg font-semibold text-white group-hover:text-jaguar-gold-light">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6 pt-4">
        <p className="text-sm leading-relaxed text-jaguar-black/60">{description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-jaguar-gold-bright uppercase">
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
