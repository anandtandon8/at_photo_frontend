'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import placeHolderImg from '@/app/assets/img/placeholder-img.png';


interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
}


interface HeroProps {
    row1: GalleryImage[];
    row2: GalleryImage[];
}

const firstSpeed = Math.random()*5+24;
const photoSpeeds = [firstSpeed, firstSpeed + (Boolean(Math.round(Math.random())) ? (Math.random()*4+2) : (-(Math.random()*4+2)))];
const firstDir = Boolean(Math.round(Math.random()));
const photoDirections = [firstDir, firstDir];


export const Hero: React.FC<HeroProps> = ({ row1, row2 }) => {
    const [scrollers, setScrollers] = React.useState<NodeListOf<Element> | null>(null);
    const [imageSrc, setImageSrc] = useState<{ [key: number]: string }>({});
    const heroDiv = useRef<HTMLDivElement>(null);
  
    const handleImageError = (index: number) => {
      setImageSrc(prev => ({
        ...prev,
        [index]: placeHolderImg.src
      }));
    };



    useEffect(() => {
        // shuffleArray(photos2);
        setTimeout(() => {
            if (heroDiv.current) {
                heroDiv.current.classList.add('opacity-100');
            }
        }, 0)

        setTimeout(() => {
            const scrollerElements = document.querySelectorAll('.scroller');
            setScrollers(scrollerElements);
            
            if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                if (scrollerElements.length > 0) {
                    scrollerElements.forEach((scroller, index) => {
                        const scrollerElement = scroller as HTMLElement;
                        scrollerElement.setAttribute("data-animated", "true");

                        const scrollerInner = scroller.querySelector('.scroller-inner');
                        if (scrollerInner) {
                            const scrollerContent = Array.from(scrollerInner.children);
                            scrollerContent.forEach(item => {
                                const duplicatedItem = item.cloneNode(true) as HTMLElement;
                                duplicatedItem.setAttribute("aria-hidden", "true");
                                scrollerInner.appendChild(duplicatedItem);
                            });
                        }

                        scrollerElement.style.setProperty("--scroll-time", photoSpeeds[index].toString() + "s");
                        scrollerElement.setAttribute("data-direction", photoDirections[index] ? "right" : "left");
                    });
                }
                else {
                    console.log("No scrollers found");
                }
            }
        }, 0);
    }, []);

    
    return <div ref={heroDiv} className="mx-auto flex justify-center items-center mt-5 opacity-0 transition-opacity duration-[1400ms]">
        <div className="mx-auto max-w-[80vw] absolute z-10 text-4xl md:text-5xl lg:text-6xl text-black mb-5 mt-auto lg:mb-10 xl:mb-20">
            <h1 className="font-inter pb-2 md:pb-3 lg:pb-5">ATPHOTO PRESENTS...</h1>
            <div className="flex">
                <h1 className="font-inter text-black mr-4 ">AN</h1>
                <h1 className="font-inter text-white hover:text-red-600 transition-colors duration-300 mr-4 pb-1">INTERACTIVE</h1>
                <h1 className="font-inter text-black hidden xl:block pb-1">PHOTOGRAPHY</h1>
            </div>
            <h1 className="font-inter text-black block xl:hidden pb-1">PHOTOGRAPHY</h1>
            <h1 className="font-inter text-black pb-2 md:pb-3 lg:pb-5">PORTFOLIO</h1>
            <p className="text-lg sm:text-xl md:text-2xl font-[500] mb-2 sm:mb-0 md:-mb-2">View some of my personal favourites here:</p>
            <Link href="/favourites">
                <button className="btn sm:btn-md -mt-10 relative overflow-hidden bg-transparent btn-ghost text-white w-32 md:w-40">
                    <span className="relative z-10 text-base font-[600]">Favourites</span>
                    <span className="absolute inset-0 bg-neutral-500 z-0 transition-opacity duration-[500ms]"></span>
                </button>
            </Link>
        </div>
        <div className="w-[90vw] mx-auto pt-2 opacity-50 z-0">
            <div className="scroller">
                <div className="scroller-inner">
                    {row1.map((photo, i) => 
                        <div 
                            key={i} 
                            className="w-52 md:w-64 xl:w-72 flex-shrink-0"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                                quality={30}
                                onError={() => handleImageError(i)}
                                placeholder="blur"
                                blurDataURL={photo.blurDataURL}
                                loading="eager"
                                className="filter contrast-[0.8] w-full h-auto object-cover aspect-square rounded-[13px]"
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="scroller">
                <div className="scroller-inner">
                    {row2.map((photo, i) => 
                        <div 
                            key={i} 
                            className="w-52 md:w-64 xl:w-72 flex-shrink-0"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                                quality={30}
                                className="filter contrast-[0.8] w-full h-auto object-cover aspect-square rounded-[13px]"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
}

export default Hero