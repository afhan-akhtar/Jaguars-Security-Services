import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "header" | "footer" | "card" | "hero";
  variant?: "full" | "icon" | "wordmark";
  placement?: "header" | "footer";
}

const config = {
  header: {
    src: "/images/logo.png",
    box: "h-20 w-16 sm:h-[5.25rem] sm:w-[4.25rem]",
    image: "p-1",
    sizes: "(max-width: 640px) 64px, 72px",
    rounded: "rounded-xl",
  },
  headerIcon: {
    src: "/images/logo-icon.png",
    box: "h-12 w-10 sm:h-14 sm:w-11",
    image: "p-0.5",
    sizes: "56px",
    rounded: "rounded-lg",
  },
  footer: {
    src: "/images/logo.png",
    box: "h-20 w-16 sm:h-[5.25rem] sm:w-[4.25rem]",
    image: "p-1",
    sizes: "(max-width: 640px) 64px, 72px",
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
  wordmark: {
    src: "/images/logo-wordmark-header.png",
    width: 1024,
    height: 523,
    heightClass:
      "h-[4.75rem] w-auto sm:h-[5.75rem] md:h-24 lg:h-28 xl:h-32",
    heightFooter: "h-20 w-auto sm:h-24 md:h-28 lg:h-32",
    sizes: "(max-width: 640px) 200px, (max-width: 1024px) 260px, 320px",
  },
  wordmarkHeader: {
    src: "/images/logo-wordmark-header-trimmed.png",
    width: 888,
    height: 287,
    widthClass: "w-[250px] h-auto",
    sizes: "250px",
  },
};

export default function Logo({
  className = "",
  size = "header",
  variant = "full",
  placement,
}: LogoProps) {
  if (variant === "wordmark") {
    const isHeaderPlacement = placement === "header" || size === "header";
    const wordmark = isHeaderPlacement ? config.wordmarkHeader : config.wordmark;
    const defaultClass = isHeaderPlacement
      ? config.wordmarkHeader.widthClass
      : size === "footer"
        ? config.wordmark.heightFooter
        : config.wordmark.heightClass;

    return (
      <Image
        src={wordmark.src}
        alt="Jaguar Security Services Ltd"
        width={wordmark.width}
        height={wordmark.height}
        unoptimized
        className={`shrink-0 ${className || defaultClass}`}
        sizes={wordmark.sizes}
        priority
      />
    );
  }

  const c = variant === "icon" ? config.headerIcon : config[size];

  if (variant === "icon") {
    return (
      <Image
        src={c.src}
        alt="Jaguar Security Services Ltd"
        width={336}
        height={400}
        unoptimized
        className={`h-12 w-auto shrink-0 sm:h-14 ${className}`}
        sizes={c.sizes}
        priority
      />
    );
  }

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
