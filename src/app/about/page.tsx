"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import portrait from "../../../public/pc_foto.jpg";
import gsap from "gsap";
import { useEffect, useRef } from "react";

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
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, { opacity: 1, duration: 1 });
  }, []);
  return (
    <>
      <h1 className="sr-only ">About me</h1>
      <div
        ref={contentRef}
        className="flex flex-col lg:flex-row gap-6 lg:gap-10 opacity-0"
      >
        <div className="border-2 border-accent-foreground w-[250px] h-[290px] rounded-md bg-card block self-center relative">
          <Image
            title="portrait"
            src={portrait}
            alt="portrait"
            width={500}
            height={550}
            className="h-full w-full absolute right-4 bottom-4 rounded-md"
            placeholder="blur"
          />
          <div className="h-full w-full absolute right-4 bottom-4 rounded-md bg-accent-foreground/25" />
        </div>
        <div className="flex flex-col gap-4 max-w-[500px] text-secondary-foreground">
          <h2 className="sr-only">Description</h2>
          <span>
            My interest in web development started back in 2022, just before
            COVID ended. Who knew having a lot of spare time at home could spark
            an interest in HTML & CSS!
          </span>
          <span>
            Fast-forward to today, and I&apos;ve had the privilege to apply and
            expand my knowledge during{" "}
            <span className="text-accent-foreground">two internships</span> and
            several
            <span className="text-accent-foreground">
              {" "}
              client & personal projects
            </span>
            . My main focus these days is{" "}
            <span className="text-accent-foreground">
              helping clients
            </span> with{" "}
            <span className="text-accent-foreground">
              developing custom websites
            </span>{" "}
            that are accesible and easy to maintain.
          </span>
          <span>
            I&apos;ve recently started my work on a{" "}
            <span className="text-accent-foreground">SAAS project</span> with a
            good friend of mine, but that&apos;s still a work in progress.
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
    </>
  );
}
