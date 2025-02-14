import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import GalleryFormat from './GalleryFormat'
import placeholder from '@/app/assets/img/placeholder.jpg'

test('GalleryFormat component renders correctly', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    images: [
        { 
            src: placeholder.src,
            alt: 'placeholderImg',
            width: placeholder.width,
            height: placeholder.height,
            blurDataURL: placeholder.blurDataURL
        }
    ]
  }
  
  render(<GalleryFormat {...mockProps} />)
  
  expect(screen.getByRole('img')).toHaveAttribute('src', mockProps.images[0].src)
  expect(screen.getByRole('img')).toHaveAttribute('alt', mockProps.images[0].alt)
}) 