import { render, screen } from '@testing-library/react'
import { Button } from 'src/shared/ui/Button/Button.tsx'

describe('Button component', () => {
  test('renders', () => {
    render(<Button>Click me</Button>)

    expect(screen.getByRole('button').toB)
  })
})
