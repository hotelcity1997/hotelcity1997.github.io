let playerVictories = 0;
let computerVictories = 0;

const results = document.querySelector('.results')
const playerVictoriesP = document.querySelector('.player-victories')
const computerVictoriesP = document.querySelector('.computer-victories')

let playerSelection = document.querySelectorAll('button');
console.log(playerSelection);
  
playerSelection.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    console.log(playerSelection);
    playRound();
   })
 });

function playRound() {

  const computerChoices = ["rock", "paper", "scissors"];
  const computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];


  if (playerSelection == computerSelection) {
    computerVictoriesP.classList.add('hide');
    playerVictoriesP.classList.add('hide');
    results.textContent = "It's a tie. Boring.";
    setTimeout( () => {
      playerVictoriesP.textContent = playerVictories;
      computerVictoriesP.textContent = computerVictories;
      playerVictoriesP.classList.remove('hide')
      computerVictoriesP.classList.remove('hide')
    }, 300);
    
  } else if
    (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" &&
      computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
        
        playerVictoriesP.classList.add('hide');
        results.textContent = `The computer chose ${computerSelection}. Hot damn, you win!`;
        playerVictories += 1;
    setTimeout( () => {
      playerVictoriesP.classList.remove('hide')
      playerVictoriesP.textContent = playerVictories;
      computerVictoriesP.textContent = computerVictories;
    }, 300);
    
  } else {
    
    computerVictoriesP.classList.add('hide');
    
    results.textContent = `The computer chose ${computerSelection}. You lose. I'm so very, very sorry.`;
    computerVictories += 1;
    setTimeout( () => {
      computerVictoriesP.classList.remove('hide')
      computerVictoriesP.textContent = computerVictories;
      playerVictoriesP.textContent = playerVictories;
    }, 300);
    
  }
  if (computerVictories == 5) {
    results.textContent = "YOU LOSE. GOOD DAY SIR."
    setTimeout( () => {
      playerVictories = 0;
      computerVictories = 0;
    }, 300);
  }
  if (playerVictories == 5) {
    results.textContent = "You won the best of 5 rounds!"
    setTimeout( () => {
      playerVictories = 0;
      computerVictories = 0;
    }, 300);
  }
}

