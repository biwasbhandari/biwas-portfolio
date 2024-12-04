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
    <div className="row-span-1 bg-secondary/10 rounded-lg p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4 text-center">Tech Stack</h2>
      <div className="grid grid-cols-3 gap-2">
        {techStack.map(({ Icon, name }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-2 
              bg-background rounded-md transition-transform hover:scale-105"
          >
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
