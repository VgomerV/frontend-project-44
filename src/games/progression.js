import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What number is missing in the progression?';

// логика вычислений
const getProgression = (progressionLength, initProgression, diffProgression, unknowNum) => {
  const rowNums = [initProgression];

  for (let i = 0; i < progressionLength; i += 1) {
    rowNums.push(rowNums[i] + diffProgression);
  }

  const missingValue = rowNums[unknowNum].toString();

  rowNums[unknowNum] = '..';

  return [missingValue, rowNums];
};

// формирование данных вопроса и корректного ответа
const getQusetionAndCorrectAnswer = () => {
  const progresLength = getRandomInt(5, 10); // длина прогрессии
  const initProgres = getRandomInt(0, 50); // начальное число  прогрессии
  const diffProgres = getRandomInt(2, 5); // шаг разности
  const unknowNum = getRandomInt(0, progressionLength); //  индекс неизвестного числа

  const [missingValue, rowNums] = getProgression(progresLength, initProgres, diffProgres, unknowNum);

  const correctAnswer = missingValue;

  const question = rowNums.join(' ');

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
