import InteractiveBentoGallery from "../../components/interactive-bento-gallery"
import LetterHoverEffect from "@/components/scale-letter";
import LetterHoverLogos from "../scale-letter-logos"
import { Pagination } from "@/components/ui/pagination";


const prev = {
  title: "Home",
  href: "/",
};

const next = {
  title: "Next Work",
  href: "/mosqguard",
};


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
    type:"image",
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

const islandToastMediaItems = [
  {
    id: 1,
    type: "image",
    title: "01",
    url: "/Assets/LogoProject/islandToast-01.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "02",
    url: "/Assets/LogoProject/islandToast-02.png",
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "03",
    url: "/Assets/LogoProject/islandToast-03.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "04",
    url: "/Assets/LogoProject/islandToast-04.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "image",
    title: "05",
    url: "/Assets/LogoProject/islandToast-05.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "image",
    title: "06",
    url: "/Assets/LogoProject/islandToast-06.png",
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "07",
    url: "/Assets/LogoProject/islandToast-07.png",
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
]

export function LogosProject() {
  return (
<div>
       <div className="mx-10 my-10">
            <Pagination next={next} previous={prev} />
        
            </div>
<div className="mx-5 my-5">
    <LetterHoverLogos/>
</div>
    <div>
            
    {/* Bento Grid */}
      <InteractiveBentoGallery
        mediaItems={mediaItems}
      />
      <div className="mx-5 my-5">
   <LetterHoverEffect text="ISLAND TOAST" />
</div>
      <div className="mt-10">
        <InteractiveBentoGallery
          mediaItems={islandToastMediaItems}
        />
      </div>

       
    </div>

    <div>
            
  
      
    </div>

    
    </div>
  )
}
