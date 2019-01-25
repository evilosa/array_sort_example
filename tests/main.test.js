// 1) "103 123 4444 99 2000" => "2000 103 123 4444 99"
// 2) "2000 10003 1234000 44444444 9999 11 11 22 123" => "11 11 2000 10003 22 123 1234000 44444444 9999"

const testFunc = require('../src/index')

describe('Sort functions', () => {
  it('should provide correct results of work for case 1', () => {
    const source = '103 123 4444 99 2000'
    const result = '2000 103 123 4444 99'

    const funcResult = testFunc(source)
    expect(funcResult).toBe(result)
  })

  it('should provide correct results of work for case 2', () => {
    const source = '2000 10003 1234000 44444444 9999 11 11 22 123'
    const result = '11 11 2000 10003 22 123 1234000 44444444 9999'
 
    const funcResult = testFunc(source)
    expect(funcResult).toBe(result)
  })

  it('should provide correct results of work for case with broken numbers', () => {
    const source = '200$#as0 #$%@10003 12!3!f4qq000 4444rwr44asd44 9999 11 adf1d1fd 2asd2 1dsf23'
    const result = '11 11 2000 10003 22 123 1234000 44444444 9999'

    const funcResult = testFunc(source)
    expect(funcResult).toBe(result)
  })
})