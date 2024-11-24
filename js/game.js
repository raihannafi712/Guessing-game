let PlayerOne = document.querySelector(".playerOne");
let PlayerOneInput = document.querySelector(".playerOneInput");
let PlayerOneBtn = document.querySelector(".playerOneBtn");
let playerOneError = document.querySelector(".playerOneError");
let playernumber;
let playerTwo = document.querySelector('.playerTwo');
let PlayerTwoInput = document.querySelector(".playerTwoInput");
let PlayerTwoBtn = document.querySelector(".playerTwoBtn");
let playerTwoError = document.querySelector(".playerTwoError");
let trial = document.querySelector(".trial");

let counts = 3;


PlayerOneBtn.addEventListener("click" ,()=>{
    if(PlayerOneInput.value){
         if(PlayerOneInput.value - 10){
                if (PlayerOneInput.value > 999 && PlayerOneInput.value < 10000) {
                    playernumber = PlayerOneInput.value
                    playerTwo.style.display = 'block'
                    PlayerOne.style.display = 'none'
                    
                } else {
                    playerOneError.innerHTML = '(Please Enter a 4 digit number)'
                }
        }else{
            playerOneError.innerHTML = 'Please Enter a Number, not a string'
        }
    }else{
        playerOneError.innerHTML = 'Please Enter Number'
        
    }
    
} )

PlayerTwoBtn.addEventListener("click" ,()=>{
    if (PlayerTwoInput.value) {
        if (PlayerTwoInput.value - 10) {
             if (PlayerTwoInput.value > 999 && PlayerTwoInput.value < 10000) {
                    if (playernumber == PlayerTwoInput.value) {
                        playerTwoError.innerHTML = 'You win!'
                        
                    } else {
                        counts--
                        if (counts < 1) {
                            trial.innerHTML = "";
                            playerTwoError.innerHTML = 'You lose!'
                            
                        } else if (counts > 1 && PlayerTwoInput.value == PlayerOneInput) {
                            counts--
                            trial.innerHTML = counts
                        }else {
                            trial.innerHTML = counts
                        }
                        
                    }
             } else {
                playerTwoError.innerHTML = '(Please Enter a Number between 1 to 9)'
             }
        } else {
            playerTwoError.innerHTML = 'Please Enter a Number, not a string'
        }
    } else {
        playerTwoError.innerHTML = "Please enter number"
    }
})
