import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import BlogFormat from "@/app/components/BlogFortmat"

import waterfall from '@/app/assets/img/IMG_2122.jpg';
import sunset from '@/app/assets/img/IMG_2328.jpg';
import car from '@/app/assets/img/IMG_4851.jpg';


const components = [
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

    {
        type: 'blockquote' as const,
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        author: "Anand Tandon"
    },

    {
        type: 'image' as const,
        imageType: 'left' as const,
        wrappedText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        src: waterfall.src,
        alt: 'Waterfall',
        width: waterfall.width,
        height: waterfall.height,
        blurDataURL: waterfall.blurDataURL
    },

    {
        type: 'text' as const,
        textType: 'p' as const,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },

    {
        type: 'image' as const,
        imageType: 'right' as const,
        wrappedText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        src: sunset.src,
        alt: 'Sunset',
        width: sunset.width,
        height: sunset.height,
        blurDataURL: sunset.blurDataURL
    },

    {
        type: 'text' as const,
        textType: 'h2' as const,
        content: "David is a Monkey"
    },

    {
        type: 'image' as const,
        imageType: 'centerBreak' as const,
        wrappedText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        src: car.src,
        alt: 'Car',
        width: car.width,
        height: car.height,
        blurDataURL: car.blurDataURL
    }

]




export default function CameraBasics() {
    return (
        <main className="bg-white">
            <Header />
            <Navbar />

            <BlogFormat
                title='Camera Basics'
                description="How to use your typical DSLR and some neat little tricks."
                date='December 22, 2024'
                author='Anand Tandon'
                components={components}
            />

            <Contact />
            <Footer />
        </main>
    )
}
