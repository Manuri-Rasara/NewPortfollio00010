import { Gallery } from "../components/Gallery";

// Our R2 artwork, alternating photos with gradients — the same set as the
// Halo Reel demo. Portrait sources are cropped to the tiles by object-cover.
const CDN = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev";

const IMAGES = [
    {
        src: "/Assets/App-Mos.png",
        alt: "Diver silhouetted inside a sunset seascape shaped like a profile",
    },
    {
        src: "/Assets/App-UI-Food-Delivery.png",
        alt: "Soft multi-tone gradient wash",
    },
    {
        src: "/Assets/Logo-Toast.png",
        alt: "Double-exposure portrait blended with a city skyline at dusk",
    },
    {
        src: "/Assets/islandToast-Back.webp",
        alt: "Moon-toned gradient",
    },
    {
        src: "/Assets/Latest Portfolio.png",
        alt: "Motion-blurred side-profile portrait against a deep orange backdrop",
    },
    {
        src: "/Assets/DEV-Portfolio.png",
        alt: "Shifting shade gradient",
    },
    {
        src: "/Assets/Mos-Back.webp",
        alt: "Figure holding a racket that dissolves into a swirling colourful cloud",
    },
    {
        src: "/Assets/Food-back.webp",
        alt: "Shifting shade gradient",
    },
    {
        src: "/Assets/UI-Orange-Portfolio.png",
        alt: "Hand gesture with a colourful cutout of a bird flying through the fingers",
    },
    {
        src: "/Assets/UI-Johndoe-Portfolio-Black.png",
        alt: "Moon-toned gradient",
    },
];

export default function MyGallery() {
    return (
        <Gallery
            images={IMAGES}
            className="h-[660px] w-full rounded-lg border border-border bg-[#F1F1F1]"
        >
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
                <div className="px-6">
                    <h1 className="text-balance text-4xl font-medium tracking-tight text-[#2196F3] sm:text-5xl">
                        Where ideas,
                        <br />
                        find their form.
                    </h1>
                </div>
                <p className="max-w-md text-balance px-6 text-sm text-[#000000]">
                    I craft digital experiences through UI/UX design, creative branding,
                    and web development, turning ideas into beautiful, functional,
                    and meaningful creations.
                </p>
            </div>
        </Gallery>
    );
}
