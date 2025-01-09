'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'

export const Navbar:React.FC = () => {
  const buttonRefs = {
    collection: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null)
  };

  const handleMouseEnter = (dropdown: 'collection' | 'blog') => {
    // Blur (remove focus from) the other dropdown's button
    if (dropdown === 'collection' && buttonRefs.blog.current) {
      buttonRefs.blog.current.blur();
    } else if (dropdown === 'blog' && buttonRefs.collection.current) {
      buttonRefs.collection.current.blur();
    }
  };
  
  return <div className="navbar bg-base-100 mt-5 flex items-center justify-center">
    <div className="flex justify-center items-center md:gap-6 lg:gap-12">
        <button className="btn btn-ghost text-black text-xl md:text-2xl font-medium"><Link href="/about">About</Link></button>
        <button className="btn btn-ghost text-black text-xl md:text-2xl font-medium"><Link href="/favourites">Favourites</Link></button>
        <div className="dropdown dropdown-hover"
          onMouseEnter={() => handleMouseEnter('collection')}
        >
          <div
            ref={buttonRefs.collection}
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black text-xl md:text-2xl font-medium m-1"
          >
            Collection
          </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow text-black text-lg md:text-xl font-medium md:min-w-max lg:min-w-max
            ${focusedDropdown === 'collection' ? 'visible opacity-100 scale-100' : ''}`}"
            >
              <li><div><Link href="/collection/car-photography">Car Photography</Link></div></li>
              <li><div><Link href="/collection/nature-photography">Nature Photography</Link></div></li>
              <li><div><Link href="/collection/portrait-photography">Portrait Photography</Link></div></li>
              <li><div><Link href="/collection/street-photography">Street Photography</Link></div></li>
            </ul>
        </div>

        <div className="dropdown dropdown-hover"
          onMouseEnter={() => handleMouseEnter('blog')}
        >
          <div
            ref={buttonRefs.blog}
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black text-xl md:text-2xl font-medium m-1"
          >
            Blog
          </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow text-black text-lg md:text-xl font-medium md:min-w-max lg:min-w-max
            ${focusedDropdown === 'collection' ? 'visible opacity-100 scale-100' : ''}`}"
            >
              <li><div><Link href="/blog/camera-basics">Camera Basics</Link></div></li>
              <li><div><Link href="/blog/how-to-start">How to Start</Link></div></li>
              <li><div><Link href="/blog/rules-of-composition">Rules of Composition</Link></div></li>
              <li><div><Link href="/blog/why-photography">Why Photography?</Link></div></li>
            </ul>
        </div>
    </div>
  </div>
}

export default Navbar