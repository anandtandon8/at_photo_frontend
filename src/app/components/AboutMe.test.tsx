import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutMe from './AboutMe'

test('AboutMe component renders correctly', () => {
  render(<AboutMe />)
  
  // Test for author information
  expect(screen.getByRole('heading')).toBeInTheDocument()
  expect(screen.getByText(/about/i)).toBeInTheDocument()
}) 