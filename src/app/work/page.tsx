"use client";
import { ExternalLink } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import Image, { StaticImageData } from "next/image";
import portfolio from "../../../public/3D_PORTFOLIO.png";
import cryptohippo from "../../../public/crypto-hippo.png";
import githubapi from "../../../public/github-api.png";
import marblesrace from "../../../public/marbles-race-screen.png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface WorkProps {
  title: string;
  description: string;
  image: StaticImageData;
  repo: string;
  demo: string;
  tech: string[];
}
const workArray: WorkProps[] = [
  {
    title: "3D Portfolio",
    description: "Personal portfolio made with React Three Fiber (R3F).",
    image: portfolio,
    repo: "https://github.com/dachig/threejs-journey/tree/main/my-3d-portfolio",
    demo: "https://www.dachig.com/",
    tech: ["R3F", "React", "Framer-Motion", "Gsap"],
  },
  {
    title: "Crypto Hippo (Database Deprecated)",
    description:
      "Browse the latest crypto trends and track your favourite coins to stay up-to-date easily.",
    image: cryptohippo,
    repo: "https://github.com/dachig/CryptoHippo",
    demo: "https://crypto-hippo.vercel.app/",
    tech: ["React", "Supabase", "Next-Auth", "Crypto API"],
  },
  {
    title: "Github API",
    description:
      "Discover public Github repositories by simply entering a username.",
    image: githubapi,
    repo: "https://github.com/dachig/GithubAPI",
    demo: "https://github-api-omega-lime.vercel.app/",
    tech: ["React", "Github API", "Zod"],
  },
  {
    title: "Marbles Race",
    description:
      "Choose a difficulty and race to the finish whilst trying to dodge all the obstacles.",
    image: marblesrace,
    repo: "https://github.com/dachig/threejs-journey/tree/main/66-create-a-game-with-r3f",
    demo: "https://marblesrace.vercel.app/",
    tech: ["R3F", "Three.JS", "JavaScript"],
  },
];

export default function Work() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, { opacity: 1, duration: 1 });
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div id="work" className="flex justify-center items-center">
      <div ref={contentRef} className="flex-col flex gap-6 lg:gap-10 opacity-0">
        <h1 className="sr-only text-3xl text-primary-foreground !font-mono">
          <span className="text-accent-foreground text-xl mr-4">03.</span>
          Work that I&apos;m proud of
        </h1>
        <div className="flex lg:flex-row flex-col gap-6 lg:w-5xl">
          <Carousel
            setApi={setApi}
            className="w-fit h-fit lg:w-[520px] lg:h-[400px] flex flex-col"
          >
            <CarouselContent>
              {workArray.map((work, idx) => (
                <CarouselItem key={idx} className="flex gap-4">
                  <Image
                    title={work.title}
                    src={work.image}
                    alt={work.title}
                    width={200}
                    height={200}
                    className="rounded-md rounded-b-none w-full h-auto lg:w-[520px] lg:h-[400px]"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <span className="!font-mono text-accent-foreground mt-3 mx-auto">
              {current + 1}{" "}
              <span className="!font-mono text-secondary-foreground">
                of {workArray.length}
              </span>
            </span>

            <CarouselPrevious className="z-50" />
            <CarouselNext className="z-50" />
          </Carousel>
          <Card className="hover:border-accent-foreground bg-transparent shadow-none flex-1">
            <CardHeader className="flex flex-col gap-6">
              <CardTitle className="text-primary-foreground !font-mono text-4xl">
                {workArray[current].title}
              </CardTitle>
              <div className="flex gap-2 flex-wrap">
                {workArray[current].tech.map((tech, idx) => (
                  <span
                    className="text-sm px-2 rounded-md text-accent-foreground border-[1.5px] border-accent-foreground !font-mono"
                    key={idx}
                  >
                    {tech}
                  </span>
                ))}
              </div>{" "}
              <CardDescription className="text-xl">
                {workArray[current].description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2 mt-auto mb-6">
              <a href={workArray[current].repo} target="_blank">
                <Button className="text-lg active:scale-[.97] flex gap-2 items-center">
                  <ExternalLink size={16} />
                  Repository
                </Button>
              </a>
              <a href={workArray[current].demo} target="_blank">
                <Button className="text-lg active:scale-[.97] flex gap-2 items-center">
                  <ExternalLink size={16} />
                  Demo
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
