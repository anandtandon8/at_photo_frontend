import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

test('Hero component renders correctly', () => {
  render(<Hero />)
  
  expect(screen.getByText(/ATPHOTO PRESENTS/i)).toBeInTheDocument()
  expect(screen.getByText(/INTERACTIVE/i)).toBeInTheDocument()
  expect(screen.getByText(/PHOTOGRAPHY/i)).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /favourites/i })).toBeInTheDocument()
}) 