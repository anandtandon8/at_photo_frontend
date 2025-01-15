import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import BlogFormat from "@/app/components/BlogFormat"

import car from '@/app/assets/img/IMG_4851.jpg';

const components = [
    {
        type: 'text' as const,
        textType: 'h2' as const,
        content: 'How do we learn composition?'
    },
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.'
    },
    {
        type: 'image' as const,
        imageType: 'right' as const,
        wrappedText: {
            type: 'text' as const,
            textType: 'p' as const,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras vehicula, mi eget dapibus facilisis, sapien justo cursus urna, at sollicitudin sapien justo a libero. Integer nec odio nec mi facilisis fermentum. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget tincidunt nunc nisl sit amet lorem. Nullam ac erat at dui vehicula tincidunt. Donec sit amet sapien nec arcu vehicula tincidunt. Praesent ac sem eget est egestas volutpat. Curabitur nec felis euismod, tincidunt nunc sit amet, tincidunt nunc. Nulla facilisi. Proin ac libero nec odio vehicula tincidunt. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget tincidunt nunc nisl sit amet lorem. Nullam ac erat at dui vehicula tincidunt. Donec sit amet sapien nec arcu vehicula tincidunt. '
        },
        src: car.src,
        alt: 'Placeholder Image',
        width: car.width,
        height: car.height,
        blurDataURL: car.blurDataURL
    },
    {
        type: 'blockquote' as const,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Anonymous'
    },
    {
        type: 'list' as const,
        listType: 'bulleted' as const,
        listTitle: 'Key Points',
        content: [
            { type: 'bulletPoint' as const, content: 'Lorem ipsum dolor sit amet' },
            { type: 'bulletPoint' as const, content: 'Consectetur adipiscing elit' },
            { type: 'bulletPoint' as const, content: 'Vivamus lacinia odio vitae' }
        ]
    },
    {
        type: 'video' as const,
        title: 'More on Composition',
        src: 'https://www.youtube.com/embed/NAexy836ff8?si=1RgrzIlJCtYkcfRw' // Placeholder video link
    },
    {
        type: 'lineBreak' as const,
    },
    {
        type: 'text' as const,
        textType: 'h2' as const,
        content: 'Conclusion'
    },
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.'
    }
];

export default function RulesOfComposition() {
    return (
        <main className="bg-white overflow-hidden">
            <Header />
            <Navbar />

            <BlogFormat
                title='Rules of Composition'
                description="Another filler blog. Will be writing blogs soon!"
                date='December 23, 2024'
                author='Anand Tandon'
                components={components}
            />

            <Contact />
            <Footer />
        </main>
    );
}
