import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('Footer component renders correctly', () => {
  render(<Footer />)
  
  expect(screen.getByText(/Legal/i)).toBeInTheDocument()
  expect(screen.getByText(/Social/i)).toBeInTheDocument()
  expect(screen.getByText(/Newsletter/i)).toBeInTheDocument()
}) 