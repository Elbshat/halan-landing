import Link from "next/link";

export default function DownloadButton({ href, icon: Icon, label, store }) {
  return (
    <Link
      href={href}
      className="inline-flex h-12 items-center justify-center gap-x-4 whitespace-nowrap rounded-full bg-primary px-4 py-2 font-openSans text-white shadow transition hover:bg-primary/95 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 lg:h-16 lg:text-2xl"
      aria-label={`Download from ${store}`}
      target="_blank"
      rel="follow"
      title={`Download from ${store}`}
    >
      <Icon className="h-6 w-5 lg:h-10 lg:w-9" />
      <p className="flex h-10 flex-col">
        <span className="text-xs uppercase">{label}</span>
        <span className="font-bold lg:text-2xl lg:font-normal lg:leading-none lg:tracking-tight">
          {store}
        </span>
      </p>
    </Link>
  );
}
