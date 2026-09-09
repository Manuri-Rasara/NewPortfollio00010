import FlowArt, { FlowSection } from '../components/story-scroll';
import charechter from '../public/Assets/Charechter/FullWhiteMe.png';
import charechter1 from '../public/Assets/Charechter/WhiteCharechterMe.png';
import charechter3 from '../public/Assets/Charechter/BlackCharechterMe.png';
import { SpringComponent } from './SpringComponent';
import { MySpringComponent } from './MySpringComponent';
import ProjectMainGridUse from './ProjectMainGridUse';
import LetterHoverLogos from './scale-letter-logos';
import InteractiveBentoGallery from '@/components/interactive-bento-gallery';
import MasonryGridDemo from './MasonryGridDemo';


const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "01",

    url: "/Assets/LogoProject/Ceylon-01.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "02",

    url: "/Assets/LogoProject/Ceylon-07.png",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "03",

    url: "/Assets/LogoProject/Ceylon-03.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "04",

    url: "/Assets/LogoProject/Ceylon-04.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "05",

    url: "/Assets/LogoProject/Ceylon-05.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "06",

    url: "/Assets/LogoProject/Ceylon-06.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "07",

    url: "/Assets/LogoProject/Ceylon-02.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
]



export default function FlowArtDefaultDemo() {
  return (
    <FlowArt aria-label="Présentation Flow Art">
      <FlowSection aria-label="Qui nous sommes" style={{ backgroundColor: '#fd5200', color: '#fff' }}>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold uppercase tracking-[0.2em]">
            ME
          </p>

          {/* <img
    src={charechter.src}
    alt="character"
     className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-24 object-contain"
  /> */}


        </div>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <div className="mb-0">
          <h1
            className="text-[clamp(2.5rem,8vw,10rem)] md:text-[clamp(1.5rem,8vw,10rem)] font-bold leading-[1] "
          >
            I DESIGN
            <br />

            DIGITAL <br /><span className="text-black font-extrabold">EXPERIENCES</span>
          </h1>
        </div>
        <hr className="my-[2vw] border-none border-t border-black opacity-100" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">UI/UX Designer · Graphic Designer · Developer</p>
      </FlowSection>

      <FlowSection aria-label="La mission" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="flex flex-col gap-2 sm:gap-4 w-full h-full justify-start">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold uppercase tracking-[0.2em]">
              DEV/UI WORK
            </p>

            {/* <img
      src={charechter1.src}
      alt="character"
      className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-24 object-contain"
    /> */}
          </div>

          <ProjectMainGridUse />
        </div>
      </FlowSection>


      <FlowSection aria-label="La mission" style={{ backgroundColor: '#000', color: '#fff' }}>
        <div className="flex flex-col gap-2 sm:gap-4 w-full h-full justify-start">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold uppercase tracking-[0.2em]">
              LOGO WORK
            </p>

            {/* <img
      src={charechter1.src}
      alt="character"
      className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-24 object-contain"
    /> */}
          </div>

          <MasonryGridDemo />
        </div>
      </FlowSection>



      <FlowSection aria-label="Présentation Flow Art" style={{ backgroundColor: '#F5F0E8', color: '#000' }}>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold uppercase tracking-[0.2em] text-[#fd5200]">
            Leaves a Mark
          </p>

          {/* <img
            src={charechter3.src}
            alt="character"
            className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-24 object-contain"
          /> */}
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(2.5rem,8vw,10rem)] md:text-[clamp(1.5rem,8vw,10rem)] font-bold leading-[1] "          >
            BE  <br />SEEN.
            <br />
            BE  <br />REMEMBERED.


          </h2>
        </div>
        {/* <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Three steps. Zero complexity. Your creative career starts moving the moment you sign up.
        </p> */}
        {/* <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">01 — Upload</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Drag, drop, done. Your portfolio goes live in seconds with full creative control.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">02 — Connect</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Match with collectors, galleries, and brands actively looking for your style.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">03 — Grow</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Track engagement, manage commissions, and scale your practice — all in one place.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">04 — Sell</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Set your prices, manage editions, handle licensing. Built-in commerce tools.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">05 — Collaborate</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Find your people. Joint projects, split commissions, shared studios.
            </p>
          </div> */}
        {/* <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">06 — Evolve</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Your practice changes. Your platform should too. Flexible tools that adapt.
            </p>
          </div> */}
        {/* </div> */}
      </FlowSection>

      {/* <FlowSection aria-label="La vision" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em]">04 — The vision</p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Future
            <br />
            Of
            <br />
            Art
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          We&apos;re not just building a platform. We&apos;re building a movement.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">10K+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Artists from 80 countries already shaping the future with us.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">$2M+</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Paid directly to creators in our first year. Zero hidden fees.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">100%</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Artist-owned. Every decision we make starts with the creator.
            </p>
          </div>
        </div>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          The art world has been broken for decades. Galleries take 50%. Algorithms bury talent.
          We&apos;re here to change that — permanently.
        </p>
        <hr className="my-[2vw] border-none border-t border-white/50" />
        <div className="flex flex-wrap gap-[3vw]">
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Open access</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              No invite codes. No waiting lists. If you make art, you belong here.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Global reach</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              Your work seen in 120+ countries from day one.
            </p>
          </div>
          <div className="min-w-[180px] flex-1">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider">Artist-first economics</p>
            <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed opacity-75">
              You keep 90% of every sale. The remaining 10% funds the platform and the mission.
            </p>
          </div>
        </div>
      </FlowSection> */}

      <FlowSection aria-label="Nous rejoindre" style={{ backgroundColor: '#1A3DE8', color: '#fff' }}>

        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase tracking-[0.2em]">
            05 — Conatct Me
          </p>

          <img
            src={charechter.src}
            alt="character"
            className="w-10 h-10 sm:w-20 sm:h-20 md:w-28 md:h-24 object-contain"
          />
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <div>
          <h2
            className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight"
          >
            Turn
            <br />
            Idea
            <br />
            Reality
          </h2>
        </div>
        <hr className="my-[2vw] border-none border-t border-black/60" />
        <p className="mt-auto max-w-[50ch] text-[clamp(1rem,2.5vw,2rem)] font-normal leading-relaxed">
          Let’s create work that stands out, feels right, and performs beautifully.
        </p>
      </FlowSection>
    </FlowArt>
  );
}
