import { describe, it, expect } from 'vitest'

const canReconfigure = (from, to) => {
  if (typeof from !== 'string') {
    throw new Error('from must be a string')
  }
  if (typeof to !== 'string') {
    throw new Error('to must be a string')
  }

  const isSameLength = from.length === to.length
  if (!isSameLength) {
    return false
  }

  const hasSameUniqueChars = new Set(from).size === new Set(to).size
  if (!hasSameUniqueChars) {
    return false
  }

  const transformations = {}

  for (let i = 0; i < from.length; i++) {
    const fromChar = from[i]
    const toChar = to[i]

    const storedChar = transformations[fromChar]
    if (storedChar && storedChar !== toChar) {
      return false
    }

    transformations[fromChar] = toChar
  }

  return true
}

describe('can-reconfigure', () => {
  // it('should be a function', () => {
  //   expect(typeof canReconfigure).toBe('function')
  // })
  it('should throw if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrowError()
  })
  it('should throw if first parameter is not a string', () => {
    expect(() => canReconfigure(1)).toThrowError()
  })
  it('should throw if seccond parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrowError()
  })

  it('should return a boolean', () => {
    expect(typeof canReconfigure('a', 'b')).toBe('boolean')
  })

  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })

  it('should return false if strings provided have different length even with same number of unique characters', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('should return false if strings provided have different number of unique characters', () => {
    expect(canReconfigure('abc', 'dee')).toBe(false)
  })

  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
