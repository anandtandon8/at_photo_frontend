import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from '@/app/components/GalleryFormat';
import path from "path";
import fs from "fs";


interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}


const carImagesDirectory = path.join(process.cwd(), 'src/app/assets/img/Car')
const carImages: GalleryImage[] = fs.readdirSync(carImagesDirectory)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file))
  .map(file => {
    const image = require(`@/app/assets/img/Car/${file}`).default
    return {
      src: image.src,
      alt: path.basename(file, path.extname(file)),
      width: image.width,
      height: image.height,
      blurDataURL: image.blurDataURL
    }
  })


export default function CarPhotographyPage() {
  /*
  const [carImages, setCarImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    (async () => {
      setCarImages(await restApiCall());
    })();
  }, []);
  */

  return (
    <main className="bg-white overflow-hidden">
        <Header />
        <Navbar />
        
        <GalleryFormat 
            images={carImages}
            title="Car Photography"
            description="Cars are a major passion of mine. I'm focusing on my career right now but when I'm a bit older I want to work on my own car for days on end. I would consider the cars in some of these photos to be artistic masterpieces."
        />

        <Contact />
        <Footer />
    </main>
  );
}
