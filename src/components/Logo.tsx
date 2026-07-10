import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "header" | "footer" | "card" | "hero";
}

const config = {
  header: {
    src: "/images/logo.png",
    box: "h-14 w-11 sm:h-16 sm:w-12",
    image: "p-0.5",
    sizes: "48px",
    rounded: "rounded-xl",
  },
  footer: {
    src: "/images/logo.png",
    box: "h-14 w-11 sm:h-16 sm:w-12",
    image: "p-0.5",
    sizes: "48px",
    rounded: "rounded-xl",
  },
  card: {
    src: "/images/logo.png",
    box: "h-52 w-44 sm:h-60 sm:w-48",
    image: "p-5",
    sizes: "192px",
    rounded: "rounded-[2rem]",
  },
  hero: {
    src: "/images/logo.png",
    box: "h-72 w-56 sm:h-80 sm:w-64",
    image: "p-6",
    sizes: "256px",
    rounded: "rounded-[2.5rem]",
  },
};

export default function Logo({ className = "", size = "header" }: LogoProps) {
  const c = config[size];

  return (
    <div
      className={`logo-frame relative shrink-0 ${c.box} ${c.rounded} ${size === "hero" ? "logo-frame-hero" : ""} ${className}`}
    >
      <Image
        src={c.src}
        alt="Jaguar Security Services Ltd"
        fill
        className={`object-contain ${c.image}`}
        sizes={c.sizes}
        priority={size === "header" || size === "hero"}
      />
    </div>
  );
}
