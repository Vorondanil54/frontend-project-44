#!/usr/bin/env node

import readlineSync from 'readline-sync'
import { greet } from '../src/cli.js'

const username = greet()

console.log('What number is missing in the progression?')

let answerWrong = false

for (let count = 1; count <= 3; count += 1) {
  const start = Math.floor(Math.random() * (17 - 1 + 1)) + 1
  const step = Math.floor(Math.random() * (7 - 1 + 1)) + 1

  let progression = `${start} `

  const max = Math.floor(Math.random() * (10 - 5 + 1)) + 5
  let unknownPosition = Math.floor(Math.random() * (max - 1 + 1)) + 1
  let unknownNumber
  let current = start + step
  for (let i = 1; i <= max; i += 1) {
    if (i === unknownPosition) {
      unknownNumber = current
      progression += '.. '

      i += 1
      current += step

      continue
    }

    progression += `${current} `
    current += step
  }

  progression.slice(0, progression.length - 1)

  console.log(`Question: ${progression}`)

  const userAnswer = readlineSync.question('Your answer: ')
  const systemAnswer = unknownNumber

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
