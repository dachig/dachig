"use client";
import { Github, Linkedin } from "lucide-react";
import { Button } from "../components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Typewriter from "@/components/typewriter";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, { opacity: 1, duration: 1 });
  }, []);
  return (
    <div className="flex justify-center items-center">
      <div
        ref={contentRef}
        className="flex items-center justify-center text-md lg:text-lg opacity-0"
      >
        <div className="flex flex-col gap-2 lg:gap-4">
          <span className="!font-mono text-accent-foreground">
            Hi, my name is
          </span>
          <h1 className="text-primary-foreground font-bold text-2xl lg:text-5xl">
            <Typewriter text="Daachi Giorgobiani."></Typewriter>
          </h1>
          <span className="text-secondary-foreground text-2xl lg:text-5xl">
            I build stuff for the web.
          </span>
          <span className=" text-secondary-foreground max-w-[500px]">
            I&apos;m a fullstack developer currently working as a freelancer,
            helping clients build fully custom, scalable, and easy to maintain
            websites tailored to their needs. I specialize in creating
            experiences that not only look great but also perform to a very high
            standard.
          </span>
          <span className=" text-primary-foreground max-w-[500px]">
            Let me help you kickstart and elevate your brand&apos;s online
            presence!
          </span>
          <h2>
            <Link
              className="w-fit"
              href="/dachi-giorgobiani-cv.pdf"
              target="_blank"
            >
              <Button>Download CV</Button>
            </Link>
          </h2>
          <div className="flex gap-4 items-center">
            <span className="text-secondary-foreground !font-mono">
              Find me on
            </span>
            <Link
              className="text-accent-foreground"
              href="https://github.com/dachig"
              target="_blank"
            >
              <Github />
            </Link>
            <Link
              className="text-accent-foreground"
              href="https://linkedin.com/in/dachigiorgobiani"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
