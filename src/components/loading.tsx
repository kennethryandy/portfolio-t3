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
      const tl = gsap.timeline({ defaults: { ease: Back.easeIn.config(1) } });
      tl.to(".logo", { opacity: 1 });
      tl.to(".logo__rect", {
        strokeDashoffset: 0,
        strokeDasharray: 200,
        yoyo: true,
        duration: 2.4,
      });
      tl.to(".logo__letter", { opacity: 1, stagger: 0.02 });
      tl.to(".logo", { scale: 0, opacity: 0 });
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
