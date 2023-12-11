const guessNumber = document.getElementById('guessNumber');
const submit = document.getElementById('submit');
const preiousGuess = document.getElementById('previousGuess');
const remainingGuess = document.getElementById('remainingGuess');
const highorlow = document.getElementById('hiorlow');
const resultpara = document.getElementById('resultpara');
const input = document.querySelector('#input');
const startGam = document.getElementById('startGame');
const rule = document.getElementById('rule');
const hr = document.getElementById('hr');
const innerContainer = document.getElementById('inner-container');

const p = document.createElement('p');

let playGame = true ;
let numberOfChance = 10;
let prevGuess = [];
let randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);
endGame();
function game(){
    if(playGame){
        submit.addEventListener('click',function(e){
        e.preventDefault();
        let guess = parseInt(guessNumber.value);
        console.log(guess);
        validateGuess(guess);
       })
    }
}

// if(playGame){
//     submit.addEventListener('click',function(e){
//     e.preventDefault();
//     const guess = parseInt(guessNumber.value);
//     console.log(guess);
//     validateGuess(guess);
//    })
// }

// functions 

function validateGuess(guess){
    if(guess == ''){
        alert('Please,Enter a valid value');
    }
    else if( guess < 0 || guess > 100){
        alert('Please,Enter a values less then 100 or greater then -1');
    }
    else if(isNaN(guess)){
        alert('Please,Value is required befor submit');
    }
    else{
        prevGuess.push(guess);
        if(numberOfChance === 11){
            displayGuess(guess);
            displayMessage(`Game is over And random number was ${randomNumber}`);
            setTimeout(endGame,5000);
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        highorlow.innerHTML = 'You are win !!';
        setTimeout( endGame,5000);
    }
    else if(guess < randomNumber){
        displayMessage('You guessed number is too low then the actual number');
    }
    else{
        displayMessage('You guessd number is too high then the actual number');
    }
}

function displayMessage(message){
    highorlow.innerHTML = `<h4>${message}</h4>`; 
}

function displayGuess(guess){
    guessNumber.value = '';
    preiousGuess.innerHTML += `${guess} ,`;
    numberOfChance++;
    remainingGuess.innerHTML = `${11-numberOfChance}`;
}

function endGame(){
    preiousGuess.innerHTML = '';
    remainingGuess.innerHTML = '';
    guessNumber.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id= "newGame">Start Game</h3>';
    input.style.display = 'none'
    p.style.padding = '10px 20px';
    p.style.border = '2px solid wheat';
    p.style.borderRadius = '10px'
    p.style.boxShadow = '4px 2px wheat'
    p.style.margin = '40px 0px';
    resultpara.style.display = 'none';
    startGam.appendChild(p);
    playGame = false ;
    rule.style.display = 'block';
    innerContainer.style.background = 'black';
    startGame();
}

// function startGame(){
//   const startgame = document.querySelector('#newGame');
//   startgame.addEventListener('click',function(e){
//     randomNumber = parseInt(Math.random()*100 + 1);
//     prevGuess = [];
//     guessNumber.removeAttribute('disabled');
//     numberOfChance = 10;
//     remainingGuess.innerHTML = '10';
//     // startGam.replaceWith('');
//     // input.style.display = 'block';
//     // resultpara.style.display = 'block';
//     highorlow.innerHTML = '';
//     resultpara.removeChild('p')
//     playGame = true ;
//   })
// }

function startGame(){
    startGam.addEventListener('click',function(e){
        resultpara.style.display = 'block';
        // startGam.removeChild(p);
        randomNumber = parseInt(Math.random()*100 + 1);
        playGame = true ;
        input.style.display = 'block';
        guessNumber.removeAttribute('disabled');
        numberOfChance = 1 ;
        remainingGuess.innerHTML = '10';
        highorlow.innerHTML = '';
        console.log(randomNumber);
        rule.style.display = 'none';
        hr.style.display = 'none';
        game();
    })
}