#!/usr/bin/env node

import { greet } from '../src/cli.js';
import { getRandomInt } from '../src/components.js';
import readlineSync from 'readline-sync';

console.log(greet());
  
const gameBrainEven = () => {
    const gameConditions = 'Answer "yes" if the number is even, otherwise answer "no".';
    const numQuestions = 3;
    
    console.log(gameConditions);
  
    let i = 1;

    while (i <= numQuestions) {
      const randomNum = getRandomInt(100);
      
      console.log(`Question: ${randomNum}`);
      
      const answerUser = readlineSync.question('Your answer: ');;
      
  
      const isEvenRandomNum = randomNum % 2 === 0;
      let correctAnswer;
      isEvenRandomNum ? correctAnswer = 'yes' : correctAnswer = 'no';
  
      if (correctAnswer === answerUser) {
        console.log('Correct!');
      } else {
        return console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, Sam!`);
      }
  
      i += 1;
    };
  
    console.log('Congratulations, Sam!');
  };
  
  console.log(gameBrainEven());