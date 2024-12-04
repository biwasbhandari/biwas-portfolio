import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="col-span-2 row-span-1 bg-secondary/10 rounded-lg p-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-2">Biwas Bhandari</h1>
      <p className="text-muted-foreground mb-4">
        AI & Blockchain Developer | Generative AI Specialist
      </p>
      <blockquote className="italic text-sm mb-4">
        "People call it vendor-locked, but I prefer it because it makes shipping
        easy."
      </blockquote>
      <div className="flex space-x-2">
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
        >
          LinkedIn
        </Link>
        <Link
          href="https://aibtc.dev"
          target="_blank"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
        >
          aibtc.dev
        </Link>
      </div>
    </div>
  );
}
