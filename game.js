function getComputerChoice()
{
    let arr=['Rock', 'Paper', 'Scissors'];

    let rand = Math.floor(Math.random() * arr.length);
    let randChoice = arr[rand];
    return randChoice;
   
}
function playRound(computerChoice, playerChoice)
{
   
    let arr=['Rock', 'Paper', 'Scissors'];
    
    if(computerChoice==='Rock') return console.log("It's a tie!");
    else if(computerChoice==='Paper') return console.log("You lost!");
    else return console.log("You Won!!!");
    
}
const computerSelection = getComputerChoice();
const player = 'Rock';
playRound(computerSelection, player );
console.log("computer:" ,computerSelection);
console.log("you:",player);

