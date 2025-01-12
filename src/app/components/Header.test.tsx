import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

test('Header component renders correctly', () => {
  render(<Header />)
  
  const link = screen.getByRole('link')
  expect(link).toBeInTheDocument()
  expect(link).toHaveAttribute('href', '/')
}) 