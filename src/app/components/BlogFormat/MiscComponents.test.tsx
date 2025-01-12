import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MiscComponents from './MiscComponents'

test('MiscComponents renders a line break correctly', () => {
  const mockLineBreak = {
    component: {
      type: 'lineBreak' as const,
      content: 'Test Content'
    },
    type: 'lineBreak' as const,
    index: 0
  }
  render(<MiscComponents component={mockLineBreak.component} type={mockLineBreak.type} index={mockLineBreak.index} />)
  expect(screen.getByRole('separator')).toBeInTheDocument()
}) 

test('MiscComponents renders a video component correctly', () => {
  const mockVideo = {
    component: {
      type: 'video' as const,
      title: 'Test Video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    index: 0
  }
  render(<MiscComponents component={mockVideo.component} type={mockVideo.component.type} index={mockVideo.index} />)
  expect(screen.getByRole('iframe')).toBeInTheDocument()
  expect(screen.getByText(mockVideo.component.title)).toBeInTheDocument()
}) 


