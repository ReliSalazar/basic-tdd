import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { Calculator, numbers, operations } from '../src/calculator'

describe('calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title', () => {
    render(<Calculator />)
    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)
    numbers.forEach((number) => {
      screen.getByText(number)
    })
  })

  it('should rener 4 rows', () => {
    render(<Calculator />)
    const rows = screen.getAllByRole('row')
    expect(rows).toHaveLength(4)
  })

  it('should render operations', () => {
    render(<Calculator />)
    operations.forEach((operation) => {
      screen.getByText(operation)
    })
  })

  it('should render equal sign', () => {
    render(<Calculator />)
    screen.getByText('=')
  })

  it('should render an input', () => {
    render(<Calculator />)
    screen.getByRole('textbox')
  })

  it('it should user input after clicking a number', () => {
    render(<Calculator />)
    const one = screen.getByText(1)
    fireEvent.click(one)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1')
  })

  it('it should user input after clicking several numbers', () => {
    render(<Calculator />)
    const one = screen.getByText(1)
    fireEvent.click(one)
    const two = screen.getByText(2)
    fireEvent.click(two)
    const three = screen.getByText(3)
    fireEvent.click(three)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('123')
  })

  it('should show user input after clicking numbers and operations', () => {
    render(<Calculator />)
    const one = screen.getByText(1)
    fireEvent.click(one)
    const add = screen.getByText('+')
    fireEvent.click(add)
    const two = screen.getByText(2)
    fireEvent.click(two)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+2')
  })

  it('should calculate based on user input and show result', () => {
    render(<Calculator />)
    const one = screen.getByText(1)
    fireEvent.click(one)
    const add = screen.getByText('+')
    fireEvent.click(add)
    const two = screen.getByText(2)
    fireEvent.click(two)
    const equal = screen.getByText('=')
    fireEvent.click(equal)
    const input = screen.getByRole('textbox')
    expect(input.value).toBe('3')
  })
})
