import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Test } from '.'

describe('<Test />', () => {
  it('renders correctly', () => {
    render(<Test>Test Component</Test>)
    expect(screen.getByText('Test Component')).toBeInTheDocument()
  })
})

