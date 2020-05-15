//game value

let min = 1,
    max = 10,
    winningNum=getRandomNum(min,max),
    guessesLeft=3;

// ui elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      message = document.querySelector('.message'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input');

// assign value
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.className==='play-again'){
    window.location.reload();
    }
} );


//add event listener

guessBtn.addEventListener('click', function(){

    let guess = parseInt(guessInput.value);

     if(isNaN(guess) || guess < min || guess > max){
         setMessage(`Please enter a number between ${min} and ${max}`,'red');
         guessInput.style.borderColor = 'red';
     }
     else{
    // check if won
     if( guess === winningNum){
      //game over - won
        gameOver(true,`Congratulation !  "You Won" `,'green');
     }
        
     else{}
         guessesLeft -= 1;
          
          if(guessesLeft === 0){
            //gameOver - lost
            gameOver(false,`You Lost ,Game Over . ${winningNum} was the winning number`);
            
          }
          else{
              //came continue
              setMessage(`${guess} is not correct. ${guessesLeft} guessess left`,'red');
              guessInput.style.borderColor = 'red';
          }
     }
    });

    //game over
    function gameOver( won , msg ){

        let color;
        won == true? color ='green':color="red"
        //disable input
        guessInput.disabled = true;
        //change border color
        guessInput.style.borderColor = color;
        //message color
        message.style.color = color;
         
        setMessage(msg);
         //play again

         guessBtn.value = 'Play Again'
         //classname
         guessBtn.className = 'play-again';

    }
 //set message
 function setMessage(msg,color){
     message.style.color = color ;
     message.textContent = msg;
 }

 function getRandomNum(min,max){
   return Math.floor(Math.random()*(max-min+1)+min);
     
 }

