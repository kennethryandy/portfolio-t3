import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { MainLayout } from "@/layouts/main";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Kenneth Ryan Dy",
  description:
    "Web developer specializing in building exceptional digital experiences.",
  icons: [
    { rel: "icon", url: "/favicon.ico", size: "any" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} dark`}>
        <TRPCReactProvider>
          <MainLayout>{children}</MainLayout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
