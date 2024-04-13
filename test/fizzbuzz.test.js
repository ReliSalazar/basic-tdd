import { describe, it, expect } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // this test is redundant
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrowError('parameter must be a number')
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => fizzbuzz(NaN)).toThrowError('parameter must be a number')
  })

  it('should return 1 if number is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return fizz if number is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  // this test has been covered in the previous tests
  // it('should return 4 if number is 4', () => {
  //   expect(fizzbuzz(4)).toBe(4)
  // })

  it('should return fizz if number is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return buzz if number is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return buzz if number is multiple of 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it('should return fizzbuzz if number is multiple of 15', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('should return woof if number is multiple of 7', () => {
    expect(fizzbuzz(7)).toBe('woof')
  })
})
