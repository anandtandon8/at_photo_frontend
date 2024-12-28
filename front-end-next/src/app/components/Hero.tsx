'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import waterfall from '@/app/assets/img/IMG_2122.jpg';
import sunset from '@/app/assets/img/IMG_2328.jpg';
import mountain from '@/app/assets/img/IMG_2490.jpg';
import car from '@/app/assets/img/IMG_4851.jpg';
import cnTower from '@/app/assets/img/IMG_4885.jpg';
import placeHolderImg from '@/app/assets/img/placeholder-img.png';


interface GalleryImage {
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
  }


const photos1: GalleryImage[] = [
    { src: mountain.src, alt: 'Mountain', width: mountain.width, height: mountain.height, blurDataURL: mountain.blurDataURL },
    { src: waterfall.src, alt: 'Waterfall', width: waterfall.width, height: waterfall.height, blurDataURL: waterfall.blurDataURL },
    { src: sunset.src, alt: 'Sunset', width: sunset.width, height: sunset.height, blurDataURL: sunset.blurDataURL },
    { src: car.src, alt: 'Car', width: car.width, height: car.height, blurDataURL: car.blurDataURL },
    { src: cnTower.src, alt: 'CN Tower', width: cnTower.width, height: cnTower.height, blurDataURL: cnTower.blurDataURL },
    { src: placeHolderImg.src, alt: 'Placeholder', width: placeHolderImg.width, height: placeHolderImg.height, blurDataURL: placeHolderImg.blurDataURL }
]

let photos2 = structuredClone(photos1);

const photoSpeeds = [Math.random()*6+20, Math.random()*6+20];
const firstDir = Boolean(Math.round(Math.random()));
const photoDirections = [firstDir, firstDir];


export const Hero: React.FC = () => {
    const [scrollers, setScrollers] = React.useState<NodeListOf<Element> | null>(null);
    const [imageSrc, setImageSrc] = useState<{ [key: number]: string }>({});
  
    const handleImageError = (index: number) => {
      setImageSrc(prev => ({
        ...prev,
        [index]: placeHolderImg.src
      }));
    };



    useEffect(() => {
        // shuffleArray(photos2);

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

    
    return <div className="w-[90vw] mx-auto pt-2 opacity-90">
        <div className="scroller">
            <div className="scroller-inner">
                {photos1.map((photo, i) => 
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
                            className="filter contrast-[0.8] w-full h-auto object-cover aspect-square rounded-[13px]"
                        />
                    </div>
                )}
            </div>
        </div>
        <div className="scroller">
            <div className="scroller-inner">
                {photos2.map((photo, i) => 
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
}

export default Hero