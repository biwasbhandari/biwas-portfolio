import HeroSection from "@/components/main/Hero";
import ExperienceSection from "@/components/main/Experience";
import TechStackSection from "@/components/main/TechStack";
import ProjectShowcase from "@/components/main/Project";
import Footer from "@/components/main/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 grid grid-cols-3 grid-rows-3 gap-4">
      <HeroSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectShowcase />
      <Footer />
    </div>
  );
}
