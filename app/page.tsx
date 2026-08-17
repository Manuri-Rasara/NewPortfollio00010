"use client";



import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

import FlowArtDefaultDemo from "@/myComponents/FlowArtDefaultDemo";
import Work from "@/myComponents/Work";
import { Knowladge } from "@/myComponents/Knowladge";
import Parallax from "@/myComponents/Parallex";
import Connect from "@/myComponents/Connect";
import { ResumeDownload } from "@/myComponents/ResumeDownload";
import { RadialOrbitalTimelineDemo } from "@/myComponents/ParallexContentBlocks";

import Preloader from "@/components/preloader";

import CookieConsent from "react-cookie-consent";

import WhatsAppIcon from "../public/Assets/Logos/WhatsAppIconLogo.png";
import Superman from "@/myComponents/Superman";
import { ProjectShowcase } from "@/components/project-showcase";
import ProjectGrid from "@/myComponents/ProjectGrid";



export default function DemoOne() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Prevent browser restoring scroll
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (sessionStorage.getItem("preloaderShown")) {
      setShowPreloader(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || showPreloader) return;

    const hash = window.location.hash;

    if (hash) {
      const target = document.getElementById(hash.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Always start from top when no hash anchor is present
      window.scrollTo(0, 0);
    }
  }, [showPreloader]);

  const handleComplete = useCallback(() => {
    const alreadyShown = sessionStorage.getItem("preloaderShown");

    if (!alreadyShown) {
      sessionStorage.setItem("preloaderShown", "true");

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }

    requestAnimationFrame(() => {
      setShowPreloader(false);
    });
  }, []);

  // IMPORTANT: Don't render page until preloader finishes
  if (showPreloader) {
    return <Preloader onComplete={handleComplete} />;
  }

  return (
    <div id="FirstSection" className="overflow-hidden">
      <FlowArtDefaultDemo />

      {/* <Work /> */}
      <ProjectGrid />

      <Knowladge />


      <div className=" h-15 mt-50 mb-10  align-baseline">

        <Superman />

      </div>

      <div className="flex justify-center">


        <p className="text-2xl md:text-4xl "><span className="satisfy-regular text-4xl md:text-6xl text-orange-500">me.</span>Unstoppable.⚡</p>
      </div>



      <section id="parallax">
        <Parallax />
      </section>
      <RadialOrbitalTimelineDemo />

      <Connect />


      <ResumeDownload />



      <a
        href="https://wa.me/94787531134?text=Hello%20Manuri%2C%20I%E2%80%99m%20interested%20in%20your%20design%20and%20development%20services.%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20a%20project."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300"
        aria-label="Open WhatsApp chat"
      >
        <Image
          src={WhatsAppIcon}
          alt="WhatsApp"
          width={64}
          height={64}
        />
      </a>

      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline"
        enableDeclineButton
        expires={150}
        style={{
          background: "#000000",
          color: "white",
          bottom: "80px",
          zIndex: 9999,
        }}
        buttonStyle={{
          background: "#ffffff",
          color: "#000000",
          borderRadius: "8px",
          height: "36px",
          padding: "0 20px",
          fontSize: "12px",
        }}
        declineButtonStyle={{
          background: "transparent",
          border: "1px solid #ffffff",
          color: "white",
          borderRadius: "8px",
          height: "36px",
          padding: "0 20px",
          fontSize: "12px",
        }}
      >
        <div className="flex items-center justify-left rounded-2xl text-sm">
          <p>
            🍪 This website uses cookies for a smoother and more seamless
            experience.
          </p>
        </div>
      </CookieConsent>
    </div>
  );
}