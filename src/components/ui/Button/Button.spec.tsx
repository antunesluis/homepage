import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from '.'

describe('<Button />', () => {
  it('renders correctly', () => {
    render(<Button>Test Component</Button>)
    expect(screen.getByText('Test Component')).toBeInTheDocument()
  })
})

