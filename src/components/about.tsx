import { ChevronRight } from "lucide-react";
import Image from "next/image";

const technologies: string[] = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "React Three Fiber (R3F)",
  "Three.JS",
  "GraphQL",
  "MongoDB",
  "Node.JS",
  "GoLang",
];
export default function About() {
  return (
    <div
      id="about"
      className="lg:w-screen lg:h-screen flex justify-center items-center"
    >
      <div className="flex-col flex gap-6 lg:gap-10">
        <h2 className="text-3xl text-primary-foreground !font-mono">
          <span className="text-accent-foreground text-xl mr-4">01.</span>
          About me
        </h2>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
          <div className="border-2 border-accent-foreground w-[250px] h-[290px] lg:w-[300px] lg:h-[350px] rounded-md bg-card block self-center relative">
            <Image
              title="portrait"
              src={"/pc_foto.jpg"}
              alt="portrait"
              width={300}
              height={350}
              className="h-full w-full absolute right-4 bottom-4 rounded-md"
            />
            <div className="h-full w-full absolute right-4 bottom-4 rounded-md bg-accent-foreground/25" />
          </div>
          <div className="flex flex-col gap-4 max-w-[500px] text-secondary-foreground">
            <span>
              My interest in web development started back in 2022, just before
              COVID ended. Who knew having a lot of spare time at home could
              spark an interest in HTML & CSS!
            </span>
            <span>
              Fast-forward to today, and I&apos;ve had the privilege to apply
              and expand my knowledge during{" "}
              <span className="text-accent-foreground">two internships</span>{" "}
              and several
              <span className="text-accent-foreground">
                {" "}
                client & personal projects
              </span>
              . My main focus these days is{" "}
              <span className="text-accent-foreground">
                helping clients
              </span>{" "}
              with{" "}
              <span className="text-accent-foreground">
                developing custom websites
              </span>{" "}
              that are accesible and easy to maintain.
            </span>
            <span>
              I&apos;ve recently started my work on a{" "}
              <span className="text-accent-foreground">SAAS project</span> with
              a good friend of mine, but that&apos;s still a work in progress.
            </span>
            <span>Here are a few technologies I use on a regular basis:</span>
            <div className="grid grid-cols-2 auto-rows-min">
              {technologies.map((technology, idx) => (
                <span key={idx} className="flex gap-4 items-center">
                  <span className="text-accent-foreground">
                    <ChevronRight size={16} />
                  </span>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
