import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What number is missing in the progression?';

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const arrLength = Math.trunc(getRandomInt(5, 10)); // длина прогрессии

  const initProgression = Math.trunc(getRandomInt(0, 50)); // начальное число  прогрессии

  const diffProgression = Math.trunc(getRandomInt(2, 5)); // шаг разности

  const unknowNum = Math.trunc(getRandomInt(0, arrLength)); //  индекс неизвестного числа

  const rowNums = [initProgression];

  for (let i = 0; i < arrLength; i += 1) {
    rowNums.push(rowNums[i] + diffProgression);
  }

  const correctAnswer = rowNums[unknowNum].toString();
  rowNums[unknowNum] = '..';

  const question = rowNums.join(' ');

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
