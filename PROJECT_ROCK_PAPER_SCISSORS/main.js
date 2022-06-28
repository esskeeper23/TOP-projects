function computerPlay(computerSelection)
{
  
return computerSelection[Math.floor(Math.random()*computerSelection.length)];
     
}

let computerSelection = ["rock", "paper", "scissors"];
console.log(computerPlay(computerSelection));