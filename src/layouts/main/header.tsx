import { Button } from "@/components/ui/button";
import { type FC } from "react";

const Header: FC = () => {
  return (
    <header>
      <div className="w-full z-50 h-[100px] flex justify-center flex-col">
        <nav className="2xl:max-w-screen-2xl mx-auto md:px-3.5 px-4 py-4 flex items-center justify-between w-full">
          <p>Logo</p>
          <ul className="flex items-center gap-8">
            <li>About</li>
            <li>Skill</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-6xl lg:leading-[1.1]">
          Kenneth Ryan Dy - Web Developer
        </h1>
        <p className="mt-1.5 text-3xl md:text-6xl font-bold leading-tight tracking-tight lg:leading-[1.1]">
          I build things for the web
        </p>
        <p className="mt-1.5 text-lg text-muted-foreground sm:text-xl">
          specializing in building exceptional digital experiences.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          {/* <Button className="bg-transparent border border-gray-500 text-gray-300 hover:border-gray-300"> */}
          <Button>View Resume</Button>
          <Button>Contact Me</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
