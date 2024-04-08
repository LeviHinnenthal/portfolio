"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Shapes  from "./Shapes";

const Hero = () => {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".animatedName",
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: "elastic.out(1.5,0.3)",
          duration: 1,
          transformOrigin: "left top",
          stagger: {
            each: 0.1,
            from: "random",
          },
        }
      );

      tl.fromTo(
        ".animatedDev",
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "elastic.out(1.5,0.3)",
        }
      );
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={component} className="flex items-center p-10 h-screen">
      <div className="flex flex-col text-[140px] leading-none font-extrabold">
        <div className=" text-slate-300 text-[180px] flex">
          <div className="animatedName opacity-0">L</div>
          <div className="animatedName opacity-0">e</div>
          <div className="animatedName opacity-0">v</div>
          <div className="animatedName opacity-0">i</div>
        </div>
        <div className="text-slate-500 flex">
          <div className="animatedName opacity-0">H</div>
          <div className="animatedName opacity-0">i</div>
          <div className="animatedName opacity-0">n</div>
          <div className="animatedName opacity-0">n</div>
          <div className="animatedName opacity-0">e</div>
          <div className="animatedName opacity-0">n</div>
          <div className="animatedName opacity-0">t</div>
          <div className="animatedName opacity-0">h</div>
          <div className="animatedName opacity-0">a</div>
          <div className="animatedName opacity-0">l</div>
        </div>
        <div className="animatedDev text-[50px] font-bold mt-6 opacity-0 animatedDev">
          Frontend Developer
        </div>
      </div>
      <div className="shapes w-full">
        <Shapes />
      </div>
    </section>
  );
};

export default Hero;
