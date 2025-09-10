import gameCore, { getRandomInt } from '../index.js'

const gameRules = lang => lang.rulesPrimeGame

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

const primeGameLogic = (currentLang, difficulty) => {
  const minRandomInt = 1
  const maxRandomInt = difficulty === 'n' ? 100 : 1000
  const randomNum = getRandomInt(minRandomInt, maxRandomInt)
  const correctAnswer = isPrime(randomNum) ? currentLang.yes : currentLang.no

  return [randomNum, correctAnswer]
}

export default () => gameCore(gameRules, primeGameLogic)
