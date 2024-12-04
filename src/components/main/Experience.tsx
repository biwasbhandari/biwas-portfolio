import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <div className="col-span-full lg:col-span-2 row-span-1 animate-fade-in-up">
      <Card>
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">
                <Link
                  href="https://aibtc.dev"
                  target="_blank"
                  className="hover:text-emerald-500 transition-colors"
                >
                  AIBTC.dev
                </Link>
                {" | "}
                <span className="text-muted-foreground font-normal">
                  Software Engineer
                </span>
              </h3>
              <span className="text-sm text-muted-foreground">
                Oct 2024 - Present
              </span>
            </div>
            <ul className="text-sm text-muted-foreground list-disc pl-4 mt-2">
              <li>Building AI-powered blockchain solutions</li>
              <li>Leading development of innovative crypto trading tools</li>
              <li>Implementing advanced trading algorithms</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold">
                <Link
                  href="https://starti.no"
                  target="_blank"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Startino
                </Link>
                {" | "}
                <span className="text-muted-foreground font-normal">
                  Software Engineer
                </span>
              </h3>
              <span className="text-sm text-muted-foreground">
                Jul 2024 - Oct 2024
              </span>
            </div>
            <ul className="text-sm text-muted-foreground list-disc pl-4 mt-2">
              <li>Converted Python code to TypeScript</li>
              <li>Built lead generation AI tool</li>
              <li>Revived 2019 React codebase</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
