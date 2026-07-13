import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ImagePosition } from "@/lib/services";

interface FeaturedServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  imagePosition?: ImagePosition;
}

function imagePositionClass(position?: FeaturedServiceCardProps["imagePosition"]) {
  if (position === "top") return "object-top";
  if (position === "bottom") return "object-bottom";
  return "object-center";
}

export default function FeaturedServiceCard({
  title,
  description,
  image,
  href,
  imagePosition,
}: FeaturedServiceCardProps) {
  return (
    <Link href={href} className="elegant-card card-shine group block">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover ${imagePositionClass(imagePosition)} transition-transform duration-700 group-hover:scale-110`}
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-jaguar-black/80 via-jaguar-black/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-semibold text-white group-hover:text-jaguar-gold-light">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm leading-relaxed text-body">{description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-widest text-jaguar-gold-bright uppercase">
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}
