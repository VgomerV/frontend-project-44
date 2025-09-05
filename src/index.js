import readlineSync from 'readline-sync'

const roundCount = 3

const gameCore = (gameRules, gameLogic) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(gameRules)

  let roundNumber = 1

  while (roundNumber <= roundCount) {
    const [question, correctAnswer] = gameLogic()

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, Bill!`)
      return
    }

    roundNumber += 1
  }

  console.log(`Congratulations, ${userName}`)
}

export default gameCore
