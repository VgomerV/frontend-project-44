export default {
  difficulty: 'Choose the difficulty of the game, specify "e" for normal and "h" for hard.',
  greeting: 'Welcome to the Brain Games!',
  questionAboutName: 'May I have your name?',
  hello: 'Hello,',
  question: 'Question:',
  answer: 'Your answer:',
  lostGame: (userAnswer, correctAnswer, userName) => {
    return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}!`
  },
  winGame: 'Congratulations,',
  rulesCalcGame: 'What is the result of the expression?',
  rulesEvenGame: 'Answer "yes" if the number is even, otherwise answer "no".',
  rulesGcdGame: 'Find the greatest common divisor of given numbers.',
  rulesPrimeGame: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  rulesProgressionGame: 'hat number is missing in the progression?',
  yes: 'yes',
  no: 'no',
}
