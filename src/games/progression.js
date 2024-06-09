import gameLogic, { getRandomInt } from '../index.js';

// условия/описания игры
const gameCondition = 'What number is missing in the progression?';

const getRandomParameters = () => {
  const progressionLength = getRandomInt(5, 10); // длина прогрессии
  const initProgression = getRandomInt(0, 50); // начальное число  прогрессии
  const diffProgression = getRandomInt(2, 5); // шаг разности
  const unknowNum = getRandomInt(0, progressionLength); //  индекс неизвестного числа

  return [progressionLength, initProgression, diffProgression, unknowNum];
};

// логика вычислений
const getProgression = () => {
  const [progressionLength, initProgression, diffProgression, unknowNum] = getRandomParameters();
  
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
  const [missingValue, rowNums] = getProgression();

  const correctAnswer = missingValue;

  const question = rowNums.join(' ');

  return [question, correctAnswer];
};

export default () => gameLogic(gameCondition, getQusetionAndCorrectAnswer);
