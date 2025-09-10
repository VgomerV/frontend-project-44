import gameCore, { getRandomInt } from '../index.js'

const gameRules = lang => lang.rulesProgressionGame

const progressionGameLogic = (difficulty) => {
  const minLength = difficulty === 'n' ? 5 : 10
  const maxLength = difficulty === 'n' ? 10 : 15
  const minStep = difficulty === 'n' ? 2 : 6
  const maxStep = difficulty === 'n' ? 2 : 13

  const lengthArray = getRandomInt(minLength, maxLength)
  const hiddenIn = getRandomInt(1, lengthArray - 1)
  let startNum = getRandomInt(2, 50)
  const step = getRandomInt(minStep, maxStep)
  const arrayProgression = [startNum]
  let correctAnswer = startNum.toString()

  for (let i = 1; i < lengthArray; i += 1) {
    const currentNum = startNum + step
    if (i === hiddenIn) {
      arrayProgression.push('..')
      correctAnswer = currentNum.toString()
    }
    else {
      arrayProgression.push(currentNum)
    }
    startNum = currentNum
  }

  const question = arrayProgression.join(' ')

  return [question, correctAnswer]
}

export default () => gameCore(gameRules, progressionGameLogic)
