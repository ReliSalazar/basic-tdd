/**
 * Write a function that receives a number and returns:
 * fizz if the number is divisible by 3,
 * buzz if the number is divisible by 5,
 * fizzbuzz if the number is divisible by 3 and 5,
 * or the number itself if it is not divisible by 3 or 5.
 */

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('parameter must be a number')
  if (Number.isNaN(number)) throw new Error('parameter must be a number')

  const multipliers = {
    3: 'fizz',
    5: 'buzz',
    7: 'woof'
  }

  let output = ''

  Object.entries(multipliers).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}
