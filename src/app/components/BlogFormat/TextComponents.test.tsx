import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TextComponents from './TextComponents'


test('TextComponents renders a text component correctly', () => {
  const mockText = {
    text: {
      type: 'text' as const,
      textType: 'p' as const,
      content: 'Test Text'
    },
    type: 'text' as const,
    index: 0
  }
  render(<TextComponents text={mockText.text} type={mockText.type} index={mockText.index} />)
  
  expect(screen.getByText(mockText.text.content)).toBeInTheDocument()
}) 

test('TextComponents renders a blockquote component correctly', () => {
  const mockBlockQuote = {
    text: {
      type: 'blockquote' as const,
      content: 'Test Blockquote'
    },
    type: 'blockquote' as const,
    index: 0
  }
  render(<TextComponents text={mockBlockQuote.text} type={mockBlockQuote.type} index={mockBlockQuote.index} />)

  expect(screen.getByText(mockBlockQuote.text.content)).toBeInTheDocument()

  const mockList = {
    listTitle: 'Test List',
    text: {
      type: 'list' as const,
      listType: 'bulleted' as const,
      content: [{ type: 'bulletPoint' as const, title: 'Test Bullet Point', content: 'Test Bullet Point Content' }, { type: 'bulletPoint' as const, title: 'Test Bullet Point2', content: 'Test Bullet Point Content2' }]
    },
    type: 'list' as const,
    index: 0
  }
  render(<TextComponents text={mockList.text} type={mockList.type} index={mockList.index} />)

  expect(screen.getByText(mockList.listTitle)).toBeInTheDocument()
  expect(screen.getByText(mockList.text.content[0].content)).toBeInTheDocument()
  expect(screen.getByText(mockList.text.content[1].content)).toBeInTheDocument()
}) 

test('TextComponents renders a list component correctly', () => {
  const mockList = {
    listTitle: 'Test List',
    text: {
      type: 'list' as const,
      listType: 'bulleted' as const,
      content: [{ type: 'bulletPoint' as const, title: 'Test Bullet Point', content: 'Test Bullet Point Content' }, { type: 'bulletPoint' as const, title: 'Test Bullet Point2', content: 'Test Bullet Point Content2' }]
    },
    type: 'list' as const,
    index: 0
  }
}) 