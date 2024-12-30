import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


interface Image {
    type: 'image';
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
}

interface BlogBlockProps {
    title: string;
    link: string;
    image: Image;
    description: string;
    date: string;
    author: string;
}

const BlogBlock: React.FC<BlogBlockProps> = ({ title, link, image, description, date, author }) => {
    return (
    <div className="w-[60vw] lg:w-[22vw] xl:w-[20vw] bg-white rounded-xl lg:rounded-lg shadow-md overflow-hidden mb-10 will-change-transform transition-all duration-300 hover:[transform:scale(1.04)]">
        <div className="h-48 overflow-hidden">
            <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover"
                quality={40}
                width={image.width}
                height={image.height}
                blurDataURL={image.blurDataURL}
                placeholder="blur"
            />
        </div>
        <div className="px-4 pt-4 pb-6 overflow-hidden">
            <p className="text-gray-500 text-sm mb-2">{date}</p>
            <h3 className="text-lg font-semibold text-gray-800">
            {title}
            </h3>
            <p className="text-gray-600 mb-6">{description}</p>
            <Link href={link} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
                Read Now
            </Link>
        </div>
    </div>
    );
};

export default BlogBlock;