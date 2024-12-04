import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiSupabase,
  SiVercel,
  SiLangchain,
} from "react-icons/si";

export default function TechStackSection() {
  const techStack = [
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: SiPython, name: "Python" },
    { Icon: SiSupabase, name: "Supabase" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: SiLangchain, name: "Langchain" },
  ];

  return (
    <div className="col-span-full lg:col-span-3 row-span-1 animate-fade-in-up">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {techStack.map(({ Icon, name }) => (
              <div
                key={name}
                className="flex flex-col items-center justify-center p-2 
                  bg-muted rounded-md transition-colors hover:bg-muted/80 hover:scale-105"
              >
                <Icon className="w-8 h-8 mb-2" />
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
