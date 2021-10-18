export function getGreeting(name = 'you') {
  if (name === 'Jerry' || name === 'Lene') {
    return 'Hello Coach!'
  }
  return `Hello ${name}!` // template literal
  // better than: return 'Hello ' + name + '!'
}
