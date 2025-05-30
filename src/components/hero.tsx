import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="lg:w-screen h-screen flex justify-center items-center">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-4">
          <span className="!font-mono text-accent-foreground">
            Hi, my name is
          </span>
          <h1 className="text-primary-foreground font-bold text-5xl">
            Dachi Giorgobiani.
          </h1>
          <span className="text-secondary-foreground text-5xl">
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
          <a href="/dachi-giorgobiani-cv.pdf" target="_blank">
            <Button>Hire me CV</Button>
          </a>
          <div className="flex gap-4 items-center">
            <span className="text-secondary-foreground !font-mono">
              or find me on
            </span>
            <a
              className="text-accent-foreground"
              href="https://github.com/dachig"
              target="_blank"
            >
              <Github />
            </a>
            <a
              className="text-accent-foreground"
              href="https://linkedin.com/in/dachigiorgobiani"
              target="_blank"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
