import { type FC } from "react";
import fira_code from "@/lib/fonts";

const Footer: FC = () => {
  return (
    <footer className="my-3 relative lg:-mt-16 z-50">
      <div className="text-center text-gray-400 tracking-tight leading-tight">
        <a
          href="https://github.com/kennethryandy"
          target="_blank"
          rel="noopener noreferrer"
          className={`${fira_code.className}`}
        >
          <div>
            <span className="block">Handcrafted by me</span>
            <span className="block">
              Kenneth Ryan Dy © {new Date().getFullYear()}
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
