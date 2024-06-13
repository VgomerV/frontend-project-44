import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandomNum = 1000;

const isNumPrime = (number) => {
  if (number < 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const number = getRandomInt(0, maxRandomNum);
  const predicate = isNumPrime(number);
  const question = number;

  const correctAnswer = predicate ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
