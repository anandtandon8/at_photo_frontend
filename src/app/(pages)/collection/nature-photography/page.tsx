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

const natureImagesDirectory = path.join(process.cwd(), 'src/app/assets/img/Nature')
const natureImages: GalleryImage[] = fs.readdirSync(natureImagesDirectory)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/Nature/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })

export default function NaturePhotography() {
    return (
        <main className="bg-white overflow-hidden">
            <Header />
            <Navbar />

            <GalleryFormat 
                images={natureImages}
                title="Nature Photography"
                description="I absolutely love the outdoors and the beauty of nature. I work to not only capture this beauty but to also capture the calmness and peace that nature can bring in my photography."
            />

            <Contact />
            <Footer />
        </main>
    )
}
