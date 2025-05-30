"use client";
import { cn } from "@/lib/utils";
import { ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../components/ui/button";
import gsap from "gsap";

interface ExperiencesProps {
  title: string;
  location?: string | undefined;
  function: string;
  duration: string;
  summary: string[];
  blog?: string;
}

const experiences: ExperiencesProps[] = [
  {
    title: "Freelancer",
    location: undefined,
    function: "Freelance Fullstack Developer",
    duration: "June 2025 - Present",
    summary: [
      "Write modern, performant, maintainable code for a diverse array of client and personal projects.",
      "Work with a variety of different languages, frameworks and content management systems such as JavaScript, TypeScript, React and GraphQL.",
      "Clear communication with clients to ensure customer satisfaction.",
    ],
  },
  {
    title: "Twintag",
    location: "Twintag",
    function: "Intern Fullstack Developer",
    duration: "Feb 2025 - June 2025",
    summary: [
      "Collaborated on the development of the internal admin portal and AI-driven client projects.",
      "Executed both frontend (React, Angular) and backend (Golang, GraphQL) tasks with a strong focus on usability and efficiency.",
      "Participated in daily stand-ups and Scrum ceremonies.",
    ],
    blog: "https://twintagblog.vercel.app/",
  },
  {
    title: "Meteor",
    location: "Meteor",
    function: "Intern Frontend Developer",
    duration: "Feb 2024 - June 2024",
    summary: [
      "Conducted research into Progressive Web Apps (PWAs) using Shopify Hydrogen (Headless React) to improve internal workflows.",
      "Worked on client projects, primarily on frontend development with occasional backend tasks and direct client communication.",
      "Participated in daily stand-ups and Scrum ceremonies.",
    ],
  },
];

export default function Experience() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div id="experience" className=" flex justify-center items-center">
      <div
        ref={contentRef}
        className="flex-col flex gap-6 lg:gap-10 lg:mb-0 mb-8 opacity-0"
      >
        <h1 className="sr-only text-3xl text-primary-foreground !font-mono">
          <span className="text-accent-foreground text-xl mr-4">02.</span>
          My recent experiences
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 text-md lg:text-lg">
          <div className="flex flex-row lg:flex-col">
            {experiences.map((experience, idx) => (
              <div
                onClick={() => setActiveExperience(experience)}
                key={idx}
                className="flex flex-col lg:flex-row gap-4 items-center font-mono hover:cursor-pointer lg:flex-0 flex-1"
              >
                <span
                  className={cn(
                    activeExperience === experience
                      ? "border-accent-foreground"
                      : "border-secondary-foreground",
                    `border-b lg:border-r border-[1.5px] w-full lg:h-10 lg:w-0`
                  )}
                ></span>
                <div
                  className={cn(
                    activeExperience === experience
                      ? "text-accent-foreground"
                      : "text-secondary-foreground",
                    `active:scale-[.97]`
                  )}
                >
                  {experience.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-2">
            <h2 className="text-primary-foreground text-xl lg:text-2xl !font-mono">
              {activeExperience.function}{" "}
              {activeExperience.location && (
                <span className="text-accent-foreground !font-mono ml-2">{`@${activeExperience.location}`}</span>
              )}
            </h2>
            <span className="text-secondary-foreground !font-mono text-md">
              {activeExperience.duration}
            </span>
            <div className="flex flex-col gap-3 mt-4">
              {activeExperience.summary.map((bullet, idx) => (
                <span
                  className="text-secondary-foreground flex items-center gap-4 max-w-[500px]"
                  key={idx}
                >
                  <span className="text-accent-foreground">
                    <ChevronRight size={16} />
                  </span>
                  {bullet}
                </span>
              ))}
            </div>
            {activeExperience.blog && (
              <a
                className="text-accent-foreground !font-mono flex gap-2 items-center mt-4"
                href={activeExperience.blog}
                target="_blank"
              >
                <Button>
                  <ExternalLink size={16} />
                  {activeExperience.title} Blog
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
