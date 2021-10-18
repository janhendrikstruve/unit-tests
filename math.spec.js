import { describe, expect } from '@jest/globals'
import { isOdd } from './math'
import { isEven } from './math'
import { isDivisibleBy3 } from './math'
import { isDivisibleBy } from './math'

describe('math', () => {
  describe('isOdd', () => {
    it('returns true, if a number is odd', () => {
      const result = isOdd(1)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is odd', () => {
      const result = isOdd(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is even', () => {
      const result = isOdd(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is even', () => {
      const result = isOdd(-4)
      expect(result).toBe(false)
    })
  })
  describe('isEven', () => {
    it('returns true, if a number is even', () => {
      const result = isEven(2)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is even', () => {
      const result = isEven(-2)
      expect(result).toBe(true)
    })

    it('returns false, if a number is odd', () => {
      const result = isEven(3)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is odd', () => {
      const result = isEven(-3)
      expect(result).toBe(false)
    })
  })
  describe('isDivisibleBy3', () => {
    it('returns true, if a number is divisible by 3', () => {
      const result = isDivisibleBy3(9)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is divisible by 3', () => {
      const result = isDivisibleBy3(-9)
      expect(result).toBe(true)
    })

    it('returns false, if a number is not divisible by 3', () => {
      const result = isDivisibleBy3(7)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is not divisible by 3', () => {
      const result = isDivisibleBy3(-7)
      expect(result).toBe(false)
    })
  })
  describe('isDivisibleBy', () => {
    it('returns true, if a number is divisible by divisor', () => {
      const result = isDivisibleBy(9, 3)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is divisible by divisor', () => {
      const result = isDivisibleBy(-9, 3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is not divisible by divisor', () => {
      const result = isDivisibleBy(7, 5)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is not divisible by divisor', () => {
      const result = isDivisibleBy(-7, 5)
      expect(result).toBe(false)
    })
    it('throws an error, if deviding by 0', () => {
      //const result = isDivisibleBy(-7, 0)
      expect(() => isDivisibleBy(2, 0)).toThrow()
    })
    it('throws an error, if deviding by 0', () => {
      //const result = isDivisibleBy(-7, 0)
      expect(() => isDivisibleBy(2)).toThrow()
    })
  })
})
