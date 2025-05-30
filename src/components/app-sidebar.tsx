"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { Button } from "./ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", number: "01.", label: "About" },
    { href: "/services", number: "02.", label: "Services" },
    { href: "/experience", number: "03.", label: "Experience" },
    { href: "/work", number: "04.", label: "Work" },
  ];

  return (
    <Sidebar className="h-full ">
      <SidebarHeader className="px-4 py-6">
        <Link href="/">
          <Image src="/DG.png" alt="logo" title="logo" width={64} height={64} />
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          {navLinks.map(({ href, number, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded-md text-lg transition-colors",
                pathname === href
                  ? " text-accent-foreground"
                  : "text-secondary-foreground "
              )}
            >
              <span className="font-mono text-accent-foreground">{number}</span>
              <span className="font-mono">{label}</span>
            </Link>
          ))}
        </SidebarGroup>

        <SidebarGroup className="mt-6">
          <Link href="/contact" className="block">
            <Button className="w-full">Hire me</Button>
          </Link>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dachi Giorgobiani
      </SidebarFooter>
    </Sidebar>
  );
}
