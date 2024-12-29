'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import placeHolderImg from '@/app/assets/img/placeholder-img.png';


interface Text {
    type: 'text';
    textType: 'h1' | 'h2' | 'h3' | 'p';
    content: string;
}

interface BlockQuote {
    type: 'blockquote';
    content: string;
    author?: string;
}

interface BulletPoint {
    type: 'bulletPoint';
    title?: string;
    content: string;
}

interface List {
    type: 'list';
    listType: 'numbered' | 'bulleted';
    listTitle?: string;
    content: BulletPoint[];
}

interface Image {
    type: 'image';
    imageType: 'left' | 'right' | 'centerBreak';
    wrappedText?: Text | BlockQuote | List;
    widthPercentage?: number;
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
}

interface ImageComponentProps {
    imageSrc: Record<number, string>;
    image: Image;
    index: number;
    handleImageError: (index: number) => void;
    focusImage: (image: Image) => void;
}


const ImageComponent: React.FC<ImageComponentProps> = ({
    imageSrc, 
    image, 
    index,
    handleImageError,
    focusImage,
}) => {

    if (!image.widthPercentage) image.widthPercentage = 50;

    switch (image.imageType) {
        case 'left':
            return <div style={{width: `${image.widthPercentage}%`}} key={index} className="relative float-left mr-7 mb-2 cursor-pointer">
                <Image
                    src={imageSrc[index] || image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={40}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
                    className="object-contain w-full h-auto rounded-xl pointer-events-auto"
                    onError={() => handleImageError(index)}
                    onClick={() => focusImage(image)}
                />
            </div>;
        case 'right':
            return <div style={{width: `${image.widthPercentage}%`}} key={index} className="relative float-right ml-7 mb-2 cursor-pointer">
                <Image
                    src={imageSrc[index] || image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={40}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
                    className="object-contain w-full h-auto rounded-xl pointer-events-auto"
                    onError={() => handleImageError(index)}
                    onClick={() => focusImage(image)}
                />
            </div>;
        case 'centerBreak':
            return <div key={index} className="relative mb-4 text-black mx-auto cursor-pointer">
                <Image
                src={imageSrc[index] || image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={50}
                placeholder="blur"
                blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
                className="object-cover w-full h-full rounded-2xl"
                onError={() => handleImageError(index)}
                onClick={() => focusImage(image)}
                />
            </div>;

        default: return null;
    }
}

export default ImageComponent;
