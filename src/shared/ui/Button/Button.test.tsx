import { render, screen } from '@testing-library/react'
import { Button } from './Button.tsx'

describe('Button component', () => {
  test('renders', () => {
    render(<Button>111</Button>)

    expect(screen.getByRole('button')).toBeVisible()
  })
})
