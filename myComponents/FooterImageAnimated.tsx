"use client"
 
import { cn } from "@/lib/utils"
 
import { FloatingElements } from "@/components/floating-elements"
 
const logos = [
  {
   img: "/Assets/Logos/figma-icon.svg",
    link: "#",
    bgColor: "bg-[#0f0f10]",
  },
  {
    img: "/Assets/Logos/react-icon.svg",
    link: "#",
    bgColor: "bg-[#023fee]",
  },
  {
    img: "/Assets/Logos/xd-icon.svg",
    link: "#",
    bgColor: "bg-[#060d1c]",
  },
  {
    img: "/Assets/Logos/tailwind-icon.svg",
    link: "#",
    bgColor: "bg-[#0e132a]",
  },
  {
    img: "/Assets/Logos/github-icon.svg",
    link: "#",
    bgColor: "bg-[#060d1c]",
  },
  {
    img: "/Assets/Logos/vite-icon.svg",
    link: "#",
    bgColor: "bg-[#ffffff]",
  },
  {
    img: "/Assets/Logos/typescript-icon.svg",
    link: "#",
    bgColor: "bg-[#006fee]",
  },
]
 
export default function FloatingElementsDemo() {
  return (
    <FloatingElements title="Trusted by" className="py-20">
      {logos.map((logo, i) => (
        <a
          key={i}
          href={logo.link}
          className={cn(
            `relative flex h-20 w-20 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition duration-500 ease-in-out hover:scale-100 sm:hover:scale-110`,
            logo.bgColor
          )}
        >
          <img
            src={logo.img}
            alt={`${logo.link} logo`}
            className="h-10 w-auto object-contain"
          />
        </a>
      ))}
    </FloatingElements>
  )
}
 