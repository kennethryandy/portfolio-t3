import { type FC } from "react";

const AboutSection: FC = ({}) => {
  return (
    <section id="about" className="section mb-28 lg:scroll-mt-28">
      <div className="block lg:hidden py-4 sticky -top-1 z-50 bg-background bg-opacity-85 backdrop-blur-sm -mx-6 px-6 border rounded-none border-b-0 border-x-0">
        <h2 className="font-bold uppercase text-sm tracking-wide">About</h2>
      </div>
      <div className="lg:max-w-6xl mx-auto lg:px-4">
        <div>
          <p className="text-slate-400 mb-4 text-justify">
            In early 2015, I stumbled into the captivating world of programming
            crafting blog websites dedicated to a favorite game with HTML, CSS,
            and PHP. My adventure through the complex worlds of JavaScript,
            Java, C, and C++ has been nothing short of thrilling ever since.
            From self-study to professional roles, I began my career building
            software for a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://christinenicholson.co.uk/"
              className="text-slate-200 font-medium transition-colors hover:text-primary"
            >
              business mentor
            </a>
            , a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://lets.com.ph/"
              className="text-slate-200 font-medium transition-colors hover:text-primary"
            >
              start up
            </a>{" "}
            and a{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://safety-integrated-management.com/"
              className="text-slate-200 font-medium transition-colors hover:text-primary"
            >
              huge corporation
            </a>
            .
          </p>
          <p className="text-slate-400 mb-4 text-justify">
            Transitioning to roles within a startup environment, I contributed
            to the development of innovative solutions, learning to adapt and
            excel in dynamic settings while remaining committed to the
            company&apos;s goals. I love blending engineering and design to
            create things that are functional as well as beautiful.
          </p>
          <p className="text-slate-400 mb-4 text-justify">
            When away from the keyboard, you&apos;ll often find me hiking,
            engrossed in a good book, or enjoying quality time with my cats.
            Coding is great and I love the challenges it gives, but it&apos;s
            important to have a life outside of that too. Keeps me feeling
            energized and gives me fresh ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
