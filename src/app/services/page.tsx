"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef } from "react";
interface ServicesProps {
  title: string;
  description: string;
}
const services: ServicesProps[] = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern frameworks like React optimized for performance, scalability, and maintainability. Whether it's a portfolio, web app, or business site, I turn ideas into reality.",
  },
  {
    title: "UX/UI Design",
    description:
      "Clean interfaces and intuitive experiences that align with your brand and user needs. I design layouts that are both visually appealing and functional with every detail serving a purpose.",
  },
  {
    title: "Hosting & Maintenance",
    description:
      "Reliable, secure deployment with automatic updates and backups. I keep your site live, fast, and bug-free while offering ongoing care so you can focus on your business, not your backend.",
  },
  {
    title: "SEO",
    description:
      "Technical optimization and performance tuning to help your site rank better and load faster. From structured content to meta data, I build with visibility in mind from the start.",
  },
];

export default function Services() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".service-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        // delay the first item by 0.5s and stagger each next by 0.5s
        delay: 0.75,
        stagger: 0.25,
      }
    );
  }, []);
  return (
    <>
      <h1 className="sr-only">My services</h1>
      <div
        ref={contentRef}
        className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 opacity-0 max-w-5xl gap-8 lg:gap-0"
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className={cn(
              idx == 0 &&
                "lg:border-l-none lg:border-t-none lg:border-b-[1.5px] lg:border-r-[1.5px] border-secondary-foreground",
              idx == 1 && "lg:border-b-[1.5px] border-secondary-foreground",
              idx == 2 && "lg:border-r-[1.5px] border-secondary-foreground",
              "flex flex-col gap-4 lg:gap-8  lg:p-8 w-full h-full"
            )}
          >
            <h2 className="service-item !font-mono text-accent-foreground text-2xl">
              {service.title}
            </h2>
            <span className="service-item text-secondary-foreground">
              {service.description}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
