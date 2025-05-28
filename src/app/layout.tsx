import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Dachi Giorgobiani",
  description: "Dachi Giorgobiani Custom Web Development",
  icons: {
    icon: "/DG.png",
    shortcut: "/DG.png",
    apple: "/DG.png",
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
