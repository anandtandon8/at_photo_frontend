'use client'

import { useState, useEffect } from 'react';
import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from "@/app/components/GalleryFormat";
import { fetchImages, GalleryImage } from '@/app/utils/imageUtils';

export default function NaturePhotography() {
  const [natureImages, setNatureImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      const images = await fetchImages('nature');
      setNatureImages(images);
      setLoading(false);
    }
    
    loadImages();
  }, []);

  return (
    <main className="bg-white overflow-hidden">
        <Header />
        <Navbar />
        
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          <GalleryFormat 
              images={natureImages}
              title="Nature Photography"
              description="I absolutely love the outdoors and the beauty of nature. I work to not only capture this beauty but to also capture the calmness and peace that nature can bring in my photography."
          />
        )}

        <Contact />
        <Footer />
    </main>
  );
}
