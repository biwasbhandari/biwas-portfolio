"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { Github } from "lucide-react";

const content = [
  {
    title: "LLM Enthusiast",
    description:
      "Biwas Bhandari is a software developer with a passion for Large Language Models. He specializes in creating cutting-edge AI applications that push the boundaries of what's possible with natural language processing.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center ">
        <Image
          src="/biwas.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-md"
          alt="Biwas Bhandari"
        />
      </div>
    ),
  },
  {
    title: "Tech Stack Maestro",
    description:
      "With expertise in Langchain, FastAPI, Next.js, and Supabase, Biwas crafts robust and scalable applications. His full-stack prowess enables him to bring AI-powered ideas to life from concept to deployment.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))] flex items-center justify-center  p-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-center bg-white/10 rounded-md p-2">
            Langchain
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-md p-2">
            FastAPI
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-md p-2">
            Next.js
          </div>
          <div className="flex items-center justify-center bg-white/10 rounded-md p-2">
            Supabase
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Entertainment Aficionado",
    description:
      "When not coding, Biwas immerses himself in the world of anime, binge-worthy series, and thought-provoking documentaries. His diverse interests fuel his creativity and problem-solving skills.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center ">
        <div className="grid grid-cols-3 gap-2">
          <span className="text-4xl">🍿</span>
          <span className="text-4xl">📺</span>
          <span className="text-4xl">🎭</span>
        </div>
      </div>
    ),
  },
  {
    title: "Connect with Biwas",
    description:
      "Interested in collaborating or just want to say hi? Check out Biwas's GitHub for his latest projects and contributions to the world of AI and software development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center ">
        <a
          href="https://github.com/biwasbhandari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 bg-white/10 rounded-md p-4 hover:bg-white/20 transition-colors"
        >
          <Github size={24} />
          <span className="text-lg font-semibold">GitHub</span>
        </a>
      </div>
    ),
  },
];

export default function BiwasBhandariIntro() {
  return (
    <div className="p-10 min-h-screen flex items-center flex-col justify-center">
      <h1 className="text-4xl font-bold text-center mb-8 ">
        Meet Biwas Bhandari
      </h1>
      <StickyScroll content={content} />
    </div>
  );
}
