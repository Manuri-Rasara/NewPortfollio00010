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
import CookieConsent from "react-cookie-consent"
import WhatsAppIcon from "../public/Assets/Logos/WhatsAppIconLogo.png";
import FloatingElementsDemo from "@/myComponents/FooterImageAnimated";
import { RadialOrbitalTimelineDemo } from "@/myComponents/ParallexContentBlocks";


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
       <RadialOrbitalTimelineDemo/>
       <Connect/>
       <ResumeDownload/>
   



  
     

  

      {!showPreloader && (
        <a
          href="https://wa.me/94787531134?text=Hello%20Manuri%2C%20I%E2%80%99m%20interested%20in%20your%20design%20and%20development%20services.%20I%E2%80%99d%20love%20to%20connect%20and%20discuss%20a%20project."
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Open WhatsApp chat"
        >
           <Image
    src={WhatsAppIcon}
    alt="WhatsApp"
    width={64}
    height={64}
  />
        </a>
      )}

      <CookieConsent
        location="bottom"
        buttonText="Accept All"
        declineButtonText="Decline"
        enableDeclineButton
        expires={150}
        style={{ background: "#000000", color: "white", bottom: "80px", zIndex: 9999 }}
        buttonStyle={{ background: "#ffffff", color: "#000000", borderRadius: "8px", height: "36px", padding: "0 20px",fontSize:"12px" }}
        declineButtonStyle={{ background: "transparent", border: "1px solid #ffffff", color: "white", borderRadius: "8px", height: "36px", padding: "0 20px",fontSize:"12px" }}
        buttonClasses="cookie-consent-button"
        declineButtonClasses="cookie-consent-decline-button"
        buttonWrapperClasses="cookie-consent-button-wrapper"
      >
        <div className="flex items-center justify-left rounded-2xl text-sm">
        <p>🍪 This website uses cookies for a smoother and more seamless experience.</p>
      </div>
      

      </CookieConsent>
    </div>
    </>
  );
}

export default DemoOne;
