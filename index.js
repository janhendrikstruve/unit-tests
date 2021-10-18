function getGreeting(name = 'you') {
  return `Hello ${name}!` // template literal
  // return 'Hello ' + name + '!'
}

console.log(getGreeting('Jane Doe'))
