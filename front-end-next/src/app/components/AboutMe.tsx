'use client'

import React, { useState } from 'react';
import ImageComponents from '@/app/components/BlogFormat/ImageComponents';

import aboutMe from '@/app/assets/img/IMG_2122.jpg';
import placeHolderImg from '@/app/assets/img/placeholder-img.png';
import TextComponents from '@/app/components/BlogFormat/TextComponents';


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

const aboutMeImage:Image = {
    type: 'image',
    imageType: 'right',
    widthPercentage: 50,
    src: aboutMe.src,
    alt: 'About Me',
    width: aboutMe.width,
    height: aboutMe.height,
    blurDataURL: aboutMe.blurDataURL
}




export const AboutMe:React.FC = () => {

    const [imageSrc, setImageSrc] = useState<{ [key: number]: string }>({});

    const handleImageError = (index: number) => {
        setImageSrc(prev => ({
        ...prev,
        [index]: placeHolderImg.src
        }));
    };

    const focusImage = (image: Image) => {
        console.log(image);
    }

    return <div className="px-[21vw] w-auto h-auto">
        <div className="pt-4 flex justify-center mb-4">
            <TextComponents
                text={
                    {
                        type: 'text',
                    textType: 'h1',
                    content: 'About Me'
                }
            }
                type='text'
                index={-1}
            />
        </div>

        <ImageComponents
            imageSrc={aboutMeImage.src}
            image={aboutMeImage}
            index={-1}
            handleImageError={handleImageError}
            focusImage={focusImage}
        />

        <div className="relative -right-3">
            <div className="">
                <TextComponents
                    text={
                        {
                            type: 'text',
                        textType: 'h2',
                        content: "Well, I'm a photographer obviously."
                    }
                }
                type='text'
                index={-2}
                />
            </div>

            <div className="-mb-1">
                <TextComponents
                    text={
                        {
                            type: 'text',
                            textType: 'h3',
                            content: "But I'm also someone who really likes programming."
                        }
                    }
                    type='text'
                    index={-3}
                />
            </div>

            <div className="-mb-1">
                <TextComponents
                    text={
                        {
                            type: 'text',
                            textType: 'p',
                            content: `I always thought these were two different sides of me,
                            but I recently realized they complement each other in an amazing way.
                            I've become a strong believer in having a creative outlet, and I feel that
                            photography has made me a better programmer.`
                        }
                    }
                    type="text"
                    index={-3}
                />
            </div>
            
            <TextComponents
                text={
                    {
                        type: 'text',
                        textType: 'p',
                        content: `On the other hand, I never truly felt that programming benefitted my photography, 
                        but without programming, I could never have made this website to showcase my work.
                        Although I have decided to focus on programming by pursuing a career as a software engineer, 
                        Photography will always be a part of my life, and one day I will be able to make something of it 
                        (I would absolutely love to produce and film a nature documentary series someday).`
                    }
                }
                type="text"
                index={-4}
            />
        </div>
        <div key={`clear-${0}`} className="clear-both" />
    </div>
}

export default AboutMe