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
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`label-tag ${centered ? "label-tag-centered justify-center" : ""}`}
      >
        {label}
      </p>
      <h2
        className={`mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.85rem] ${
          dark ? "text-white" : "text-jaguar-black"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-white/70" : "text-body"
          }`}
        >
          {description}
        </p>
      )}
      {centered && <div className="gold-line mx-auto mt-7 w-28" />}
    </div>
  );
}
