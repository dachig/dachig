import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Dachi Giorgobiani Portfolio And Custom Website Development",
  description:
    "I will help you develop and maintain a custom fullstack website which is accesible, scalable and easy to maintain. I work fast, reliable and guarantee fair pricing for my service.",
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
      "Scalable, accessible, and fast websites. Custom fullstack development with fair pricing. View my work.",
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
      <body
        className={`--font-sans bg-radial from-card to-background p-4 lg:p-0`}
      >
        {children}
      </body>
    </html>
  );
}
