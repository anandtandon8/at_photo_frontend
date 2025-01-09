import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import BlogFormat from "@/app/components/BlogFortmat"

const components = [
    {
        type: 'text' as const,
        textType: 'p' as const,
        content: "Rules of Composition. That's a big question. I'm going to break it down into a few steps."
    }
]

export default function RulesOfComposition() {
    return (
        <main className="bg-white">
            <Header />
            <Navbar />

            <BlogFormat title="Rules of Composition" description="Rules of Composition. That's a big question. I'm going to break it down into a few steps." date="December 23, 2024" author="Anand Tandon" components={components} />

            <Contact />
            <Footer />
        </main>
    )
}
