// const random = parseInt(Math.random() * 100 + 1)

// const submit = document.querySelector("#subt")
// const userInput = document.querySelector("#guessField")
// const remaing = document.querySelector("#lastResult")
// const lowHigh = document.querySelector(".lowOrHi")
// const guessSlot = document.querySelector(".guesses")
// const p = document.createElement("p")

// let prevGuess = [];
// let newGuess = i;
// let playGame = true;

// if (playGame) {
//     submit.addEventListener("click", function (e) {
//         e.preventDefault
//         validate(guess)
//     })
// }

// function validate(guess) {
//     if (isNaN(guess)) {
//         alert("please enter a number")
//     }
//     else if (guess < 1) {
//         // alert
//         alert("Please enter a number greater than 1 ")
//     }
//     else if (guess > 100) {
//         // alert
//         alert("Please enter a number lesser than 100 ")
//     }
//     else {
//         prevGuess.push(guess)
//         if (newGuess === 11) {
//             dispalyGuess(guess)
//             dispalyMessage("Game over")
//             endGame()
//         }
//         else {
//             dispalyGuess(guess)
//             checkGuess(guess)
//         }
//     }

// }
// function checkGuess(guess) {
//     if (guess === random) {
//         dispalyMessage("You guessed it right")
//         endGame()
//     }
//     else if (guess < random) {
//         dispalyMessage("number is too low")
//     }
//     else if (guess > random) {
//         dispalyMessage("number is too high")
//     }
// }

// function dispalyGuess(guess) {
//     userInput.value = ""
//     guessSlot.innerHTML += `${guess} `
//     newGuess++
//     remaing.innerHTML = `${11 - newGuess}`
// }
// function dispalyMessage(message) {
//     lowHigh.innerHTML = `<h2>${message}</h2>`
// }

// function endGame() {
//     userInput.value = ""
//     userInput.setAttribute('disable', "")
//     p.classList.add("button")
//     p.innerHTML = "<h2> id newGamess Start new game</h2>";
//     startOver.appendChild(p)
//     playGame = false
//     newGame()
// }
// function newGame() {
//     const newGameButton = document.querySelector("$newGamess")
// }



let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('PLease enter a valid number');
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Number is TOOO low`);
    } else if (guess > randomNumber) {
        displayMessage(`Number is TOOO High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    });
}








