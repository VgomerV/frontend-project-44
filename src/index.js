import readlineSync from 'readline-sync'
import locale from './locales/index.js'

const getRandomInt = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + min)
}

const gameCore = (gameRules, gameLogic) => {
  const chooseLangMessage = 'Выберите язык интерфейса игры, напишите "ru" для русского языка, "en" для английского языка / Choose the language of the game interface, write "ru" for Russian, "en" for English >>> '
  let lang
  let isLangSelected = !false

  while (isLangSelected) {
    lang = readlineSync.question(`${chooseLangMessage}`)
    if (lang === 'ru' || lang === 'en') {
      isLangSelected = !true
    }
  }

  const currentLang = locale(lang)

  const difficulty = readlineSync.question(currentLang.difficulty)
  const roundCount = difficulty === 'n' ? 3 : 6

  console.log(currentLang.greeting)
  const userName = readlineSync.question(currentLang.questionAboutName)
  console.log(`${currentLang.hello} ${userName}!`)
  console.log(gameRules(currentLang))

  let roundNumber = 1

  while (roundNumber <= roundCount) {
    const [question, correctAnswer] = gameLogic(currentLang, difficulty)

    console.log(`${currentLang.question} ${question}`)

    const userAnswer = readlineSync.question(currentLang.answer)

    if (userAnswer !== correctAnswer) {
      console.log(currentLang.lostGame(userAnswer, correctAnswer, userName))
      return
    }

    roundNumber += 1
  }

  console.log(`${currentLang.winGame} ${userName}!`)
}

export { getRandomInt }
export default gameCore
