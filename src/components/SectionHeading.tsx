interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  dark = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        {!centered && <span className="h-px w-10 bg-jaguar-gold-bright/50" />}
        <p className="label-tag">{label}</p>
        {!centered && <span className="hidden h-px flex-1 max-w-16 bg-jaguar-gold-bright/20 sm:block" />}
      </div>
      <h2
        className={`mt-5 font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? "text-white" : "text-jaguar-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/60" : "text-jaguar-black/60"
          }`}
        >
          {description}
        </p>
      )}
      {centered && <div className="gold-line mx-auto mt-6 w-24" />}
    </div>
  );
}
