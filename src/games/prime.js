import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandomNum = 1000;

const getRandomNum = () => {
  const randomNum = getRandomInt(0, maxRandomNum);
  return randomNum;
};

const isNumPrime = (number) => {
  let predicate = true;

  if (number < 1) {
    predicate = false;
  } else {
    for (let i = 2; i < number - 1; i += 1) {
      if (number % i === 0) {
        predicate = false;
      }
    }
  }
  return predicate;
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const number = getRandomNum();

  const predicate = isNumPrime(number);

  const question = number;

  let correctAnswer;

  if (predicate) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
