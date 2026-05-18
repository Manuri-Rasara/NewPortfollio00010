'use client'

import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Component = () => {
    // Array of section data
    const sections = [
        {
            id: 1,
            title: "This is Me",
            description: "I’m Manuri, a creative developer and designer passionate about creating modern digital experiences.I love blending creativity with technology to design websites that are clean, interactive, and visually meaningful.",
            imageUrl: '/Assets/AboutMeImg/Me2.webp',
            reverse: false
        },
        {
            id: 2,
            title: "Creative Vision",
            description: "Creativity inspires every project I build.From elegant UI designs to smooth user experiences, I focus on crafting digital products that feel modern, engaging, and unique.",
   imageUrl: '/Assets/AboutMeImg/SecondMe.webp',            
   reverse: true
        },
        {
            id: 3,
            title: "Dev & Design",
            description: "Combining development and design to bring ideas to life.I enjoy transforming concepts into responsive and functional experiences that balance aesthetics with performance.",
            imageUrl: '/Assets/AboutMeImg/ThirdMe.webp', 
            reverse: false
        }
    ]

    // Create refs and animations for each section
    const sectionRefs = sections.map(() => useRef(null));
    
    const scrollYProgress = sections.map((_, index) => {
        return useScroll({
            target: sectionRefs[index],
            offset: ["start end", "center start"]
        }).scrollYProgress;
    });

    // Create animations for each section
    const opacityContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], [0, 1])
    );
    
    const clipProgresses = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    );
    
    const translateContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 1], [-50, 0])
    );

  return (
    <div>
      <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-6xl font-black max-w-2xl text-center'>ABOUT MYSELF</h1>
        <p className='mt-20 flex items-center gap-1.5 text-sm'>SCROLL <ArrowDown size={15} /></p>
      </div>
      {/* <ScrollSection /> */}
       <div className="flex flex-col md:px-0 px-10">
            {sections.map((section, index) => (
                <div 
                    key={section.id}
                    ref={sectionRefs[index]} 
className={`h-screen flex flex-col md:flex-row items-center justify-center md:gap-30 gap-10 ${
  section.reverse ? 'md:flex-row-reverse' : ''
}`}                >
                    <motion.div style={{ y: translateContents[index] }}>
                        <div className="text-6xl font-black max-w-sm">{section.title}</div>
                        <motion.p 
                            style={{ y: translateContents[index] }} 
                            className="text-black/70 font-bold max-w-sm mt-10"
                        >
                            {section.description}
                        </motion.p>
                    </motion.div>
                    <motion.div 
                        style={{ 
                            opacity: opacityContents[index],
                            clipPath: clipProgresses[index],
                        }}
                        className="relative"
                    >
                        <img 
                            src={section.imageUrl} 
                            className="size-100 object-cover rounded-2xl" 
                            alt={`Section ${section.id}` }
                        />
                    </motion.div>
                </div>
            ))}
        </div>
      <div>

      </div>
       <div className='min-h-screen w-screen flex flex-col items-center justify-center'>
        <h1 className='text-8xl'>The End</h1>
      </div>
    </div>
  );
};
