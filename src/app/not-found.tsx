import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-charcoal flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="label-tag label-tag-centered justify-center">Error</p>
      <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-semibold text-jaguar-black">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-body">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-jaguar-gold-bright px-8 py-3.5 text-sm font-bold text-jaguar-black transition-all hover:bg-jaguar-gold-light gold-glow"
      >
        Back to Home
      </Link>
    </section>
  );
}
