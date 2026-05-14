"use client"

import LetterHoverEffectPortfoliosV1 from "../scale-letter-portfolios";
import React from "react";
import { Pagination } from "@/components/ui/pagination";
import Features from "../Features";
import FeaturePortfolio from "../FeaturePortfolio";



const prev = {
  title: "Home",
  href: "/",
};

const next = {
  title: "Next Work",
  href: "#",
};

export default function Portfolios() {
  return (
    <>
     <div className="mx-10 my-10">
        <Pagination next={next} previous={prev} />
    
        </div>
        <div className="mx-5 my-10">
        <LetterHoverEffectPortfoliosV1/>
        </div>
        <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
    <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-gray-700">

            Designed to stand out, this portfolio merges modern black glass aesthetics with high-energy 
            visuals and smooth interactions to showcase my work with confidence and style.
    </p>
  </div>
  </section>
  <div>

  </div>
      
 
        <FeaturePortfolio/>
  
    </>
  );
}



