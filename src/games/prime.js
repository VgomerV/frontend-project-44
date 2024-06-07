import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const maxRandomNum = 1000;

// логика вычислений
const operationPrime = () => {
  const number = Math.trunc(getRandomInt(0, maxRandomNum));

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

  return [number, predicate];
}

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const [number, predicate] = operationPrime();

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
