import gameLogic, { getRandomInt } from './index.js';

// условия/описания игры
const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no"';

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const number = getRandomInt(1000);

  const question = number;

  let correctAnswer;

  const isNumPrime = (num) => {
    let predicate = true;

    if (num < 1) {
      return predicate = false;
    } else {
        for (let i = 2; i < num - 1; i += 1) {
          if (num % i === 0) {
          return predicate = false;
          };
        };
    };
    return predicate;
  };

  isNumPrime(number) ? correctAnswer = 'yes' : correctAnswer = 'no';

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
