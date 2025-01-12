import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'

test('Navbar renders correctly', () => {
  render(<Navbar />)
  
  expect(screen.getByRole('navigation')).toBeInTheDocument()
  // Test for navigation links
  const links = screen.getAllByRole('link')
  expect(links.length).toBeGreaterThan(0)
}) 