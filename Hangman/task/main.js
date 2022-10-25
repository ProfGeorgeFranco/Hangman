// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')
/*
************************ Stage 4 ************************
let dictionary = ["python", "java", "swift", "javascript"];

function getRandom() {
    return Math.floor(Math.random() * dictionary.length);
}

function changeWord (wordRandom) {
    let wordEasy = wordRandom.slice(0, 3);
    wordEasy = `${wordEasy}`+ "-".repeat(wordRandom.length - 3);
    return wordEasy;
}

let wordHang = dictionary[getRandom()]
let wordHint = changeWord(wordHang);


console.log(`H A N G M A N`);

let userGuess = input(`Guess the word ${wordHint}: `);

userGuess === wordHang ? console.log("You survived!") : console.log("You lost!");

************************ Stage 5 ************************


let dictionary = ["python", "java", "swift", "javascript"];

function getRandom() {
    return Math.floor(Math.random() * dictionary.length);
}

let wordHang = dictionary[getRandom()];

let userAttempts = 8;

let wordHint = wordHang.split('').fill('-', 0, wordHang.length).join(``);

let userLetter;

console.log(`H A N G M A N  // ${userAttempts} attempts\n`);

console.log(wordHint);

function showHint(char){
    let wordTemp = wordHint.split('');

    if (wordHang.includes(char)) {
        for (i = 0; i < wordHang.length; i++) {
            if (wordHang[i] === char) {
                wordTemp[i] = char;
            }
        }
    } else {
        console.log("That letter doesn't appear in the word.");
    }
    wordHint = wordTemp.join(``);
}

while (userAttempts > 0){

    userLetter = input("Input a letter: ");
    showHint(userLetter);
    console.log("");

    console.log(wordHint);
    userAttempts--;
}

console.log("\nThanks for playing!");

*/

let dictionary = ["python", "java", "swift", "javascript"];

let userAttempts = 8;

let victory = false;

let userTried =[];

let wordHang = dictionary[Math.floor(Math.random() * dictionary.length)];

let wordHint = wordHang.split('').fill('-').join(``);

let userAction = "";

let userVictories = 0;

let userLosses = 0;

function validInput(char){
    if (char === null){
        return false;
    } else if (char.length !== 1){
        console.log ("Please, input a single letter.\n");
        return false;
    } else if ((char < 'a') || (char > 'z') ) {
        console.log("Please, enter a lowercase letter from the English alphabet.\n");
        return false;
    } else {
        return true;

    }

}

function checkGuess(char){
    if (validInput(char)){
        wordHint = wordHint.split('');

        if (wordHang.includes(char) && (!userTried.includes(char))) {
            for (let i = 0; i < wordHang.length; i++) {
                if (wordHang[i] === char) {
                    wordHint[i] = char;
                }
            }
            userTried.push(char);
            console.log("");

        } else {
            if (userTried.includes(char)) {
                console.log(`You've already guessed this letter.\n`);
            } else {
                console.log(`That letter doesn't appear in the word. # ${--userAttempts} attempts\n`);
                userTried.push(char);
            }
        }

        if (!wordHint.includes("-")){
            victory =true;
        }

        wordHint = wordHint.join(``);

    }

}

function msgVictory(){
    console.log(`You guessed the word ${wordHang}!
You survived!`);
}

//****************** Main function ******************

console.log(`H A N G M A N  // ${userAttempts} attempts`);

while (userAction !== "exit"){
    userAction = input(`Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit:`)

    if (userAction === "results") {
        console.log(`You won: ${userVictories} times.
You lost: ${userLosses} times.`);

    } else if (userAction === "play") {
        userAttempts = 8;

        userTried =[];

        wordHang = dictionary[Math.floor(Math.random() * dictionary.length)];

        wordHint = wordHang.split('').fill('-').join(``);

        victory = false;

        while ((userAttempts > 0) && (!victory)) {
            console.log(wordHint);
            checkGuess(input("Input a letter: "));

            if (victory){
                msgVictory();
                userVictories++;
            }

            if (userAttempts === 0) {
                console.log("You lost!");
                userLosses++;
            }
        }
    }

}