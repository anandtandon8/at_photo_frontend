'use client'

import React, { useState, useRef } from 'react';
import Image from 'next/image'
import placeHolderImg from '@/app/assets/img/placeholder-img.png';
import TextComponents from '@/app/components/BlogFormat/TextComponents';
import ImageComponents from '@/app/components/BlogFormat/ImageComponents';
import MiscComponents from '@/app/components/BlogFormat/MiscComponents';


interface LineBreak {
    type: 'lineBreak';
}

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
    imageType: 'left' | 'right' | 'centerBreak';    // WRAPPED IMAGES MUST BE BEFORE THE TEXT THAT WRAPS AROUND THEM IN RENDERING ORDER
    wrappedText: Text | BlockQuote | List;
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
}

interface Video {
    type: 'video';
    title: string;
    src: string; // Link
}

interface BlogComponents {
    title: string;
    description: string;
    date: string;
    author: string;
    components: (LineBreak | Text | BlockQuote | List | Image | Video)[];
}


const BlogFormat: React.FC<BlogComponents> = ({ title, description, date, author, components }) => {
    const [imageSrc, setImageSrc] = useState<{ [key: number]: string }>({});
    const fullImgBox = useRef<HTMLDivElement>(null);
    const fullImg = useRef<HTMLImageElement>(null);

    const handleImageError = (index: number) => {
        setImageSrc(prev => ({
        ...prev,
        [index]: placeHolderImg.src
        }));
    };

    const focusImage = (image: Image) => {
        if (fullImgBox.current && fullImg.current) {
            fullImgBox.current.style.display = 'flex';
            fullImg.current.src = image.src;
            console.log(image.src);
        }
    }

    const closeFullImg = () => {
        if (fullImgBox.current) {
            fullImgBox.current.style.display = 'none';
        }
    }
    
    
    return <div>
        <div 
        ref={fullImgBox}
        className="fixed inset-0 hidden bg-black/80 items-center justify-center z-50"
        >
            <div className="relative">
                <img 
                ref={fullImg}
                className="w-auto h-auto max-w-[60vw] max-h-[75vh] object-contain"
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

        <div className="flex items-start">
            <div className="max-w-[70vw] mx-auto sm:mx-auto md:ml-auto md:mr-[10vw] lg:ml-auto lg:mr-[10vw] px-4 pt-12 pb-2">
                <article className="prose lg:prose-xl max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-1 text-black">{title}</h1>
                    <h2 className="text-lg mb-1 text-black">{description}</h2>
                    <p className="mb-[1px] text-gray-700">{author}</p>
                    <p className="mb-6 text-gray-700">{date}</p>
                    {components.map((component, index) => {
                        switch (component.type) {
                            case 'text': 
                                return <TextComponents key={index} text={component} type='text' index={index} />
                            case 'blockquote':
                                return <TextComponents key={index} text={component} type='blockquote' index={index} />
                            case 'list':
                                return <TextComponents key={index} text={component} type='list' index={index} />
                            case 'image':
                                return <ImageComponents 
                                    imageSrc={imageSrc} 
                                    key={index} 
                                    image={component} 
                                    index={index}
                                    handleImageError={handleImageError}
                                    focusImage={focusImage}
                                />
                            case 'video':
                                return <MiscComponents key={index} component={component} type='video' index={index} />
                            case 'lineBreak':
                                return <MiscComponents key={index} component={component} type='lineBreak' index={index} />
                            default:
                                return null;
                        }
                    })}
                    
                </article>
            </div>
        </div>
        <h2 className="text-center text-black text-2xl font-semibold pt-6">Thanks for Reading!</h2>
    </div>
}

export default BlogFormat