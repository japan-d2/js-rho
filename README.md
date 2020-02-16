# rho

Compute prime factors using [Pollard's rho algorithm](https://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm).

# install

```bash
npm install @japan-d2/rho
```

or

```bash
yarn add @japan-d2/rho
```

# how to use

## example

```ts
import rho from '@japan-d2/rho'
console.log(rho(451341))
```

### Output

```
[3, 3, 11, 47, 97]
```

## methods

### rho(n: number): number[]

Returns the prime factors of `n` sorted in ascending order.

# BigInt support

## example

```ts
import rho from '@japan-d2/rho/lib/bigint'
console.log(rho(451341n))
```

### Output

```
[3n, 3n, 11n, 47n, 97n]
```

## methods

### rho(n: bigint): bigint[]

Returns the prime factors of `n` sorted in ascending order.

# license

MIT
