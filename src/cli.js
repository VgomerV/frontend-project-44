import readlineSync from 'readline-sync';

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  const userName = getUserName;
  console.log(`Hello, ${userName}!`);
  return userName;
};
