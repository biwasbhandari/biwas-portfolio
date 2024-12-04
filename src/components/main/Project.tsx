import Link from "next/link";

export default function ProjectShowcase() {
  return (
    <div className="row-span-1 bg-secondary/10 rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Current Project</h2>
      <h3 className="font-semibold mb-2">Sprint</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Easily trade memecoins and tokens via chat
      </p>
      <Link
        href="https://sprint.aibtc.dev"
        target="_blank"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 py-2"
      >
        View Project
      </Link>
    </div>
  );
}
