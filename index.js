import { getGreeting } from './getGreeting.js'
import { replaceName } from './replaceName.js'

console.log(getGreeting('alda'))

console.log(replaceName('hello Jane', 'Jane', 'John'))
console.log(replaceName('Hello Jane, Goodbye Jane', 'Jane', 'John'))
