import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import BlogViewer from './BlogViewer'

test('BlogViewer component renders correctly', () => {
  const mockProps = {
    title: 'Test Title'
  }
  
  render(<BlogViewer {...mockProps} />)
  
  // Since BlogViewer renders BlogBlocks conditionally based on title
  expect(screen.getAllByRole('link')).toBeTruthy()
}) 