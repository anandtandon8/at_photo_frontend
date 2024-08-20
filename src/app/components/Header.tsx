import React from 'react'
import LongLogo from "@/app/assets/logos/ATPhoto_Long_Logo.png";

export const Header:React.FC = () => {
    return <div className="flex items-center justify-center h-auto w-auto">
        <a href="/"><img className="object-contain" src={LongLogo.src}/></a>
    </div>
}

export default Header