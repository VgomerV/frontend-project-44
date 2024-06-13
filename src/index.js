import readlineSync from 'readline-sync';

const roundsCount = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  const userName = getUserName;
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);

export default (conditionsGame, questionAndCorrectAnswer) => {
  const userName = greeting();

  console.log(conditionsGame);

  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = questionAndCorrectAnswer();

    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};
