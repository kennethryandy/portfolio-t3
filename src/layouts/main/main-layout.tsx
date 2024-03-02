import { type ReactNode, type FC } from "react";
import Header from "./header";
import Footer from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <a
        // href="#experiences"
        className="absolute z-0 left-0 top-0 rounded border border-primary text-primary px-4 py-2 -translate-x-full active:translate-x-0 focus-visible:translate-x-0"
        // tabIndex={0}
      >
        SKIP TO CONTENT
      </a>
      <div className="min-h-screen lg:max-w-screen-xl my-6 px-6 lg:my-0 lg:mx-auto lg:flex lg:justify-between lg:gap-2">
        <Header />
        <main className="relative z-40 lg:py-20 lg:w-1/2">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
