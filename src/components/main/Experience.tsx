export default function ExperienceSection() {
  return (
    <div className="col-span-2 row-span-1 bg-secondary/10 rounded-lg p-4 overflow-auto">
      <h2 className="text-xl font-semibold mb-4">Professional Experience</h2>
      <div className="space-y-2">
        <div>
          <h3 className="font-semibold">Startino | Software Engineer</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-4">
            <li>Converted Python code to TypeScript</li>
            <li>Built lead generation AI tool</li>
            <li>Revived 2019 React codebase</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
