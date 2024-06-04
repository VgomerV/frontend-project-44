import gameLogic from './index.js';
import { getRandomInt } from './index.js';

// условия/описания игры
  const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".'; 

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const maxRandomNum = 100;
  const question = getRandomInt(maxRandomNum);

  const isEvenRandomNum = question % 2 === 0;
  let correctAnswer;
  isEvenRandomNum ? correctAnswer = 'yes' : correctAnswer = 'no';

  return [question, correctAnswer];
};

export default () => {
  return gameLogic(gameCondition, getQusetionAndCorrectAnswer);
};