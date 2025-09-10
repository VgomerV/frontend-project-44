import gameCore, { getRandomInt } from '../index.js'

const gameRules = lang => lang.rulesGcdGame

const findGCD = (firstNum, secondNum) => {
  let dividend = firstNum > secondNum ? firstNum : secondNum
  let divisor = firstNum < secondNum ? firstNum : secondNum

  while (divisor > 0) {
    const remainder = dividend % divisor
    dividend = divisor
    divisor = remainder
  }

  return dividend.toString()
}

const gcdGameLogic = (difficulty) => {
  const maxRandomInt = difficulty === 'n' ? 100 : 200
  const randomNum1 = getRandomInt(0, maxRandomInt)
  const randomNum2 = getRandomInt(0, maxRandomInt)

  const question = `${randomNum1} ${randomNum2}`
  const correctAnswer = findGCD(randomNum1, randomNum2)

  return [question, correctAnswer]
}

export default () => gameCore(gameRules, gcdGameLogic)
