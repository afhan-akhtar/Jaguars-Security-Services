import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "header" | "footer";
}

const sizeMap = {
  header: "h-14 w-36 sm:h-16 sm:w-44",
  footer: "h-12 w-32 sm:h-14 sm:w-36",
};

export default function Logo({ className = "", size = "header" }: LogoProps) {
  return (
    <div className={`relative shrink-0 ${sizeMap[size]} ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Jaguar Security Services Ltd"
        fill
        className="object-contain object-left"
        sizes="176px"
        priority
      />
    </div>
  );
}
