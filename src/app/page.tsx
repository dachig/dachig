import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Work from "@/components/work";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <div className="flex flex-col gap-16 lg:gap-60">
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
