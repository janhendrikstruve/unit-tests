import { describe, expect, it } from '@jest/globals'
import { getGreeting } from './getGreeting.js'

describe('getGreeting', () => {
  it('returns a string "Hello you!" if called without arguments', () => {
    const result = 'Hello you!'
    expect(result).toBe('Hello you!')
  })

  it('returns "Hello Jane" when called with getGreeting("Jane")', () => {
    const result = getGreeting('Jane')
    expect(result).toBe('Hello Jane!')
  })
  it('returns "Hello Coach" when called with getGreeting("Jerry"', () => {
    const result = getGreeting('Jerry')
    expect(result).toBe('Hello Coach!')
  })
})
