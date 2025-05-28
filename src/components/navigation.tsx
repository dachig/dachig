import { Button } from "./ui/button";

export default function Navigation() {
  return (
    <ul className="list-none lg:flex font-mono items-center p-4 gap-8 text-secondary-foreground justify-end absolute top-4 right-4 hidden">
      <li>
        <a href="#about">
          <span className="text-accent-foreground ">01.</span> About
        </a>
      </li>
      <li>
        <a href="#experience">
          <span className="text-accent-foreground ">02.</span> Experience
        </a>
      </li>
      <li>
        <a href="#work">
          <span className="text-accent-foreground ">03.</span> Work
        </a>
      </li>
      <li>
        <a href="#contact">
          <span className="text-accent-foreground ">04.</span> Contact
        </a>
      </li>
      <li>
        <a href="/Dachi_Giorgobiani_CV.pdf" target="_blank">
          <Button>Download CV</Button>
        </a>
      </li>
    </ul>
  );
}
