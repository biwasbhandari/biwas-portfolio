import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProjectShowcase() {
  return (
    <div className="col-span-full lg:col-span-1 row-span-1 animate-fade-in-up">
      <Card>
        <CardHeader>
          <CardTitle>Currently building</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">AIBtc Championship</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Easily trade memecoins and tokens via chat
          </p>
          <Button asChild variant="outline">
            <Link href="https://sprint.aibtc.dev" target="_blank">
              View Project
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
