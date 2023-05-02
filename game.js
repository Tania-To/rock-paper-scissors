function getComputerChoice()
{
    let arr=['Rock', 'Paper', 'Scissors'];

    let rand = Math.floor(Math.random() * arr.length);
    let randChoice = arr[rand];
    return randChoice;
   
}
const buttons = document.querySelectorAll('.buttons');


const container = document.querySelector('#container');
const msg = document.querySelector('.msg');

const won = document.createElement('div');
const lost = document.createElement('div');
const tie = document.createElement('div');

const msgfirst = document.createElement('h1');
const msg1 = document.createElement('h1');
const msg2 = document.createElement('h1');
const restart = document.createElement('button');

let rockElement = document.getElementById('Rock');
let paperElement = document.getElementById('Paper');
let scissorElement = document.getElementById('Scissors');

let image1 = document.getElementById('image1');
let image2= document.getElementById('image2');
let image3=document.getElementById('image3');

let image4 = document.getElementById('image4');
let image5= document.getElementById('image5');
let image6=document.getElementById('image6');



restart.textContent = "Restart";
restart.style.display = 'none';
msgfirst.textContent = "Game Over!!!";
msgfirst.style.display = 'none';
msg1.textContent="You Won!!";
msg1.style.display = 'none';
msg2.textContent="You Lost";
msg2.style.display = 'none';


won.classList.add('won');
lost.classList.add('lost');
tie.classList.add('tie');


won.style.display = 'none'
lost.style.display='none'
tie.style.display = 'none';
const computerResult = document.createElement('div');
const playerResult = document.createElement('div');



let player1 = 0;
let player2 = 0;
let player1ScoreElement = document.getElementById("player1");
let player2ScoreElement = document.getElementById("player2");

const winnerScore = 5;

buttons.forEach((item)=>{
    item.addEventListener('click', playRound)
  
    });
buttons.forEach((item)=>{
    item.addEventListener('click', playSound)
});

function playRound(computerChoice, playerChoice)
{
    //let computerResult = 0, playerResult = 0;

   
    computerChoice = getComputerChoice();
    //first.textContent = computerChoice;
    playerChoice = this.id;
    console.log("you:" ,playerChoice);
    console.log("Computer: ", computerChoice);
    
    let count = 0;
    
    won.textContent = "You won." + playerChoice + " " +"beats "+" " +computerChoice;
    lost.textContent = "You lost."+" " +computerChoice+" "+ "beats"+" " +playerChoice;
    tie.textContent = "It's a tie. Computer chose "+" " +computerChoice+" " +"and you chose"+" " +playerChoice;
  
    if(playerChoice==='Rock'&&computerChoice==='Scissors'|| playerChoice==='Paper'&&computerChoice==='Rock'|| playerChoice==='Scissors'&&computerChoice==='Paper'){
        
    
        won.style.display="block";
        lost.style.display="none";
        tie.style.display="none";
        player1++;
        player1ScoreElement.textContent = player1;
        showPlayerImage(playerChoice);
        showComputerImage(computerChoice);
        if(player1===winnerScore)
        {
            msgfirst.style.display = 'block';
            msg1.style.display = 'block';
            msg2.style.display = 'none';
            rockElement.disabled = true;
            paperElement.disabled = true;
            scissorElement.disabled=true;
           
        } 

    } 
    else if(playerChoice==='Paper'&&computerChoice==='Scissors'|| playerChoice==='Rock'&&computerChoice==='Paper'|| playerChoice==='Scissors'&&computerChoice==='Rock')
    {
      
        won.style.display="none";
        lost.style.display="block";
        tie.style.display="none";
        player2++;
        player2ScoreElement.textContent = player2;
        showPlayerImage(playerChoice);
        showComputerImage(computerChoice);
        if(player2===winnerScore)
        {
            msgfirst.style.display = 'block';
            msg1.style.display = 'none';
            msg2.style.display = 'block';
            rockElement.disabled = true;
            paperElement.disabled = true;
            scissorElement.disabled=true;
            
        } 
        

       
    }
    else if(playerChoice==='Rock'&&computerChoice==='Rock'|| playerChoice==='Paper'&&computerChoice==='Paper'|| playerChoice==='Scissors'&&computerChoice==='Scissors')
    {
        showPlayerImage(playerChoice);
        showComputerImage(computerChoice);
        won.style.display="none";
        lost.style.display="none";
        tie.style.display="block";
    }
    

}
function restartGame(){
    msgfirst.style.display = 'none';
    msg1.style.display = 'none';
    msg2.style.display = 'none';
    won.style.display="none";
    lost.style.display="none";
    tie.style.display="none";
    image1.style.display='none';
    image2.style.display='none';
    image3.style.display='none';
    image4.style.display='none';
        image5.style.display='none';
        image6.style.display = 'none';
    player1 = 0;
    player2 = 0;
    player1ScoreElement.textContent = 0;
    player2ScoreElement.textContent = 0;
    rockElement.disabled = false;
    paperElement.disabled = false;
    scissorElement.disabled=false;
}
function playSound(){
    let audio = document.getElementById("myAudio");
    audio.currenTime=0;
    audio.play();
}
function showPlayerImage(play1, play2)
{
    if(play1==='Rock')
    {
        image1.style.display='block';
        image2.style.display='none';
        image3.style.display = 'none';
        image4.style.display='block';
        image5.style.display='none';
        image6.style.display = 'none';
    }
    else if(play1==='Paper')
    {
        
        image1.style.display='none';
        image2.style.display='block';
        image3.style.display = 'none';

        image4.style.display='none';
        image5.style.display='block';
        image6.style.display = 'none';
    }
    else if(play1==='Scissors')
    {
        image1.style.display='none';
        image2.style.display='none';
        image3.style.display = 'block';

        image4.style.display='none';
        image5.style.display='none';
        image6.style.display = 'block';
    }
    
}
function showComputerImage(comp)
{
    if(comp==='Rock')
    {
        
        image4.style.display='block';
        image5.style.display='none';
        image6.style.display = 'none';
    }
    else if(comp==='Paper')
    {

        image4.style.display='none';
        image5.style.display='block';
        image6.style.display = 'none';
    }
    else if(comp==='Scissors')
    {

        image4.style.display='none';
        image5.style.display='none';
        image6.style.display = 'block';
    }

}


container.appendChild(won);
container.appendChild(lost);
container.appendChild(tie);
container.appendChild(computerResult);
container.appendChild(playerResult);
msg.appendChild(msgfirst);
msg.appendChild(msg1);
msg.appendChild(msg2);
/*playRound(computerSelection, player );
console.log("computer:" ,computerSelection);
console.log("you:",player);*/



//const element = document.getElementById("btn");
//element.addEventListener("click", playRound);
