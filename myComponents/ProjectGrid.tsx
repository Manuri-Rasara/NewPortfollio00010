"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface GalleryHoverCarouselItem {
    id: string;
    title: string;
    summary: string;
    url: string;
    image: string;
}

export default function ProjectGrid({
    heading = "Featured Projects",
    demoUrl = "#",
    items = [
        {
            id: "item-1",
            title: "Fast Grab",
            summary:
                "Food order and booking system.",
            url: "#",
            image:
                "/Assets/SmallVideo/Food_Video1.mp4",
        },
        {
            id: "item-2",
            title: "Portfolio Latest",
            summary:
                "A modern and interactive portfolio website for a web developer.",
            url: "#",
            image:
                "/Assets/Latest Portfolio.png",
        },
        {
            id: "item-3",
            title: "Portfolio with Thunder Bolt",
            summary:
                "A stunning and modern portfolio website for a web developer with a focus on visual design and user experience.",
            url: "#",
            image:
                "/Assets/Dev-Thunder-Portfolio.png",
        },
        {
            id: "item-4",
            title: "Minimalist Simple Portfolio",
            summary:
                "A stunning and modern portfolio website for a web developer.",
            url: "#",
            image:
                "/Assets/DEV-Portfolio.png",
        },
        {
            id: "item-5",
            title: "MOSQGUARD",
            summary:
                "Mobile App UI for Mosquto Resisting App UI.",
            url: "#",
            image:
                "/Assets/App-Mos.png",
        }
    ],
}: {
    heading?: string;
    demoUrl?: string;
    items?: GalleryHoverCarouselItem[];
}) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    // Carousel scroll tracking
    useEffect(() => {
        if (!carouselApi) return;
        const update = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
        };
        update();
        carouselApi.on("select", update);
        return () => {
            carouselApi.off("select", update);
        };
    }, [carouselApi]);

    return (
        <section className="py-32 bg-background w-full">
            <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
                <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
                    <div className="max-w-2xl">
                        <h3 className="text-lg sm:text-xl lg:text-3xl font-medium text-gray-900 dark:text-white leading-relaxed">

                            <span className="text-gray-500 dark:text-gray-400 text-lg sm:text-base lg:text-4xl">PROJECTS</span>
                        </h3>
                    </div>
                    <div className="flex gap-3 mt-4 md:mt-0">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => carouselApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                            className="h-11 w-11 rounded-full cursor-pointer transition-all disabled:opacity-40"
                            aria-label="Previous project"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => carouselApi?.scrollNext()}
                            disabled={!canScrollNext}
                            className="h-11 w-11 rounded-full cursor-pointer transition-all disabled:opacity-40"
                            aria-label="Next project"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="w-full max-w-full">
                    <Carousel
                        setApi={setCarouselApi}
                        opts={{
                            align: "start",
                            breakpoints: { "(max-width: 768px)": { dragFree: true } }
                        }}
                        className="relative w-full max-w-full"
                    >
                        <CarouselContent className="hide-scrollbar -ml-4 sm:-ml-6">
                            {items.map((item) => (
                                <CarouselItem
                                    key={item.id}
                                    className="pl-4 sm:pl-6 basis-[90%] sm:basis-[80%] md:basis-[620px] lg:basis-[720px] xl:basis-[820px] 2xl:basis-[900px] shrink-0 grow-0"
                                >
                                    <Link
                                        href={item.url}
                                        className="group block relative w-full h-[440px] sm:h-[500px] md:h-[540px] lg:h-[600px]"
                                    >
                                        <Card className="overflow-hidden rounded-3xl h-full w-full border border-border/80 group-hover:border-foreground/60 dark:group-hover:border-white/70 group-hover:ring-1 group-hover:ring-foreground/20 dark:group-hover:ring-white/20 bg-card transition-all duration-500 relative group-hover:shadow-2xl">
                                            {/* Image */}
                                            <div className="relative h-full w-full transition-all duration-500 ease-in-out group-hover:h-1/2 overflow-hidden">
                                                {/* <Image
                                                    fill
                                                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 640px, 720px"
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                                /> */}

                                                {item.image.toLowerCase().endsWith(".mp4") ? (
                                                    <video
                                                        src={item.image}
                                                        autoPlay
                                                        muted
                                                        loop
                                                        playsInline
                                                        controls={false}
                                                        preload="auto"
                                                        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <Image
                                                        fill
                                                        sizes="(max-width: 768px) 95vw, (max-width: 1200px) 720px, 900px"
                                                        src={item.image}
                                                        alt={item.title}
                                                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                                    />
                                                )}
                                                {/* Fade overlay at bottom */}
                                                <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </div>

                                            {/* Text Section */}
                                            <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-10 transition-all duration-500 ease-in-out group-hover:h-1/2 flex flex-col justify-center bg-background/95 dark:bg-card/95 backdrop-blur-md opacity-0 group-hover:opacity-100 border-t border-border/60">
                                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground line-clamp-1 pr-14">
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mt-2 sm:mt-3 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                                                    {item.summary}
                                                </p>
                                                <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-border/80 dark:border-border hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-md group-hover:-rotate-45"
                                                    >
                                                        <ArrowRight className="size-5" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
