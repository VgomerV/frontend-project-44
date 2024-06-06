import readlineSync from 'readline-sync';
import greeting from './cli.js';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
  
export default (ConditionsGame, QusetionAndCorrectAnswer) => {
  const numRoundCount = 3;
  const userName = greeting();

  console.log(ConditionsGame);
  
  let i = 1;

  while (i <= numRoundCount) {
    const [question, correctAnswer] = QusetionAndCorrectAnswer();
      
    console.log(`Question: ${question}`);
      
    const answerUser = readlineSync.question('Your answer: ');

    if (correctAnswer === answerUser) {
      console.log('Correct!');
    } else {
      return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    };
  
    i += 1;
    };

  return console.log(`Congratulations, ${userName}!`);
};
