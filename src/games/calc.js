import gameCore, { getRandomInt } from '../index.js'

const gameRules = 'What is the result of the expression?'
const maxRandomInt = 20
const operationSymbols = ['+', '-', '*']

const calcGameLogic = () => {
  const randomNum1 = getRandomInt(0, maxRandomInt)
  const randomNum2 = getRandomInt(0, maxRandomInt)
  const mathSymbolIn = getRandomInt(0, 3)
  const mathSymbol = operationSymbols[mathSymbolIn]

  let question = `${randomNum1} ${mathSymbol} ${randomNum2}`
  let correctAnswer = 0

  switch (mathSymbol) {
    case '+':
      correctAnswer = (randomNum1 + randomNum2).toString()
      break
    case '-':
      correctAnswer = (randomNum1 - randomNum2).toString()
      break
    case '*':
      correctAnswer = (randomNum1 * randomNum2).toString()
      break
    default:
      question = 'Error, no mathematical operation sign defined. Specify "next" to advance to the next round.'
      correctAnswer = 'next'
      break
  }

  return [question, correctAnswer]
}

export default () => gameCore(gameRules, calcGameLogic)
