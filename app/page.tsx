"use client"

import FlowArtDefaultDemo from "@/myComponents/FlowArtDefaultDemo";
import Work from "@/myComponents/Work";
import Image from "next/image";
import { Knowladge } from "@/myComponents/Knowladge";
import { Links } from "@/myComponents/Links";
import Parallax from "@/myComponents/Parallex";
import Connect from "@/myComponents/Connect";
import { ResumeDownload } from "@/myComponents/ResumeDownload";
import { useState, useCallback, useEffect } from "react"
import Preloader from "@/components/preloader"

const DemoOne = () => {
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.location.hash === '#work' || sessionStorage.getItem("preloaderShown")) {
        setShowPreloader(false);
      }
    }
  }, []);

  const handleComplete = useCallback(() => {
    sessionStorage.setItem("preloaderShown", "true");
    setShowPreloader(false)
  }, [])

  const handleReplay = useCallback(() => {
    setShowPreloader(true)
  }, [])


 return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
    <div className="overflow-hidden">
      <FlowArtDefaultDemo />
      <Work />
      <Knowladge/>
       <Parallax/>
       <Connect/>
       <ResumeDownload/>

  
    </div>
    </>
  );
}

export default DemoOne;
