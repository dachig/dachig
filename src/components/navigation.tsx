"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", number: "01.", label: "About" },
    { href: "/services", number: "02.", label: "Services" },
    { href: "/experience", number: "03.", label: "Experience" },
    { href: "/work", number: "04.", label: "Work" },
  ];

  return (
    <nav>
      <ul className="list-none  items-center p-4 gap-8 text-secondary-foreground lg:w-5xl flex-wrap text-lg hidden">
        <li className="mr-auto">
          <Link href="/">
            <Image
              src="/DG.png"
              alt="logo"
              title="logo"
              height={64}
              width={64}
            />
          </Link>
        </li>

        {navLinks.map(({ href, label, number }) => (
          <li key={href}>
            <Link
              href={href}
              className={clsx("transition-colors duration-200")}
            >
              <span className="text-accent-foreground !font-mono">
                {number}
              </span>{" "}
              <span
                className={clsx(
                  pathname === href
                    ? "text-accent-foreground !font-mono"
                    : "text-secondary-foreground !font-mono"
                )}
              >
                {label}
              </span>
            </Link>
          </li>
        ))}

        <li>
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
