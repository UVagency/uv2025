import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('concatenates class names', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('merges conditional classes', () => {
    const isLarge = true
    expect(cn('text-sm', isLarge && 'text-lg')).toBe('text-lg')
  })
})
