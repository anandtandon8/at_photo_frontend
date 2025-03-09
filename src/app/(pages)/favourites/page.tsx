'use client'

import { useState, useEffect } from 'react';
import Header from "@/app/components/Header"
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import GalleryFormat from "@/app/components/GalleryFormat";
import { GalleryImage, fetchFavoriteImages } from "@/app/utils/imageUtils";

export default function Favourites() {
  const [favouriteImages, setFavouriteImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadImages() {
      setLoading(true);
      const images = await fetchFavoriteImages();
      setFavouriteImages(images);
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
          images={favouriteImages}
          title="Favourites"
          description="These are some of my favourite works. I hope you enjoy them."
        />
      )}

      <Contact />
      <Footer />
    </main>
  );
}
