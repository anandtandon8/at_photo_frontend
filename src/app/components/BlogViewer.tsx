import React from 'react';
import BlogBlock from '@/app/components/BlogBlock';

import waterfall from '@/app/assets/img/IMG_2122.jpg';
import sunset from '@/app/assets/img/IMG_2328.jpg';
import mountain from '@/app/assets/img/IMG_2490.jpg';
import car from '@/app/assets/img/IMG_4851.jpg';
import cnTower from '@/app/assets/img/IMG_4885.jpg';


interface Image {
    type: 'image';
    src: string;
    alt: string;
    width: number;
    height: number;
    blurDataURL?: string;
}

const cameraBasicsImage: Image = {
    type: 'image',
    src: waterfall.src,
    alt: 'Waterfall',
    width: waterfall.width,
    height: waterfall.height,
    blurDataURL: waterfall.blurDataURL,
}

const howToStartImage: Image = {
    type: 'image',
    src: sunset.src,
    alt: 'Sunset',
    width: sunset.width,
    height: sunset.height,
    blurDataURL: sunset.blurDataURL,
}

const rulesOfCompositionImage: Image = {
    type: 'image',
    src: car.src,
    alt: 'Car',
    width: car.width,
    height: car.height,
    blurDataURL: car.blurDataURL,
}

const whyPhotographyImage: Image = {
    type: 'image',
    src: cnTower.src,
    alt: 'CN Tower',
    width: cnTower.width,
    height: cnTower.height,
    blurDataURL: cnTower.blurDataURL,
}

const aboutImage: Image = {
    type: 'image',
    src: mountain.src,
    alt: 'Mountain',
    width: mountain.width,
    height: mountain.height,
    blurDataURL: mountain.blurDataURL,
}

interface Exclusion {
    title: string;
}


const BlogViewer: React.FC<Exclusion> = ({title}) => {
    const output = [];
    if (title != "About") {
        output.push(<BlogBlock key={0} title="About" link="/about" image={aboutImage} description="About me." date="December 22, 2024" author="Anand Tandon" />);
    }
    
    if (title != "Camera Basics") {
        output.push(<BlogBlock key={1} title="Camera Basics" link="/blog/camera-basics" image={cameraBasicsImage} description="How to use your typical DSLR and some neat little tricks." date="December 22, 2024" author="Anand Tandon" />);
    }
    /*
    if (title != "How to Start Photography") {
        output.push(<BlogBlock key={2} title="How to Start Photography" link="/blog/how-to-start" image={howToStartImage} description="How to start your photography journey." date="December 22, 2024" author="Anand Tandon" />);
    }
    */

    if (title != "Rules of Composition") {
        output.push(<BlogBlock key={3} title="Rules of Composition" link="/blog/rules-of-composition" image={rulesOfCompositionImage} description="The rules of composition." date="December 22, 2024" author="Anand Tandon" />);
    }
    
    /*
    if (title != "Why Photography") {
        output.push(<BlogBlock key={4} title="Why Photography" link="/blog/why-photography" image={whyPhotographyImage} description="Why I love photography." date='December 22, 2024' author='Anand Tandon' />);
    }
    */

    return output;
};

export default BlogViewer;