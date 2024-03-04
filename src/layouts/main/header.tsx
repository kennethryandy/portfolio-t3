import { type FC } from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
  CodeSandboxLogoIcon,
} from "@radix-ui/react-icons";
import Nav from "./nav";

const Header: FC = () => {
  return (
    <header className="mb-12  lg:sticky z-40 lg:left-0 lg:top-0 lg:max-h-screen lg:py-20 lg:w-1/2">
      <div className="flex flex-col justify-between h-full">
        <div className="text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:leading-[1.1]">
            Kenneth Ryan Dy.
          </h1>
          <p className="mt-1.5 text-2xl lg:text-4xl font-bold leading-tight tracking-tight lg:leading-[1.1]">
            Web Developer
          </p>
          <p className="mt-1.5 text-muted-foreground max-w-xs">
            I build things for the web specializing in responsive design for
            seamless experiences across devices
          </p>
          <Nav />
        </div>
        <ul className="flex flex-wrap items-center gap-3 lg:gap-5 mt-8 md:mt-0">
          <li>
            <a
              href="https://github.com/kennethryandy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary h-6 w-6"
              title="GitHub"
            >
              <GitHubLogoIcon width={28} height={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kenneth-ryan-dy-484b7720b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary h-6 w-6"
              title="LinkedIn"
            >
              <LinkedInLogoIcon width={28} height={28} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/kendyment21/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary h-6 w-6"
              title="Instagram"
            >
              <InstagramLogoIcon width={28} height={28} />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/your-work/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary h-6 w-6"
              title="CodePen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="28"
                height="28"
                aria-hidden="true"
              >
                <path
                  d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                  strokeWidth="4"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://codesandbox.io/u/kennethryandy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary h-6 w-6"
              title="CodeSandbox"
            >
              <CodeSandboxLogoIcon width={28} height={28} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
