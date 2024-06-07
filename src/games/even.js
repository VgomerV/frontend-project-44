import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const maxRandomNum = 100;
  const question = Math.trunc(getRandomInt(0, maxRandomNum));

  let correctAnswer;
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
