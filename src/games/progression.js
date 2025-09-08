import gameCore, { getRandomInt } from '../index.js'

const gameRules = 'What number is missing in the progression?'

const progressionGameLogic = () => {
  const lengthArray = getRandomInt(5, 10)
  const hiddenIn = getRandomInt(1, lengthArray - 1)
  let startNum = getRandomInt(2, 50)
  const step = getRandomInt(2, 6)
  const arrayProgression = [startNum]
  let correctAnswer = startNum.toString()

  for (let i = 1; i < lengthArray; i += 1) {
    const currentNum = startNum + step
    if (i === hiddenIn) {
      arrayProgression.push('..')
      correctAnswer = currentNum.toString()
    } else {
      arrayProgression.push(currentNum)
    }
    startNum = currentNum
  }

  const question = arrayProgression.join(' ')

  return [question, correctAnswer]
}

export default () => gameCore(gameRules, progressionGameLogic)
