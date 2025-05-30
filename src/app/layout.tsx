import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navigation from "@/components/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
export const metadata: Metadata = {
  title: "Dachi Giorgobiani Portfolio And Custom Website Development",
  description:
    "Need a modern, scalable, and accessible website that is easy to maintain? Look no further and let me help you kickstart your brand's online presence. I will build you a fully custom website from scratch using the latest technology to ensure the highest quality in performance and SEO.",
  icons: {
    icon: "/DG.png",
    shortcut: "/DG.png",
    apple: "/DG.png",
  },
  keywords: [
    "Fullstack Developer",
    "Custom Website Development",
    "Dachi Giorgobiani",
    "Portfolio",
    "Freelance Developer",
    "Scalable Web Apps",
    "Accessible Websites",
    "Next.js Developer",
    "React Developer",
  ],
  authors: [
    {
      name: "Dachi Giorgobiani",
      url: "https://dev-portfolio-kohl-three.vercel.app/",
    },
  ],
  creator: "Dachi Giorgobiani",
  publisher: "Dachi Giorgobiani",
  applicationName: "Dachi Giorgobiani Portfolio",
  generator: "Next.js",
  robots: "index, follow",
  metadataBase: new URL("https://dev-portfolio-kohl-three.vercel.app/"),
  openGraph: {
    title: "Dachi Giorgobiani Portfolio and Custom Website Development",
    description:
      "Need a modern, scalable, and accessible website that is easy to maintain? Look no further and let me help you kickstart your brand's online presence. I will build you a fully custom website from scratch using the latest technology to ensure the highest quality in performance and SEO.",
    url: "https://dev-portfolio-kohl-three.vercel.app/",
    siteName: "Dachi Giorgobiani Portfolio",
    images: [
      {
        url: "/DG.png",
        width: 1200,
        height: 630,
        alt: "Dachi Giorgobiani Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <main
            className={`--font-sans bg-radial from-card to-background p-2 lg:p-0 overflow-x-hidden lg:h-screen w-full items-center flex-col flex gap-8 lg:gap-24 transition-all`}
          >
            <Navigation />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
