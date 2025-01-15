import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from "@/app/components/GalleryFormat";
import fs from 'fs'
import path from 'path'

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

const portraitImagesDirectory = path.join(process.cwd(), 'src/app/assets/img/Portrait')
const portraitImages: GalleryImage[] = fs.readdirSync(portraitImagesDirectory)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/Portrait/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })

export default function PortraitPhotography() {
    return (
        <main className="bg-white overflow-hidden">
            <Header />
            <Navbar />

            <GalleryFormat 
                images={portraitImages}
                title="Portrait Photography"
                description="Though the world is beautiful I find that the expression of people and the story just one photo can tell is just as incredible."
            />

            <Contact />
            <Footer />
        </main>
    )
}
