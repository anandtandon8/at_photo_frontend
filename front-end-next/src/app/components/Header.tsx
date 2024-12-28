import React from 'react'
import LongLogo from "@/app/assets/logos/ATPhoto_Long_Logo.png";

export const Header:React.FC = () => {
    return <div className="pt-10 pb-2 px-[5vw] md:px-[8vw] xl:px-[12vw] flex items-center justify-center h-auto w-auto">
        <a href="/"><img className="object-contain" src={LongLogo.src}/></a>
    </div>
}

export default Header