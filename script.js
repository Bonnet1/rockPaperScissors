/********** Variables **********/
const rock        = document.querySelector('#rock');
const paper       = document.querySelector('#paper');
const scissors    = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const compScore   = document.querySelector('#comp-score');
const score       = [0, 0];
let round         = 1;
const roundCount  = document.querySelector('#round');
const weapons     = ['rock', 'paper', 'scissors'];
const message     = document.querySelector('.message');
const endGameBtn  = document.querySelector('button');
const computerSelection  = () => {
    let randVar = Math.random();
    if (randVar < 0.33) {
        computerPlay = "Rock";
    } else if (randVar <0.67) {
        computerPlay = "Paper";
    } else {
        computerPlay = "Scissors";
    }
    return computerPlay;
}

endGameBtn.style.display = "none";

/********** Event Listeners **********/

rock.addEventListener('click', () => {playRound('Rock', computerSelection());});
paper.addEventListener('click', () => {playRound('Paper', computerSelection());});
scissors.addEventListener('click', () => {playRound('Scissors', computerSelection());});
endGameBtn.addEventListener('click', clearAll);

/********** Functions **********/

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock") {
            message.textContent = "You Draw";
            playerScore.textContent = `${score[1]}`;
            compScore.textContent = `${score[0]}`;
        } else if (computerSelection == "Paper") {
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else {
            result = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        }
        break;
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            result = "You Draw";
        } else if (computerSelection == "Scissors") {
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else {
            result = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        }
        break;
    } else (playerSelection == "Scissors") {
        if (computerSelection == "Scissors") {
            result = "You Draw";
        } else if (computerSelection == "Rock") {
            result = "You Lose! " + computerSelection + " beats " + playerSelection;
            computerScore++;
        } else {
            result = "You win! " + playerSelection + " beats " + computerSelection;
            playerScore++;
        }
        break;
    }
    round++;
    roundCount.textContent = `${round}`;
    if (round == 5) {
        endGameBtn();
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
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
  }
  
  function clearAll() {
    score[1] = 0;
    score[0] = 0;
    round = 1;
    message.textContent = '5 Rounds -- Choose Your Weapon!';
    playerScore.textContent = `${score[1]}`;
    compScore.textContent = `${score[0]}`;
    roundCount.textContent = `${round}`;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    endGameBtn.style.display = 'none';
  }
    
    // let playerPlay = prompt("Please choose Rock, Paper, or Scissors", "")
    // let computerSelection = capitalize(computerPlay())
    // let playerSelection = capitalize(playerPlay)

    // //console.log(computerPlay)
    // const rounds = document.querySelector('#rounds');

    // const content = document.createElement('div');
    // content.classList.add('content');
    // content.textContent = 'Round:' + round;

    // rounds.appendChild(content);

    // console.log("Round: " + round)
    // console.log("Computer picked " + computerSelection)
    // console.log("Player picked " + playerSelection)

    // console.log(playRound(playerSelection, computerSelection))
    // console.log("Computer Score: " + computerScore)
    // console.log("Player Score: " + playerScore)
    // ++round;