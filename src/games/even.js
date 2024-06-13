import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxRandomNum = 100;

const isNumEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }

  return false;
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const question = getRandomInt(0, maxRandomNum);
  let correctAnswer;
  isNumEven(question) ? correctAnswer = 'yes' : correctAnswer = 'no';

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
