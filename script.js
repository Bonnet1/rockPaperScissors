/********** Variables **********/
const rock        = document.querySelector('#rock');
const paper       = document.querySelector('#paper');
const scissors    = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const compScore   = document.querySelector('#comp-score');
const score       = [0, 0];
let round         = 1;
const roundCount  = document.querySelector('#round');
const buttons     = ['Rock', 'Paper', 'Scissors'];
const message     = document.querySelector('.message');
const endGameBtn  = document.querySelector('button');
const computerSelection  = () => {
    let randVar = Math.random();
    if (randVar < 0.33) {
         computerPlay = "Rock";
    } else if (randVar <0.67) {
         computerPlay = "Paper";
    } else computerPlay = "Scissors";
    return computerPlay;
}

endGameBtn.style.display = "none";

/********** Event Listeners **********/

Rock.addEventListener('click', () => {playRound('Rock', computerSelection());});
Paper.addEventListener('click', () => {playRound('Paper', computerSelection());});
Scissors.addEventListener('click', () => {playRound('Scissors', computerSelection());});
endGameBtn.addEventListener('click', clearAll);

/********** Functions **********/

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            message.textContent = "You Draw";
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        } else if (computerSelection == "Paper") {
            message.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            score[0]++;
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        } else {
            message.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            score[1]++;
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            message.textContent = "You Draw";
        } else if (computerSelection == "Scissors") {
            message.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            score[0]++;
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        } else {
            message.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            score[1]++;
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        }
    } else {
        if (computerSelection == "Scissors") {
            message.textContent = "You Draw";
        } else if (computerSelection == "Rock") {
            message.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
            score[0]++;
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        } else {
            message.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            score[1]++;
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        }
    }
    round++;
    roundCount.textContent = `${round}`;
    if (round == 5) {
        endGame();
    }
}

function endGame() {
    if (score[1] > score[0]) {
      message.textContent = 'Game Over! You win!';
    } else if (score[0] > score[1]) {
      message.textContent = 'Game Over! You lose!';
    } else if (score[0] === score[1]) {
      message.textContent = 'Game Over!  It\'s a tie!';
    }
    endGameBtn.style.display = 'block';
    Rock.disabled = true;
    Paper.disabled = true;
    Scissors.disabled = true;
  }
  
  function clearAll() {
    score[1] = 0;
    score[0] = 0;
    round = 1;
    message.textContent = '5 Rounds -- Choose Your Weapon!';
    playerScore.textContent = `${score[1]}`;
    compScore.textContent = `${score[0]}`;
    roundCount.textContent = `${round}`;
    Rock.disabled = false;
    Paper.disabled = false;
    Scissors.disabled = false;
    endGameBtn.style.display = 'none';
  }