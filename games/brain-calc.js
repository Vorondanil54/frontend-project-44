#!/usr/bin/env node

import readlineSync from 'readline-sync'
import greet from '../src/cli.js'

const username = greet()

console.log('What is the result of the expression?')

let answerWrong = false

for (let count = 1; count <= 3; count += 1) {
  const operations = ['+', '-', '*']

  const number1 = Math.floor(Math.random() * (25 - 1 + 1)) + 1
  const number2 = Math.floor(Math.random() * (25 - 1 + 1)) + 1
  const operator = operations[Math.floor(Math.random() * (operations.length))]
  console.log(`Question: ${number1} ${operator} ${number2}`)

  const userAnswer = readlineSync.question('Your answer: ')
  let systemAnswer
  switch (operator) {
    case '+': systemAnswer = number1 + number2
      break
    case '-': systemAnswer = number1 - number2
      break
    case '*': systemAnswer = number1 * number2
      break
  }

  if (userAnswer == systemAnswer) {
    console.log('Correct!')
  }
  else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer is '${systemAnswer}'.`)
    answerWrong = true
    break
  }
}

answerWrong === true ? console.log(`Let's try again, ${username}!`) : console.log(`Congratulations, ${username}!`)
