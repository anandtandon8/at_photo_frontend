export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}


export async function fetchFavoriteImages(): Promise<GalleryImage[]> {
  try {
    const response = await fetch(`https://api.atphoto.net/api/getfavoriteimageurls`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.status}`);
    }
    
    const data = await response.json();

    return data.images.map((imageName: string) => ({
      src: `https://images.atphoto.net/${imageName}`,
      alt: imageName.replace(/\.[^/.]+$/, ""),
      width: 1200,
      height: 800,
      blurDataURL: undefined
    }));
  } catch (error) {
    console.error(`Error fetching favourite images:`, error);
    return [];
  }
} 

export async function fetchImages(category: string): Promise<GalleryImage[]> {
  try {
    /*const response = await fetch(`https://api.atphoto.net/api/getimageurls?category=${category}`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch images: ${response.status}`);
    }
    
    const data = await response.json();

    return data.images.map((imageName: string) => ({
      src: `https://images.atphoto.net/${imageName}`,
      alt: imageName.replace(/\.[^/.]+$/, ""),
      width: 1200,
      height: 800,
      blurDataURL: undefined
    }));*/
    return [
      {
        src: `https://images.atphoto.net/IMG_2122.jpg`,
        alt: "car1",
        width: 1200,
        height: 800,
        blurDataURL: undefined
      },
      {
        src: `https://images.atphoto.net/IMG_2122.jpg`,
        alt: "car2",
        width: 1200,
        height: 800,
        blurDataURL: undefined
      }
    ]
  } catch (error) {
    console.error(`Error fetching ${category} images:`, error);
    return [];
  }
} 