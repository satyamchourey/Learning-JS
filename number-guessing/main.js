var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

function guessClick (e){
    e.preventDefault();
    var userGuess = Number(guessField.value);
    if (guessCount===1){
        guesses.textContent = "previous guess :";
    }
    guesses.textContent += userGuess + " ,";
    if (userGuess === randomNumber){
        lastResult.textContent="congrats , you got it right ."
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent="";
        setGameOver();

    }else if (guessCount===10){
        lastResult.textContent="Game Over"
        setGameOver();
    }else{
        lastResult.textContent="Wrong";
        lastResult.style.backgroundColor="red";
        if (userGuess<randomNumber){
            lowOrHi.textContent="Last Guess was LOWER";
        } else if (userGuess>randomNumber){
            lowOrHi.textContent="Last Guess Was HIGHER";
        }
    }
guessCount++;
guessField.value="";
guessField.focus();
}
// guessSubmit.addEventListener("click", guessClick);
var form = document.querySelector(".form");
form.addEventListener("submit",guessClick);

function setGameOver(){
    guessField.disabled =true;
    guessSubmit.disabled=true;
    resetButton = document.createElement("button");
    resetButton.textContent="Start new Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);

}




function resetGame(){
    guessCount=1;
    var resetParas = document.querySelector(".resultParas p ")
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
}