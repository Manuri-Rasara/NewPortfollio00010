import { Logos3 } from "../components/logos3"

const demoData = {
  // heading: "Trusted by these companies",
  logos: [
    {
      id: "logo-1",
      description: "Astro",
      image: "/Assets/Logos/figma-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "/Assets/Logos/react-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "/Assets/Logos/xd-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "/Assets/Logos/tailwind-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-5",
      description: "shadcn/ui",
      image: "/Assets/Logos/github-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-6",
      description: "Supabase",
      image: "/Assets/Logos/vite-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "/Assets/Logos/typescript-icon.svg",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "Vercel",
      image: "/Assets/Logos/vscode-icon.svg",
      className: "h-12 w-auto",
    },
  ],
};

function Knowladge() {
  return <Logos3 {...demoData} />;
}

export { Knowladge };
