import gameCore, { getRandomInt } from '../index.js'

const gameRules = lang => lang.rulesEvenGame

const isEvenInt = num => num % 2 === 0 ? true : false

const evenGameLogic = (currentLang, difficulty) => {
  const maxRandomInt = difficulty === 'n' ? 100 : 1000
  const randomNum = getRandomInt(0, maxRandomInt)
  const correctAnswer = isEvenInt(randomNum) ? currentLang.yes : currentLang.no

  return [randomNum, correctAnswer]
}

export default () => gameCore(gameRules, evenGameLogic)
