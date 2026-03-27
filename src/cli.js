import readlineSync from 'readline-sync'

function greet() {
  const username = readlineSync.question('May I know your name? ')
  console.log(`Hello, ${username}!`)
  return username
}

export { greet }
