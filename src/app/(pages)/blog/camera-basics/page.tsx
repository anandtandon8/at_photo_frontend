import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import BlogFormat from "@/app/components/BlogFormat"

import waterfall from '@/app/assets/img/IMG_2122.jpg';
import sunset from '@/app/assets/img/IMG_2328.jpg';
import car from '@/app/assets/img/IMG_4851.jpg';


const components = [
    {
        type: 'text' as const,
        textType: 'h1' as const,
        content: 'Welcome to My New Blog Post'
    },
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: 'This is a paragraph of filler text to demonstrate the blog format. It provides an example of how text can be structured within the blog post.'
    },
    {
        type: 'image' as const,
        imageType: 'centerBreak' as const,
        src: waterfall.src,
        alt: 'Waterfall',
        width: waterfall.width,
        height: waterfall.height,
        blurDataURL: waterfall.blurDataURL
    },
    {
        type: 'text' as const,
        textType: 'h2' as const,
        content: 'Subheading Example'
    },
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: 'Here is another paragraph of filler text. This section can be used to elaborate on the topic introduced in the subheading.'
    },
    {
        type: 'blockquote' as const,
        content: 'This is a sample blockquote to highlight important information.',
        author: 'Author Name'
    },
    {
        type: 'list' as const,
        listType: 'bulleted' as const,
        listTitle: 'Bullet List',
        content: [
            { type: 'bulletPoint' as const, title: 'First bullet point:', content: 'First bullet point' },
            { type: 'bulletPoint' as const, title: 'Second bullet point:', content: 'Second bullet point' },
            { type: 'bulletPoint' as const, title: 'Third bullet point:', content: 'Third bullet point' }
        ]
    }
];

export default function CameraBasics() {
    return (
        <main className="bg-white overflow-hidden">
            <Header />
            <Navbar />

            <BlogFormat
                title='Camera Basics'
                description="Another filler blog. Will be writing blogs soon!"
                date='December 22, 2024'
                author='Anand Tandon'
                components={components}
            />

            <Contact />
            <Footer />
        </main>
    )
}
