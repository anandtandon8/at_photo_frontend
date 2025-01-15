'use client'
import React, { useState, useRef } from 'react'
import Link from 'next/link'

export const Navbar:React.FC = () => {
  const buttonRefs = {
    collection: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null)
  };

  const handleMouseEnter = (dropdown: 'collection' | 'blog') => {
    if (dropdown === 'collection' && buttonRefs.blog.current) {
      buttonRefs.blog.current.blur();
    } else if (dropdown === 'blog' && buttonRefs.collection.current) {
      buttonRefs.collection.current.blur();
    }
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <div className="navbar bg-base-100 md:mt-2 lg:mt-4 xl:mt-5 -mb-8 sm:-mb-8 md:-mb-6 flex flex-col sm:flex-row items-center justify-center w-full md:gap-6 lg:gap-12">
      <div className="flex -mb-3 sm:mb-0 md:gap-6 lg:gap-12">
        <button className="btn btn-ghost text-black text-lg sm:text-xl md:text-2xl font-medium">
          <Link href="/about">About</Link>
        </button>
        <button className="btn btn-ghost text-black text-lg sm:text-xl md:text-2xl font-medium">
          <Link href="/favourites">Favourites</Link>
        </button>
      </div>
      <div className="flex md:gap-6 lg:gap-12">
        <div className="dropdown dropdown-hover" onMouseEnter={() => handleMouseEnter('collection')}>
          <div
            ref={buttonRefs.collection}
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black text-lg sm:text-xl md:text-2xl font-medium"
          >
            Collection
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow text-black text-base sm:text-lg md:text-xl font-medium md:min-w-max lg:min-w-max">
            <li><div><Link href="/collection/car-photography" onClick={handleLinkClick}>Car Photography</Link></div></li>
            <li><div><Link href="/collection/nature-photography" onClick={handleLinkClick}>Nature Photography</Link></div></li>
            <li><div><Link href="/collection/portrait-photography" onClick={handleLinkClick}>Portrait Photography</Link></div></li>
            <li><div><Link href="/collection/street-photography" onClick={handleLinkClick}>Street Photography</Link></div></li>
          </ul>
        </div>

        <div className="dropdown dropdown-hover" onMouseEnter={() => handleMouseEnter('blog')}>
          <div
            ref={buttonRefs.blog}
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-black text-lg sm:text-xl md:text-2xl font-medium m-1 flex-shrink-0"
          >
            Blog
          </div>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-50 p-2 shadow text-black text-base sm:text-lg md:text-xl font-medium md:min-w-max lg:min-w-max">
            <li><div><Link href="/blog/camera-basics" onClick={handleLinkClick}>Camera Basics</Link></div></li>
            <li><div><Link href="/blog/rules-of-composition" onClick={handleLinkClick}>Rules of Composition</Link></div></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;