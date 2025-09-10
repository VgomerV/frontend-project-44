export default {
  difficulty: 'Выберите сложность игры, укажите "e" для нормальной и "h" для сложной. ',
  greeting: 'Добро пожаловать на Brain Games!',
  questionAboutName: 'Могу я узнать ваше имя? ',
  hello: 'Приветствую,',
  question: 'Вопрос:',
  answer: 'Ваш ответ: ',
  lostGame: (userAnswer, correctAnswer, userName) => {
    return `${userAnswer} неправильный ответ ;(. Правильный ответ ${correctAnswer}. Попробуйте еще раз, ${userName}!`
  },
  winGame: 'Поздравляем,',
  rulesCalcGame: 'Каков результат выражения?',
  rulesEvenGame: 'Ответьте «да», если номер четный, в противном случае ответьте «нет».',
  rulesGcdGame: 'Найдите наибольший общий делитель заданных чисел.',
  rulesPrimeGame: 'Ответьте «да», если данное число является простым. В противном случае ответьте «нет».',
  rulesProgressionGame: 'Определите отсутствующее число в прогрессии.',
  yes: 'да',
  no: 'нет',
}
