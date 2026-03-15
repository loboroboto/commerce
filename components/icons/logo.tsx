import clsx from "clsx";
import Image from "next/image";

const STORE_SLUG = process.env.STORE_SLUG;

export default function LogoIcon(props: React.ComponentProps<"svg">) {
  if (STORE_SLUG) {
    return (
      <Image
        src={`/logos/${STORE_SLUG}.png`}
        alt={`${process.env.SITE_NAME ?? STORE_SLUG} logo`}
        width={32}
        height={32}
        className={clsx("h-4 w-4", props.className)}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 32 28"
      {...props}
      className={clsx("h-4 w-4 fill-black dark:fill-white", props.className)}
    >
      <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
      <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
    </svg>
  );
}
