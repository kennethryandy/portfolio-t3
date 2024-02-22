"use client";
import { type ReactNode, type FC, useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Loading from "@/components/loading";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const completeLoading = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading completeLoading={completeLoading} />;
  }

  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
