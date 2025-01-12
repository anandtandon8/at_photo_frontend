import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BlogFormat from './BlogFormat'

test('BlogFormat component renders correctly', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    date: '2024-03-21',
    author: 'Test Author',
    components: []
  }
  
  render(<BlogFormat {...mockProps} />)
  
  expect(screen.getByText(mockProps.title)).toBeInTheDocument()
}) 