"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Github } from "lucide-react";

const content = [
  {
    title: "LLM Enthusiast",
    description:
      "I'm a passionate software developer with a deep fascination for Large Language Models. My expertise lies in developing innovative AI applications that harness the power of natural language processing to create impactful solutions.",
    content: (
      <Image
        src="/biwas.jpg"
        width={300}
        height={300}
        className="h-full w-full object-cover rounded-full"
        alt="Biwas Bhandari"
        style={{ objectPosition: "center 25%" }}
        priority
      />
    ),
  },
  {
    title: "Tech Stack Maestro",
    description:
      "My toolkit includes Langchain, FastAPI, Next.js, and Supabase, enabling me to build end-to-end solutions. As a full-stack developer, I bridge the gap between AI concepts and production-ready applications.",
    content: (
      <div className="grid grid-cols-2 gap-4 h-full w-full p-4">
        {["Langchain", "FastAPI", "Next.js", "Supabase"].map((tech) => (
          <div
            key={tech}
            className="flex items-center justify-center bg-white/10 rounded-full p-4 text-center"
          >
            {tech}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Entertainment Aficionado",
    description:
      "When I step away from the keyboard, I dive into the vibrant worlds of anime, engaging TV series, and enlightening documentaries. These diverse interests inspire my creative approach to problem-solving.",
    content: (
      <div className="grid grid-cols-3 gap-4 h-full w-full p-4">
        {["🍿", "📺", "🎭"].map((emoji, index) => (
          <div
            key={index}
            className="flex items-center justify-center text-6xl bg-white/10 rounded-full"
          >
            {emoji}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Connect with Biwas",
    description:
      "Interested in collaborating or just want to say hi? Check out my GitHub (@biwasbhandari) for latest projects and contributions to the world of AI and software development.",
    content: (
      <a
        href="https://github.com/biwasbhandari"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center space-x-2 bg-white/10 rounded-full p-6 hover:bg-white/20 transition-colors h-full w-full"
      >
        <Github size={32} />
        <span className="text-2xl font-semibold">GitHub</span>
      </a>
    ),
  },
];

export default function BiwasBhandariIntro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Meet Biwas Bhandari
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
