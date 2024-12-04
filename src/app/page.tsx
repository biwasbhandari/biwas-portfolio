import HeroSection from "@/components/main/Hero";
import ExperienceSection from "@/components/main/Experience";
import TechStackSection from "@/components/main/TechStack";
import ProjectShowcase from "@/components/main/Project";
import Footer from "@/components/main/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <div className="col-span-full">
          <HeroSection />
        </div>
        <div className="col-span-full md:col-span-1 lg:col-span-2">
          <ExperienceSection />
        </div>
        <div className="col-span-full md:col-span-1">
          <ProjectShowcase />
        </div>
        <div className="col-span-full">
          <TechStackSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
