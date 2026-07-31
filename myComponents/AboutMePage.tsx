"use client";

import { Component } from "@/components/parallax-scroll-feature-section";
import Magnetic from "./MagneticText";
import { HomeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Pagination } from "@/components/ui/pagination";


export default function DemoOne() {
  const [leaving, setLeaving] = useState(false);

  const handleBack = () => {
    setLeaving(true);

    setTimeout(() => {
      window.history.back();
    }, 280);
  };

  const prev = {
  title: "Back",
  href: "/#parallax",
};



  return (
    <motion.div
      animate={{
        opacity: leaving ? 0 : 1,
        scale: leaving ? 0.98 : 1,
        y: leaving ? -8 : 0,
      }}
      transition={{
        duration: 0.28,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      <div className="mx-10 my-10 mb-0 fixed top-10 left-10 z-50">
              <Pagination  previous={prev} />
          
              </div>
      {/* <HomeIcon
        className="fixed top-30 left-30 w-16 h-16 p-4 rounded-xl bg-accent text-gray-500 cursor-pointer z-50 hover:bg-gray-100 transition-colors duration-200"
        onClick={handleBack}
      /> */}

      <Component />
      <hr className="my-12 border border-muted" />
      <Magnetic />
    </motion.div>
  );
}