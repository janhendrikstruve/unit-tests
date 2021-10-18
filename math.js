export function isOdd(number) {
  return Math.abs(number % 2) === 1
}

export function isEven(number) {
  return !isOdd(number)
}

export function isDivisibleBy3(number) {
  return isDivisibleBy(number, 3)
}

export function isDivisibleBy(number, divisor) {
  if (divisor === undifined || divisor === 0) {
    throw new Error('Error: divisor is missing or 0')
  }
  return Math.abs(number % divisor) === 0
}
