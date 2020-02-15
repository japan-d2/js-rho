import gcd from '@japan-d2/gcd'

function isPrime (n: number): boolean {
  if (n === 1) {
    return false
  }
  if (n === 2 || n === 3) {
    return true
  }
  if ((n % 2 === 0) || (n % 3 === 0)) {
    return false
  }
  let p = 5
  let w = 2
  while (p ** 2 <= n) {
    if (n % p === 0) {
      return false
    }
    p += w
    w = 6 - w
  }
  return true
}

function f (x: number): number {
  return x ** 2 - 1
}

function g (x: number): number {
  return x ** 2 + 1
}

function rho (input: number, operator: (x: number) => number): number {
  if (input % 2 === 0) {
    return 2
  }

  let n1 = 2
  let n2 = 2
  let divisor = 0

  do {
    n1 = operator(n1) % input
    n2 = operator(operator(n2)) % input
    divisor = gcd(Math.abs(n1 - n2), input)
  } while (divisor === 1)

  if (divisor === input) {
    return rho(input, g)
  }

  return divisor
}

function getFactorNumbers (n: number): number[] {
  if (n === 1) {
    return [1]
  }

  if (isPrime(n)) {
    return [n]
  } else {
    const divisor = rho(n, f)
    return [
      ...getFactorNumbers(divisor),
      ...getFactorNumbers(n / divisor)
    ].sort((a, b) => a - b)
  }
}

export default getFactorNumbers
