'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import placeHolderImg from '@/app/assets/img/placeholder-img.png';

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

interface GalleryFormatProps {
  images: GalleryImage[];
  title: string;
  description?: string;
}

const GalleryFormat: React.FC<GalleryFormatProps> = ({ images, title, description }) => {
  const [imageSrc, setImageSrc] = useState<{ [key: number]: string }>({});
  const fullImgBox = useRef<HTMLDivElement>(null);
  const fullImg = useRef<HTMLImageElement>(null);

  const handleImageError = (index: number) => {
    setImageSrc(prev => ({
      ...prev,
      [index]: placeHolderImg.src
    }));
  };

  const focusImage = (image: GalleryImage) => {
    if (fullImgBox.current && fullImg.current) {
      fullImgBox.current.style.display = 'flex';
      fullImg.current.src = image.src;
    }
  }

  const closeFullImg = () => {
    if (fullImgBox.current) {
      fullImgBox.current.style.display = 'none';
    }
  }

  return (
    <div className="container max-w-[90%] mx-auto py-8 text-black justify-center">
      <h1 className="text-3xl pl-[2px] font-bold mb-4 text-black">{title}</h1>
      {description && <p className="text-base pl-[3px] mb-6 text-black">{description}</p>}
      <div 
        ref={fullImgBox}
        className="fixed inset-0 hidden bg-black/80 items-center justify-center z-50"
      >
        <div className="relative">
            <img 
            ref={fullImg}
            className="w-auto h-auto max-w-[80vh] max-h-[80vh] object-contain"
            alt="Enlarged view"
            />
            <span 
                onClick={closeFullImg}
                className="absolute -top-[72px] -right-[56px] text-white text-6xl cursor-pointer hover:text-gray-300"
            >
                ×
            </span>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[100%] mx-auto justify-center">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-visible max-w-[420px] sm:max-w-full text-black">
            <Image
              src={imageSrc[index] || image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality={30}
              placeholder="blur"
              blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
              className="object-cover w-full h-full will-change-transform transition-all duration-300 hover:[transform:scale(1.03)]"
              onError={() => handleImageError(index)}
              onClick={() => focusImage(image)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryFormat;
