import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, Youtube } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="col-span-full lg:col-span-3 bg-card rounded-lg p-6 flex flex-col md:flex-row items-start gap-6 shadow-lg animate-fade-in">
      <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden">
        <Image
          src="/biwas.jpg"
          alt="Biwas Bhandari"
          width={192}
          height={192}
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">Biwas Bhandari</h1>
        <p className="text-muted-foreground mb-4">
          Generative AI (Gpt Wrapper) Developer
        </p>
        <blockquote className="italic text-sm mb-4 border-l-4 border-emerald-500 pl-4">
          &quot;Building innovative solutions at the intersection of AI and
          blockchain technology.&quot;
        </blockquote>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="outline" size="icon">
            <Link href="https://github.com/biwasbhandari" target="_blank">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href="https://x.com/biwasbtc" target="_blank">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link
              href="https://www.linkedin.com/in/biwas-bhandari/"
              target="_blank"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon">
            <Link href="#" target="_blank">
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
