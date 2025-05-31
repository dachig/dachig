"use client";
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
  }, []);
  return (
    <>
      <h1 className="sr-only">My services</h1>
      <div
        ref={contentRef}
        className="grid items-center justify-center grid-cols-1 lg:grid-cols-2 opacity-0 max-w-5xl gap-8 lg:gap-24"
      >
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col gap-4 lg:gap-8">
            <h2 className="!font-mono text-accent-foreground text-2xl lg:text-3xl">
              {service.title}
            </h2>
            <span className="text-secondary-foreground">
              {service.description}
            </span>
            {idx == 0 || idx == 1 ? (
              <div className="w-full border-b border-secondary-foreground lg:-mb-16 hidden lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
