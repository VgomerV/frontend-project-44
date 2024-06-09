import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const maxRandomNum = 100;

const getRandomNum = () => {
  const randomNum = getRandomInt(0, maxRandomNum);
  return randomNum;
};

const isNumEven = (num) => {
  let answer;
  if (num % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return answer;
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const question = getRandomNum();
  const correctAnswer = isNumEven(question);

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
