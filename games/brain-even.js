import readlineSync from 'readline-sync'
import greet from '../src/cli.js'

const brainEven = () => {
  const username = greet()

  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let answerWrong = false

  for (let count = 1; count <= 3; count += 1) {
    const question = Math.floor(Math.random() * (20 - 1 + 1)) + 1
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')
    const systemAnswer = question % 2 === 0 ? 'yes' : 'no'

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

export default brainEven
