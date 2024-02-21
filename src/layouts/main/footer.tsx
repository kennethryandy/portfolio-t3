import { type FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="my-3">
      <div className="text-center text-gray-400 tracking-tight leading-tight">
        <a
          href="https://github.com/kennethryandy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Handcrafted by me <br /> Kenneth Ryan Dy © {new Date().getFullYear()}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
