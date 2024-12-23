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
    author: string;
}

interface List {
    type: 'list';
    listType: 'numbered' | 'bulleted';
    content: string[];
}

interface Image {
    type: 'image';
    imageType: 'left' | 'right' | 'centerBreak';    // WRAPPED IMAGES MUST BE BEFORE THE TEXT THAT WRAPS AROUND THEM IN RENDERING ORDER
    wrappedText: string;
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
    components: (Text | BlockQuote | List | Image | Video)[];
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

        <div className="container mx-auto px-4 pt-12 pb-2">
            <article className="prose lg:prose-xl max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-1 text-black">{title}</h1>
                <h2 className="text-lg mb-1 text-black">{description}</h2>
                <p className="mb-[1px] text-gray-700">{author}</p>
                <p className="mb-6 text-gray-700">{date}</p>
                {components.map((component, index) => {
                    switch (component.type) {
                        case 'text': 
                            const curText = component as Text;
                            switch (curText.textType) {
                                case 'h1':
                                    return <h1 key={index} className="text-4xl font-bold my-4 text-black">{curText.content}</h1>;
                                case 'h2':
                                    return <h2 key={index} className="text-2xl font-semibold my-4 text-black">{curText.content}</h2>;
                                case 'h3':
                                    return <h3 key={index} className="text-xl font-semibold my-2 text-black">{curText.content}</h3>;
                                case 'p':
                                    return <p key={index} className="my-2 text-black">{curText.content}</p>;
                                default: return null;
                            }
                        case 'blockquote':
                            const curBlockQuote = component as BlockQuote;
                            return <div key={index}>
                                <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-6 mb-3 text-black">{curBlockQuote.content}</blockquote>
                                <p className="font-bold text-black pl-4">{'— ' + curBlockQuote.author}</p>
                            </div>;
                        case 'list':
                            const curList = component as List;
                            switch (component.listType) {
                                case 'numbered':
                                    return <ol key={index} className="list-decimal list-inside mb-6 text-black">
                                        {curList.content.map((item, subIndex) => (
                                            <li key={`${index}-${subIndex}`}>{item}</li>
                                        ))}
                                    </ol>;
                                case 'bulleted':
                                    return <ul key={index} className="list-disc list-inside mb-6 text-black">
                                        {component.content.map((item, subIndex) => (
                                            <li key={`${index}-${subIndex}`}>{item}</li>
                                        ))}
                                    </ul>;
                                default: return null;
                            }
                        case 'image':
                            const curImage = component as Image;
                            switch (curImage.imageType) {
                                case 'left':
                                    return <div key={index} className="my-6 flex items-start gap-8">
                                      <div className="flex-shrink-0 w-1/2">
                                        <Image
                                          src={imageSrc[index] || curImage.src}
                                          alt={curImage.alt}
                                          width={curImage.width}
                                          height={curImage.height}
                                          quality={30}
                                          placeholder="blur"
                                          blurDataURL={curImage.blurDataURL || placeHolderImg.blurDataURL}
                                          className="object-contain w-full h-auto"
                                          onError={() => handleImageError(index)}
                                          onClick={() => focusImage(curImage)}
                                        />
                                      </div>
                                      <p className="mt-1 flex-1 text-black">{curImage.wrappedText}</p>
                                  </div>;
                                case 'right':
                                    return <div key={index} className="my-6 flex items-start gap-8">
                                      <p className="mt-1 flex-1 text-black">{curImage.wrappedText}</p>
                                      <div className="flex-shrink-0 w-1/2">
                                        <Image
                                          src={imageSrc[index] || curImage.src}
                                          alt={curImage.alt}
                                          width={curImage.width}
                                          height={curImage.height}
                                          quality={30}
                                          placeholder="blur"
                                          blurDataURL={curImage.blurDataURL || placeHolderImg.blurDataURL}
                                          className="object-contain w-full h-auto"
                                          onError={() => handleImageError(index)}
                                          onClick={() => {focusImage(curImage); console.log(curImage.src)}}
                                        />
                                      </div>
                                  </div>;
                                case 'centerBreak':
                                    return <div key={index} className="my-6 relative text-black mx-auto">
                                    <Image
                                      src={imageSrc[index] || curImage.src}
                                      alt={curImage.alt}
                                      width={curImage.width}
                                      height={curImage.height}
                                      quality={30}
                                      placeholder="blur"
                                      blurDataURL={component.blurDataURL || placeHolderImg.blurDataURL}
                                      className="object-cover w-full h-full"
                                      onError={() => handleImageError(index)}
                                      onClick={() => focusImage(curImage)}
                                    />
                                  </div>;

                                  default: return null;
                            }
                        case 'video':
                            const curVideo = component as Video;
                            return <div key={index}>
                                <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">{curVideo.title}</h2>
                                <iframe
                                    className="w-full aspect-video"
                                    src={curVideo.src}
                                    title={curVideo.title}
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>;
                        default:
                            return null;
                    
                    }
                })}
                <h2 className="text-center text-black text-2xl font-semibold pt-6">Thanks for Reading!</h2>


            </article>
        </div>


        



    </div>
}

export default BlogFormat