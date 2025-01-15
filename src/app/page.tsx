import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import AboutMe from "@/app/components/AboutMe";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import path from "path";
import fs from "fs";


interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

const row1Path = path.join(process.cwd(), 'src/app/assets/img/HeroImages/Row1')
const row1: GalleryImage[] = fs.readdirSync(row1Path)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/HeroImages/Row1/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })

const row2Path = path.join(process.cwd(), 'src/app/assets/img/HeroImages/Row2')
const row2: GalleryImage[] = fs.readdirSync(row2Path)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/HeroImages/Row2/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
        <Header />
        <Navbar />
        <Hero row1={row1} row2={row2} />
        <AboutMe />
        <Contact />
        <Footer />
    </main>
  );
}
