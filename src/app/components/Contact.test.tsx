import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

test('Contact component renders correctly', () => {
  render(<Contact />)
  
  expect(screen.getByText(/Contact Me/i)).toBeInTheDocument()
  expect(screen.getByRole('form')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Name*')).toBeInTheDocument()
  expect(screen.getByPlaceholderText('Email*')).toBeInTheDocument()
}) 