let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

const user = humanGuessInput.value;
const computer = Math.floor(Math.random() * 10);
const target = generateTarget();
function compareGuesses(user, computer, target) {
    userDiff = Math.abs(user - target);
    computerDiff = Math.abs(computer - target);
    if (userDiff > computerDiff) {
        return false;
    } else {
        return true;
    }
}
function updateScore("Winner") {
    if(compareGuesses = false) {
        computerScore += 1;
        return "Computer Wins!"
    }
    else {
        humanScore += 1;
        return "User Wins!"
    }
}
function advanceRound() {
    currentRoundNumber += 1;
    return "Next Round!"
}

updateScore("human");
console.log(humanScore);

