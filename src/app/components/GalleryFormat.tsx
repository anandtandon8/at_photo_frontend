'use client'

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import placeHolderImg from '@/app/assets/img/placeholder-img.png';
import downArrow from '@/app/assets/img/down-arrow.png';
import Link from 'next/link';

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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const fullImgBox = useRef<HTMLDivElement>(null);
  const [enlargedImage, setEnlargedImage] = useState(placeHolderImg);
  const GalleryDiv = useRef<HTMLDivElement>(null);
  const buttonDiv = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = (index: number) => {
    setImageSrc(prev => ({
      ...prev,
      [index]: placeHolderImg.src
    }));
  };

  const focusImage = (image: GalleryImage) => {
    if (fullImgBox.current) {
      fullImgBox.current.style.display = 'flex';
      if (enlargedImage.src === image.src) {
        setTimeout(() => setImageLoaded(true), 120);
      }
      setEnlargedImage(image);
      setShowScrollButton(false);
      if (buttonDiv.current) {
        buttonDiv.current.style.pointerEvents = 'none';
      }
    }
  }

  const closeFullImg = () => {
    if (fullImgBox.current) {
      fullImgBox.current.style.display = 'none';
      setImageLoaded(false);
      handleScroll()
    }
    setImageLoaded(false);
  }

  const scrollToBottom = () => {
    const lastImageBottom = document.getElementById('last-image-bottom');
    setShowScrollButton(false);
    if (lastImageBottom) {
      lastImageBottom.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const handleScroll = () => {
    if (GalleryDiv.current) {
      if ((GalleryDiv.current.getBoundingClientRect().bottom - window.innerHeight) > 400) {
        if (fullImgBox.current?.style.display === 'none') {
          setShowScrollButton(true);
          if (buttonDiv.current) {
              buttonDiv.current.style.pointerEvents = 'auto';
          }
        }
      }
      else {
          setShowScrollButton(false);
          if (buttonDiv.current) {
              buttonDiv.current.style.pointerEvents = 'none';
          }
      }
  }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={GalleryDiv} className="container max-w-[90%] mx-auto py-8 text-black justify-center">
      <h1 className="text-3xl pl-[2px] font-bold mb-4 text-black">{title}</h1>
      {description && <p className="text-lg pl-[3px] mb-6 text-black">{description}</p>}
      <div 
        ref={fullImgBox}
        className="h-screen w-screen fixed inset-0 hidden bg-black/80 items-center justify-center z-50"
        style={{display: 'none'}}
      >
        <div className="relative">
            <img
                src={enlargedImage.src}
                width={enlargedImage.width}
                height={enlargedImage.height}
                className="w-auto h-auto max-w-[65vw] max-h-[75vh] object-contain rounded-xl"
                alt="Enlarged view"
                onLoad={() => setImageLoaded(true)}
            />
                <span 
                    onClick={closeFullImg}
                    className={`absolute top-[-72px] right-[-56px] text-white text-6xl cursor-pointer hover:text-gray-300 transition-opacity duration-[600ms] ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    ×
                </span>
        </div>
        
      </div>
        <div ref={buttonDiv} className={`fixed bottom-10 right-3 z-50 transition-opacity duration-300 ${showScrollButton ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={scrollToBottom}
            className="btn btn-circle w-12 h-12 bg-neutral-100 hover:bg-neutral-300 btn-ghost text-white"
          >
            <Image src={downArrow} alt="down arrow" className="w-7 h-7"/>
          </button>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-full mx-auto justify-center">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-visible max-w-full text-black cursor-pointer">
            <img
              src={imageSrc[index] || image.src}
              alt={image.alt}
              style={{ display: 'none' }}
              width={image.width}
              height={image.height}
              className="object-cover w-full rounded-md h-full will-change-transform transition-all duration-300 hover:[transform:scale(1.03)]"
              onError={() => handleImageError(index)}
              onClick={() => focusImage(image)}
              onLoad={(e) => {
                const imgElement = e.currentTarget;
                imgElement.style.display = 'block';
              }}
            />
          </div>
        ))}
        <div id="last-image-bottom"></div>
      </div>
    </div>
  );
};

export default GalleryFormat;
