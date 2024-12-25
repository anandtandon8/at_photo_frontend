'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import placeHolderImg from '@/app/assets/img/placeholder-img.png';
import TextComponent from '@/app/components/BlogFormat/TextComponents'


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
    wrappedText: Text | BlockQuote | List;
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

    switch (image.imageType) {
        case 'left':
            return <div key={index} className="my-6 flex items-start gap-8">
                <div className="flex-shrink-0 w-1/2">
                    <Image
                    src={imageSrc[index] || image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={30}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
                    className="object-contain w-full h-auto"
                    onError={() => handleImageError(index)}
                    onClick={() => focusImage(image)}
                    />
                </div>
                <TextComponent text={image.wrappedText} type={image.wrappedText.type} index={index} />
            </div>;
        case 'right':
            return <div key={index} className="my-6 flex items-start gap-8">
                <TextComponent text={image.wrappedText} type={image.wrappedText.type} index={index} />
                <div className="flex-shrink-0 w-1/2">
                    <Image
                    src={imageSrc[index] || image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    quality={30}
                    placeholder="blur"
                    blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
                    className="object-contain w-full h-auto"
                    onError={() => handleImageError(index)}
                    onClick={() => {focusImage(image)}}
                    />
                </div>
            </div>;
        case 'centerBreak':
            return <div key={index} className="my-6 relative text-black mx-auto">
                <Image
                src={imageSrc[index] || image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                quality={30}
                placeholder="blur"
                blurDataURL={image.blurDataURL || placeHolderImg.blurDataURL}
                className="object-cover w-full h-full"
                onError={() => handleImageError(index)}
                onClick={() => focusImage(image)}
                />
            </div>;

        default: return null;
    }
}

export default ImageComponent;
