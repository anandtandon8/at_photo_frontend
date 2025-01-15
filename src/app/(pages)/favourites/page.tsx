import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from "@/app/components/GalleryFormat";

import fs from 'fs';
import path from 'path';


interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}


const favouriteImagesDirectory = path.join(process.cwd(), 'src/app/assets/img/Favourites')
const favouriteImages: GalleryImage[] = fs.readdirSync(favouriteImagesDirectory)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/Favourites/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })


export default function Favourites() {
    return (
        <main className="bg-white overflow-hidden">
            <Header />
            <Navbar />

            <GalleryFormat 
                images={favouriteImages}
                title="Favourites"
                description="These are some of my personal favourite photos. I hope you enjoy them."
            />

            <Contact />
            <Footer />
        </main>
    )
}
