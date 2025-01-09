import React from 'react'
import HeroPhoto from "@/app/assets/img/HeroPhoto.png";

export const Hero:React.FC = () => {
    return <div className="flex items-center justify-center h- w-auto pt-3">
        <a href="/"><img className="object-contain" src={HeroPhoto.src}/></a>
    </div>
}

export default Hero