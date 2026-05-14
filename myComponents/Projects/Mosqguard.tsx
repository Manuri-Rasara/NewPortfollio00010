"use client"

import LetterHoverEffect from "@/components/scale-letter";
import React from "react";
import { Pagination } from "@/components/ui/pagination";
import Features from "../Features";



const prev = {
  title: "Home",
  href: "/",
};

const next = {
  title: "Next Work",
  href: "#",
};

export default function Mosqguard() {
  return (
    <>
     <div className="mx-10 my-10">
        <Pagination next={next} previous={prev} />
    
        </div>
        <div className="mx-5 my-10">
        <LetterHoverEffect />
        </div>
        <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto">
    <p className="text-base sm:text-lg lg:text-lg leading-relaxed text-gray-700">

            MosqGuard is a mobile application that helps users stay informed
            about mosquito-borne disease risks through real-time alerts,
            hotspot mapping, educational content, and user reports. I designed
            the complete user interface for this app, focusing on a clean,
            intuitive, and accessible user experience. Key features include
            offline access, crowdsourced data integration, and a dedicated
            education hub. The app was built using Flutter for the frontend,
            Node.js with Express.js for the backend, and AWS RDS for the
            database.
    </p>
  </div>
  </section>
  <div>

  </div>
      
 
        <Features/>
  
    </>
  );
}



