'use client'

import { useState, useEffect } from 'react';
import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from '@/app/components/GalleryFormat';
import { fetchImages, GalleryImage } from '@/app/utils/imageUtils';

export default function CarPhotographyPage() {
  const [carImages, setCarImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      const images = await fetchImages('car');
      setCarImages(images);
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
              images={carImages}
              title="Car Photography"
              description="Cars are a major passion of mine. I'm focusing on my career right now but when I'm a bit older I want to work on my own car for days on end. I would consider the cars in some of these photos to be artistic masterpieces."
          />
        )}

        <Contact />
        <Footer />
    </main>
  );
}
