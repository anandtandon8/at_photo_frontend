import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BlogBlock from './BlogBlock'
import placeholder from '@/app/assets/img/placeholder.jpg'

test('BlogBlock component renders correctly', () => {
  const mockProps = {
    title: 'Test Blog',
    description: 'Test Description',
    link: '/test-link',
    image: {
      type: 'image' as const,
      src: placeholder.src,
      alt: 'placeholder',
      width: placeholder.width,
      height: placeholder.height,
      blurDataURL: placeholder.blurDataURL
    },
    date: '2024-03-21',
    author: 'Test Author'
  }
  
  render(<BlogBlock {...mockProps} />)
  
  expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  expect(screen.getByText(mockProps.description)).toBeInTheDocument()
  expect(screen.getByRole('link')).toHaveAttribute('href', mockProps.link)
}) 