import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import BlogFormat from "@/app/components/BlogFormat"

import waterfall from '@/app/assets/img/IMG_2122.jpg';
import sunset from '@/app/assets/img/IMG_2328.jpg';
import car from '@/app/assets/img/IMG_4851.jpg';

const components = [
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: "How to Start Photography. That's a big question. I'm going to break it down into a few steps."
    },

    {
        type: 'blockquote' as const,
        content: "\"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.\"",
        author: "Anand Tandon"
    },

    {
        type: 'image' as const,
        imageType: 'centerBreak' as const,
        src: waterfall.src,
        alt: "Waterfall",
        width: waterfall.width,
        height: waterfall.height,
        blurDataURL: waterfall.blurDataURL
    },

    {
        type: 'image' as const,
        imageType: 'left' as const,
        src: sunset.src,
        alt: "Sunset",
        width: sunset.width,
        height: sunset.height,
        widthPercentage: 70,
        blurDataURL: sunset.blurDataURL
    },

    {
        type: 'image' as const,
        imageType: 'right' as const,
        src: car.src,
        alt: "Car",
        width: car.width,
        height: car.height,
        widthPercentage: 60,
        blurDataURL: car.blurDataURL
    }
]

export default function HowToStart() {
    return (
        <main className="bg-white">
            <Header />
            <Navbar />

            <BlogFormat title="How to Start Photography" description="How to Start Photography. That's a big question. I'm going to break it down into a few steps." date="December 23, 2024" author="Anand Tandon" components={components} />
            
            <Contact />
            <Footer />
        </main>
    )
}
