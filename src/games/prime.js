import gameCore, { getRandomInt } from '../index.js'

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
const minRandomInt = 1
const maxRandomInt = 100

const isPrime = (num) => {
  if (num === 2) {
    return true
  }

  if (num < 2 || num % 2 === 0) {
    return false
  }

  const limit = Math.sqrt(num)

  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const primeGameLogic = () => {
  const randomNum = getRandomInt(minRandomInt, maxRandomInt)
  const correctAnswer = isPrime(randomNum) ? 'yes' : 'no'

  return [randomNum, correctAnswer]
}

export default () => gameCore(gameRules, primeGameLogic)
