// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word: ");
   points = oldScrabbleScorer(word);
   console.log(points);
   return word;
};


//let simpleScorer;
function simpleScorer(word) {
   word = word.toUpperCase();
   let score = 0;
   for (i=0; i<word.length; i++) {
      score += 1;
   }
   return score;
}

//let vowelBonusScorer;
function vowelBonusScorer(word) {
   word = word.toUpperCase();
   let vowels = ['A', 'E', 'I', 'O', 'U', 'Y']
   let score = 0;
   for (i=0; i<word.length; i++) {
      if(vowels.includes(word[i])) {
         score +=3;
      } else {
         score +=1;
      }
   }
   return score
}

//let scrabbleScorer;
function scrabbleScorer(word) {
   score = 0;
   word = word.toLowerCase();
   for (i=0; i<word.length; i++) {
      let points = newPointStructure[word[i]];
      score += points;
      }
   return score;[]
}

//const scoringAlgorithms = [];
let simpleScorerObject = {
   name: 'Simple Score',
   description: 'Each letter is worth 1 point.',
   scorerFunction: simpleScorer
 };
 
 let vowelScorerObject = {
   name: 'Bonus Vowels',
   description: 'Vowels are 3 points, consonants are 1 point.',
   scorerFunction: vowelBonusScorer
 }; 
 
 let scrabbleScorerObject = {
   name: 'Scrabble',
   description: 'Uses the scrabble point system.',
   scorerFunction: scrabbleScorer
 };
 
 const scoringAlgorithms = [simpleScorerObject, vowelScorerObject, scrabbleScorerObject];
// const scoringAlgorithms = [
//    {name:"Simple Score", description:"Each letter is worth 1 point", scoringFunction: simpleScorer},
//    {name:"Bonus Vowel", description:"Vowel are 3 pts, consonants are 1pts", scoringFunction: vowelBonusScorer},
//    {name:"Scrabble", description:"Uses scrabble point system", scoringFunction: scrabbleScorer}
//    ];

function scorerPrompt() {
   //scorerToUse = input.question(`\n Which scorer would you like to use?\n
   //Enter 0 for ${scoringAlgorithms[0].name}.\n
   //Enter 1 for ${scoringAlgorithms[1].name}.\n
   //enter 2 for ${scoringAlgorithms[2].name}.`);
   //return scoringAlgorithms[scorerToUse];

    // Display each algorithm in the scoringAlgorithms array
   console.log("Available Scoring Algorithms:\n");
   for (let i = 0; i < scoringAlgorithms.length; i++) {
     console.log(`${i}: ${scoringAlgorithms[i].name}. ${scoringAlgorithms[i].description}`);
   }
  
   let scorerToUse = input.question("\nWhich scoring algorithm would you like to use? \nEnter 0, 1, or 2: ");
   scorerToUse = Number(scorerToUse)
  while
   (scorerToUse < 0 || scorerToUse > 2 || isNaN(scorerToUse)){
    scorerToUse = input.question("Invalid input. Please enter the number beetween 0 and 2: ");
    scorerToUse = Number(scorerToUse)
   }
   console.log(`\nYour choice is ${scoringAlgorithms[scorerToUse].name} Algorithm.`);
  console.log (`\nScore for your word '${word}': ${scoringAlgorithms[scorerToUse].scorerFunction(word)}`);
}

let newPointStructure = transform(oldPointStructure);
//function transform() {};
function transform(obj) {
   newScrabbleScorer = {};
   for(pointValue in obj) {
      for(const letter of obj[pointValue]) {
         newScrabbleScorer[letter.toLowerCase()] = Number(pointValue);
      }
   }
   return newScrabbleScorer;
};



function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};