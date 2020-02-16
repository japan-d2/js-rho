import rho from '../../src/bigint'

test('one', () => {
  expect(rho(BigInt(1))).toStrictEqual([BigInt(1)])
})

test('two', () => {
  expect(rho(BigInt(2))).toStrictEqual([BigInt(2)])
})

test('three', () => {
  expect(rho(BigInt(3))).toStrictEqual([BigInt(3)])
})

test('four', () => {
  expect(rho(BigInt(4))).toStrictEqual([BigInt(2), BigInt(2)])
})

test('small number', () => {
  expect(rho(BigInt(131))).toStrictEqual([BigInt(131)])
  expect(rho(BigInt(441))).toStrictEqual([BigInt(3), BigInt(3), BigInt(7), BigInt(7)])
  expect(rho(BigInt(866))).toStrictEqual([BigInt(2), BigInt(433)])
})

test('medium number', () => {
  expect(rho(BigInt(312481))).toStrictEqual([BigInt(13), BigInt(13), BigInt(43), BigInt(43)])
  expect(rho(BigInt(530007))).toStrictEqual([BigInt(3), BigInt(31), BigInt(41), BigInt(139)])
  expect(rho(BigInt(451341))).toStrictEqual([BigInt(3), BigInt(3), BigInt(11), BigInt(47), BigInt(97)])
})

test('big number', () => {
  expect(rho(BigInt(8551873860065))).toStrictEqual([BigInt(5), BigInt(624277), BigInt(2739769)])
  expect(rho(BigInt(4156878652352))).toStrictEqual([BigInt(2), BigInt(2), BigInt(2), BigInt(2), BigInt(2), BigInt(2), BigInt(41221), BigInt(1575683)])
  expect(rho(BigInt(3155667888421))).toStrictEqual([BigInt(3155667888421)])
})
