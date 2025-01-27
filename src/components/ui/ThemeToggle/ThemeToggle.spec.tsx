import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThemeToggle } from '.'

describe('<ThemeToggle />', () => {
  it('renders correctly', () => {
    render(<ThemeToggle>Test Component</ThemeToggle>)
    expect(screen.getByText('Test Component')).toBeInTheDocument()
  })
})

