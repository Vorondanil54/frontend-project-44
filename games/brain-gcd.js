#!/usr/bin/env node

import readlineSync from 'readline-sync'
import greet from '../src/cli.js'

const username = greet()

console.log('Find the greatest common divisor of given numbers.')

let answerWrong = false

for (let count = 1; count <= 3; count += 1) {
  function gcd(a, b) {
    a = Math.abs(a)
    b = Math.abs(b)
    while (b) {
      a %= b;
      [a, b] = [b, a]
    }
    return a
  }

  let number1 = Math.floor(Math.random() * (20 - 1 + 1)) + 1
  let number2 = Math.floor(Math.random() * (20 - 1 + 1)) + 1

  let multip = Math.floor(Math.random() * (5 - 1 + 1)) + 1

  Math.random() < 0.5 ? number1 = number2 * multip : number2 = number1 * multip

  if (Math.random() < 0.25) {
    Math.random() < 0.5 ? number1 += Math.floor(Math.random() * (5 - 1 + 1)) + 1 : number2 += Math.floor(Math.random() * (5 - 1 + 1)) + 1
  }

  console.log(`Question: ${number1} ${number2}`)

  const userAnswer = readlineSync.question('Your answer: ')
  const systemAnswer = gcd(number1, number2)

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
