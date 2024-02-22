import { type FC, type ElementRef, useRef } from "react";
import Logo from "./logo";
import gsap, { Back } from "gsap";
import { useGSAP } from "@gsap/react";

interface LoadingProps {
  completeLoading: () => void;
}

const Loading: FC<LoadingProps> = ({ completeLoading }) => {
  const container = useRef<ElementRef<"div">>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(".logo", { opacity: 1 });
      tl.fromTo(
        ".logo__rect",
        { strokeDasharray: 34, strokeDashoffset: 10 },
        {
          strokeDasharray: 150,
          duration: 1.6,
          ease: "back.out",
        },
      );
      tl.to(".logo", {
        delay: -0.8,
        scale: 0,
        opacity: 0,
        ease: Back.easeIn.config(1),
      });
      tl.eventCallback("onComplete", function () {
        completeLoading();
      });
    },
    { scope: container },
  );

  return (
    <div
      className="h-screen w-full overflow-hidden flex items-center justify-center"
      ref={container}
    >
      <Logo className="w-[60px] h-[60px] opacity-0" />
    </div>
  );
};

export default Loading;
