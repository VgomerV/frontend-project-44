import readlineSync from 'readline-sync';

const numRoundCount = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  const userName = getUserName;
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min, max) => Math.random() * (max - min) + min;

export default (conditionsGame, qusetionAndCorrectAnswer) => {
  const userName = greeting();

  console.log(conditionsGame);

  let i = 1;

  while (i <= numRoundCount) {
    const [question, correctAnswer] = qusetionAndCorrectAnswer();

    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }

    i += 1;
  }

  return console.log(`Congratulations, ${userName}!`);
};
