"use client"

import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "হ্যালো"]

const opacity: Variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
}
const slideUp: Variants = {
  initial: {
    y: 0,
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
}

interface PreloaderProps {
  onComplete?: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
 
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0 })
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const handleResize = () => setDimension({ width: window.innerWidth })
    handleResize()
    window.addEventListener("resize", handleResize)
    
    // Prevent scrolling while preloader is active
    document.body.style.overflow = "hidden"
    document.documentElement.style.overflow = "hidden"
    
    // Re-enable scrolling when preloader unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    if (index === words.length - 1) {
      // Start exit animation after showing the last word
      setTimeout(() => {
        setIsExiting(true)
        // Call onComplete after exit animation
        setTimeout(() => {
          onComplete?.()
        }, 1000)
      }, 1000)
      return
    }

    setTimeout(
      () => {
        setIndex(index + 1)
      },
      index === 0 ? 1000 : 150,
    )
  }, [index, onComplete])

  const initialPath = `M0 0 Q${dimension.width / 2} 300 ${dimension.width} 0 L0 0`
  const targetPath = `M0 0 Q${dimension.width / 2} 0 ${dimension.width} 0 L0 0`

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }


  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate={isExiting ? "exit" : "initial"}
      className="fixed inset-0 flex items-center justify-center bg-[#070b13] z-[99999999999]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex items-center text-white text-4xl md:text-5xl lg:text-6xl absolute z-10 font-medium"
          >
            <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2.5"></span>
            {words[index]}
          </motion.p>
          <svg className="absolute top-[100%] left-0 w-full h-[300px]">
            <motion.path variants={curve} initial="initial" animate={isExiting ? "exit" : "initial"} fill="#070b13" />
          </svg>
        </>
      )}
    </motion.div>
  );
};

