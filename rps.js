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


// do{
//     value=prompt("input rock, paper, or scissors");

// } while( !(value == "rock" || value == "paper" || value == "scissors")) 
//     console.log(value);


let rand = 0
rand=Math.floor(Math.random()*3)
console.log(rand)
if (rand>=0 && rand<1){
    bot="rock"
}
if (rand>=1 && rand<2){
    bot="paper"
}
if (rand>=2 && rand<=3){
    bot="scissors"
}

console.log(`bot chose ${bot}`)