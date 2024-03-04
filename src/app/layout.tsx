import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kenneth Ryan Dy",
  description:
    "Web developer specializing in building exceptional digital experiences.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    // { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark antialiased leading-relaxed selection:bg-primary selection:text-primary-foreground/95`}
      >
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
