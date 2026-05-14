"use client"

import LetterHoverEffect from "@/components/scale-letter";
import React from "react";
import { Pagination } from "@/components/ui/pagination";
import Features from "../Features";
import FeaturesFoodDeliveryApp from "../FeaturesFoodDeliveryAoo";




const prev = {
  title: "Home",
  href: "/",
};

const next = {
  title: "Next Work",
  href: "/portfolios",
};

export default function Mosqguard() {
  return (
    <>
     <div className="mx-10 my-10">
        <Pagination next={next} previous={prev} />
    
        </div>
        <div className="mx-5 my-10">
        <LetterHoverEffect text="FOOD DELIVERY APP" />
        </div>
        <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
    <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-gray-700">

            FastGrab is a modern food delivery app UI designed on Figma, featuring a dark theme 
            complemented by deep purple tones. The dark background adds a sleek, premium feel, while the purple color
            stimulates appetite and creativity,creating an engaging and stylish user experience.
    </p>
  </div>
  </section>
  <div>

  </div>
      
 
        <FeaturesFoodDeliveryApp/>
  
    </>
  );
}



