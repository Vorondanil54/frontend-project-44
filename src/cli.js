import readlineSync from 'readline-sync'

function greet() {
  console.log('Welcome to the Brain Games!')
  const username = readlineSync.question('May I know your name? ')
  console.log(`Hello, ${username}!`)
  return username
}

export { greet }
