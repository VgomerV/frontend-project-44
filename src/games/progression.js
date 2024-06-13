import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What number is missing in the progression?';

// логика вычислений
const getProgression = (progresLength, initProgres, difProgres, unknowNum) => {
  const rowNums = [initProgres];

  for (let i = 0; i < progresLength; i += 1) {
    rowNums.push(rowNums[i] + difProgres);
  }

  const missingValue = rowNums[unknowNum].toString();

  rowNums[unknowNum] = '..';

  return [missingValue, rowNums];
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const progresLength = getRandomInt(5, 10); // длина прогрессии
  const initProgres = getRandomInt(0, 50); // начальное число прогрессии
  const difProgres = getRandomInt(2, 5); // шаг разности
  const unknowNum = getRandomInt(0, progresLength); //  индекс неизвестного числа

  const [missingValue, rowNums] = getProgression(progresLength, initProgres, difProgres, unknowNum);

  const correctAnswer = missingValue;

  const question = rowNums.join(' ');

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
