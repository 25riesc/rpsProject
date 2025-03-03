console.log ("Welcome to Rock, Paper, Scissors")


/* steps vvv
- prompt for imput(rock, paper, or scissors)
- if none of them, ask again
- record imput
- computer randomly comes up with an num, 
- round to integer, assign integers to r, p, and s (1,2,3)
- if imput =rock && generated num=paper, lose, console log (you lose, paper beats rock)
- for all of them, add one to win counter, if loss, add one to loss counter
- if draw, prompt again, dont record a win or loss
- once either win or loss reaches 5, display "game win" or "game loss" accordingly.
*/





// bot choice randomizer
let rock=1
let paper=2
let scissors=3
let rand = 0
rand=Math.floor(Math.random()*3)
console.log(rand)
if (rand>=0 && rand<1){
    botChoice="rock"
}
if (rand>=1 && rand<2){
    botChoice="paper"
}
if (rand>=2 && rand<=3){
    botChoice="scissors"
}

//player prompt
do{
    playerChoice=prompt("input rock, paper, or scissors");

} while( !(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" )) 
console.log(`player chose ${playerChoice}`);
console.log(`bot chose ${botChoice}`)

if (botChoice==playerChoice){
console.log(`${botChoice} ties with ${playerChoice}, go again`)
}


