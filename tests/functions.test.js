const { guardNumber, calculateNumberWeight, sortingFunction } = require('../src/index')

describe('Function', () => {
  it('guardNumber should return the correct numbers weights', () => {
    expect(guardNumber('12345')).toBe('12345')
    expect(guardNumber('saa12dd45ddx2')).toBe('12452')
  })

  it('calculateNumberWeight should sort the incomming array by number weights', () => {
    expect(calculateNumberWeight('12345')).toBe(15)
    expect(calculateNumberWeight('saa12dd45ddx2')).toBe(14)
  })

  it('calculateNumberWeight should throw the TypeError for wrong type', () => {
    expect(() => { calculateNumberWeight(1234) }).toThrowErrorMatchingSnapshot()
  })

  it('sortingFunction should return the correct ordering indecies', () => {
    expect(sortingFunction('12345', '1234')).toEqual(1)
    expect(sortingFunction('1234', '12345')).toEqual(-1)
    expect(sortingFunction('11', '2000')).toEqual(-1)
    expect(sortingFunction('2000', '11')).toEqual(1)
    expect(sortingFunction('2002', '2002')).toEqual(0)
  })
})