//the number need to guess
let favNumber = 4

let guess;
// a while loop statement that will check the guess number if correct 
while (guess !== favNumber) {
    
    guess = parseInt(prompt(" enter your guess: "));
    
    if (guess < favNumber){
        console.log(" to low!");
    } else if (guess > favNumber){
        console.log(" to high!");
    } else {
        console.log(" correct!");
    } 
}
