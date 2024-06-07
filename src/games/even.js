import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxRandomNum = 100;

// логика вычислений
const getRandomNum = () => {
  const randomNum = Math.trunc(getRandomInt(0, maxRandomNum));
  return randomNum;
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const question = getRandomNum();

  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
