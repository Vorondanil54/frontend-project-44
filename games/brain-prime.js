import readlineSync from 'readline-sync'
import greet from '../src/cli.js'

const brainPrime = () => {
  const username = greet()

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let answerWrong = false

  for (let count = 1; count <= 3; count += 1) {
    function isPrime(num) {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) return false
      }
      return num !== 1
    }

    const question = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')
    const systemAnswer = isPrime(question) === true ? 'yes' : 'no'

    if (userAnswer === systemAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${systemAnswer}'.`)
      answerWrong = true
      break
    }
  }

  answerWrong === true ? console.log(`Let's try again, ${username}!`) : console.log(`Congratulations, ${username}!`)
}

export default brainPrime
