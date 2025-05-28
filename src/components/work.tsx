import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

interface WorkProps {
  title: string;
  description: string;
  image?: string | undefined;
  repo: string;
  demo: string;
}
const workArray: WorkProps[] = [
  {
    title: "3D Portfolio",
    description: "Personal portfolio made with React Three Fiber (R3F).",
    image: "/3D_PORTFOLIO.png",
    repo: "https://github.com/dachig/threejs-journey/tree/main/my-3d-portfolio",
    demo: "https://www.dachig.com/",
  },
  {
    title: "Crypto Hippo (Database Deprecated)",
    description:
      "Browse the latest crypto trends and track your favourite coins to stay up-to-date easily.",
    image: "/crypto-hippo.png",
    repo: "https://github.com/dachig/CryptoHippo",
    demo: "https://crypto-hippo.vercel.app/",
  },
  {
    title: "Github API",
    description:
      "Discover public Github repositories by simply entering a username.",
    image: "/github-api.png",
    repo: "https://github.com/dachig/GithubAPI",
    demo: "https://github-api-omega-lime.vercel.app/",
  },
  {
    title: "Marbles Race",
    description:
      "Choose a difficulty and race to the finish whilst trying to dodge all the obstacles.",
    image: "/marbles-race-screen.png",
    repo: "https://github.com/dachig/threejs-journey/tree/main/66-create-a-game-with-r3f",
    demo: "https://marblesrace.vercel.app/",
  },
];

export default function Work() {
  return (
    <div
      id="work"
      className="lg:w-screen lg:h-screen flex justify-center items-center"
    >
      <div className="flex-col flex gap-6 lg:gap-10">
        <h2 className="text-3xl text-primary-foreground !font-mono">
          <span className="text-accent-foreground text-xl mr-4">03.</span>
          Work that I&apos;m proud of
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {workArray.map((work, idx) => (
            <Card key={idx} className="hover:border-accent-foreground">
              <CardHeader>
                <CardTitle className="text-primary-foreground !font-mono">
                  {work.title}
                </CardTitle>
                <CardDescription>{work.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                {work.image && (
                  <Image
                    src={work.image}
                    alt={work.title}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                )}
              </CardContent>
              <CardFooter className="flex gap-2">
                {work.repo && (
                  <a href={work.repo} target="_blank">
                    <Button className="text-sm active:scale-[.97] flex gap-2 items-center">
                      <ExternalLink size={16} />
                      Repository
                    </Button>
                  </a>
                )}
                {work.demo && (
                  <a href={work.demo} target="_blank">
                    <Button className="text-sm active:scale-[.97] flex gap-2 items-center">
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
