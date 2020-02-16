import gcd from '@japan-d2/gcd/lib/bigint'

function isPrime (n: bigint): boolean {
  if (n === BigInt(1)) {
    return false
  }
  if (n === BigInt(2) || n === BigInt(3)) {
    return true
  }
  if ((n % BigInt(2) === BigInt(0)) || (n % BigInt(3) === BigInt(0))) {
    return false
  }
  let p = BigInt(5)
  let w = BigInt(2)
  while (p * p <= n) {
    if (n % p === BigInt(0)) {
      return false
    }
    p += w
    w = BigInt(6) - w
  }
  return true
}

function f (x: bigint): bigint {
  return x * x - BigInt(1)
}

function g (x: bigint): bigint {
  return x * x + BigInt(1)
}

function rho (input: bigint, operator: (x: bigint) => bigint): bigint {
  if (input % BigInt(2) === BigInt(0)) {
    return BigInt(2)
  }

  let n1 = BigInt(2)
  let n2 = BigInt(2)
  let divisor = BigInt(0)

  do {
    n1 = operator(n1) % input
    n2 = operator(operator(n2)) % input
    const nd = n1 > n2 ? n1 - n2 : n2 - n1
    divisor = gcd(nd, input)
  } while (divisor === BigInt(1))

  if (divisor === input) {
    return rho(input, g)
  }

  return divisor
}

function getFactorNumbers (n: bigint): bigint[] {
  if (n === BigInt(1)) {
    return [BigInt(1)]
  }

  if (isPrime(n)) {
    return [n]
  } else {
    const divisor = rho(n, f)
    return [
      ...getFactorNumbers(divisor),
      ...getFactorNumbers(n / divisor)
    ].sort((a, b) => {
      if (a === b) return 0
      if (a > b) return 1
      return -1
    })
  }
}

export default getFactorNumbers
