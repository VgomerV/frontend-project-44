import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${userName}!`);
};
