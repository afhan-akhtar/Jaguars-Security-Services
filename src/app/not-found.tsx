import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-dark flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-bold tracking-[0.35em] text-jaguar-gold-bright">
        404
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-bold text-jaguar-black">
        Page Not Found
      </h1>
      <p className="mt-4 max-w-md text-jaguar-black/65">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-jaguar-gold-bright px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-jaguar-gold-light gold-glow"
      >
        Back to Home
      </Link>
    </section>
  );
}
