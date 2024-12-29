import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from "@/app/components/GalleryFormat";

import waterfall from '@/app/assets/img/IMG_2122.jpg';
import sunset from '@/app/assets/img/IMG_2328.jpg';
import mountain from '@/app/assets/img/IMG_2490.jpg';
import car from '@/app/assets/img/IMG_4851.jpg';
import cnTower from '@/app/assets/img/IMG_4885.jpg';


const streetImages = [
  {
    src: waterfall.src,
    alt: 'waterfall',   // get alt from jsonl
    width: waterfall.width,
    height: waterfall.height,
    blurDataURL: waterfall.blurDataURL
  },

  {
    src: sunset.src,
    alt: 'sunset',
    width: sunset.width,
    height: sunset.height,
    blurDataURL: sunset.blurDataURL
  },

  {
    src: mountain.src,
    alt: 'mountain',
    width: mountain.width,
    height: mountain.height,
    blurDataURL: mountain.blurDataURL
  },

  {
    src: car.src,
    alt: 'car',
    width: car.width,
    height: car.height,
    blurDataURL: car.blurDataURL
  },

  {
    src: cnTower.src,
    alt: 'cnTower',
    width: cnTower.width,
    height: cnTower.height,
    blurDataURL: cnTower.blurDataURL
  },
];

export default function StreetPhotography() {
    return (
        <main className="bg-white">
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
