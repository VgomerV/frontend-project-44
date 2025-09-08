import gameCore, { getRandomInt } from '../index.js'

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".'
const maxRandomInt = 100

const isEvenInt = num => num % 2 === 0 ? true : false

const evenGameLogic = () => {
  const randomNum = getRandomInt(0, maxRandomInt)
  const correctAnswer = isEvenInt(randomNum) ? 'yes' : 'no'

  return [randomNum, correctAnswer]
}

export default () => gameCore(gameRules, evenGameLogic)
