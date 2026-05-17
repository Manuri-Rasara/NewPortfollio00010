"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Demo } from "./ThunderBolt";
import { RadialOrbitalTimelineDemo } from "./ParallexContentBlocks";
import Marquee from "./ParallexInsideComponent";
import MoreAboutMe from "./MoreAboutMe";

export default function Parallax() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className="mx-10 mt-30 mb-40 overflow-hidden rounded-4xl bg-white">
      
      <div
        ref={container}
        className="relative flex h-[80vh] items-center justify-center overflow-hidden"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        {/* Text Content */}
        <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 md:p-20 text-white mix-blend-difference">
          <div className="w-full md:w-[45vw] self-end text-right">
            <Marquee />
           
          </div>

          <p className="text-sm  md:text-[1.5vw] font-bold tracking-widest self-start">
            MANURI.

          
   <MoreAboutMe/>

        
          </p>


  
        </div>



        {/* Background Image */}
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div
            style={{ y }}
            className="relative h-full w-full"
          >
            <Image
              src="/Assets/Parallex/meImg7.png"
              alt="Parallax Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}