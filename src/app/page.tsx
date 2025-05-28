import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col sm:block gap-16 sm:gap-0">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}
