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
      tl.fromTo(
        ".logo__rect",
        { strokeDasharray: 35, strokeDashoffset: 125 },
        {
          strokeDashoffset: 0,
          strokeDasharray: 140,
          duration: 1.2,
        },
      );
      tl.to(".logo", {
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
      <Logo className="opacity-0" width={80} height={80} />
    </div>
  );
};

export default Loading;
