import Image from "next/image";
import Link from "next/link";

const STORE_SLUG = process.env.STORE_SLUG;

export const metadata = {
  description: "Welcome.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  const logoSrc = STORE_SLUG ? `/logos/${STORE_SLUG}.png` : null;

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center">
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={STORE_SLUG ?? ""}
          width={280}
          height={280}
          className="mb-8"
          priority
        />
      ) : (
        <h1 className="mb-8 text-4xl font-bold">{process.env.SITE_NAME ?? "Welcome"}</h1>
      )}

      <Link
        href="/search"
        className="fixed bottom-6 right-6 text-xs text-neutral-400 transition-colors hover:text-neutral-600 dark:text-neutral-600 dark:hover:text-neutral-400"
      >
        shop
      </Link>
    </div>
  );
}
