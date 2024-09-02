let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =document.createElement('p')

let prevguess = []
let numguess = 1

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateguess(guess)
    })
}

function validateguess (guess){
    if(isNaN(guess)){
        alert('Enter a valid No.')
    }
    else if (guess<1){
        alert('ENTER A No. greater than 1')
    }
    else if(guess>100){
        alert('Please Enter a number less than 100')
    }
    else{
        prevguess.push(guess)
        if(numguess > 10){
            //displayguess(guess)
            displaymessage("Maximum Limit reached")
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}


function checkguess (guess) {
    if(guess === randomNumber){
        displaymessage(`your Guess is Right`)
    }
    else if(guess < randomNumber){
        displaymessage(`Number is less`)
    }
    else if(guess > randomNumber){
        displaymessage(`Number is High`)
    }
}

function displayguess(guess){
    userInput.value = '' //cleanup the variable
    guessSlot.innerHTML += `${guess}, `  // Update the guessSlot content with the current guess
    numguess++
    remaining.innerHTML = `${11-numguess}`

}

function displaymessage (message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endgame (){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start New Game</h2>`
    startOver.appendChild(p);
    playgame = false
    newgame();
}

function newgame(){
    const newgamebutton = document.querySelector('#newgame')
    newgamebutton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevguess= []
        numguess=1;
        guessSlot.innerHTML= ''
        remaining.innerHTML = `${11- numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame = true
    })
}