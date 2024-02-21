import { type ReactNode, type FC } from "react";
import Header from "./header";
import Footer from "./footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
