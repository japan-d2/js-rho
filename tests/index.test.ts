import rho from '../src/index'

test('one', () => {
  expect(rho(1)).toStrictEqual([1])
})

test('two', () => {
  expect(rho(2)).toStrictEqual([2])
})

test('three', () => {
  expect(rho(3)).toStrictEqual([3])
})

test('four', () => {
  expect(rho(4)).toStrictEqual([2, 2])
})

test('small number', () => {
  expect(rho(131)).toStrictEqual([131])
  expect(rho(441)).toStrictEqual([3, 3, 7, 7])
  expect(rho(866)).toStrictEqual([2, 433])
})

test('medium number', () => {
  expect(rho(312481)).toStrictEqual([13, 13, 43, 43])
  expect(rho(530007)).toStrictEqual([3, 31, 41, 139])
  expect(rho(451341)).toStrictEqual([3, 3, 11, 47, 97])
})

test('big number', () => {
  expect(rho(8551873860065)).toStrictEqual([5, 624277, 2739769])
  expect(rho(4156878652352)).toStrictEqual([2, 2, 2, 2, 2, 2, 41221, 1575683])
  expect(rho(3155667888421)).toStrictEqual([3155667888421])
})
