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

const streetImagesDirectory = path.join(process.cwd(), 'src/app/assets/img/Street')
const streetImages: GalleryImage[] = fs.readdirSync(streetImagesDirectory)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/Street/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })

export default function StreetPhotography() {
    return (
        <main className="bg-white overflow-hidden">
            <Header />
            <Navbar />

            <GalleryFormat 
                images={streetImages}
                title="Street Photography"
                description="Street photography is a major passion of mine."
            />

            <Contact />
            <Footer />
        </main>
    )
}
