import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-bold tracking-[0.3em] text-jaguar-gold">404</p>
      <h1 className="mt-4 text-4xl font-extrabold text-white">Page Not Found</h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-jaguar-gold-bright px-8 py-3 text-sm font-bold text-jaguar-black transition-all hover:bg-jaguar-gold-light"
      >
        Back to Home
      </Link>
    </section>
  );
}
