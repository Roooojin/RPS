
var playerScore = 0;
var computerScore = 0;
function startGame() {
            var playerChoice = document.querySelector('input[name="choice"]:checked');
            if (!playerChoice) {
                alert("Please select an option!");
                return;
            }

            var computerChoice = Math.random();
            if (computerChoice < 0.33) {
                computerChoice = "rock";
            } else if (computerChoice < 0.67) {
                computerChoice = "paper";
            } else {
                computerChoice = "scissors";
            }

            var result = determineWinner(playerChoice.value, computerChoice);
            if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }
            displayResult(result, playerChoice.value, computerChoice);
             displayScores();
        }

        function displayScores() {
    document.getElementById("player-score").innerText = "Player Score: " + playerScore;
    document.getElementById("computer-score").innerText = "Computer Score: " + computerScore;
}

        function determineWinner(player, computer) {
            if (player === computer) {
                return "draw";
            } else if ((player === "rock" && computer === "scissors") ||
                       (player === "scissors" && computer === "paper") ||
                       (player === "paper" && computer === "rock")) {
                return "win";
            } else {
                return "lose";
            }
        }

        function displayResult(result, player, computer) {
            var resultDiv = document.getElementById("result");
            var outcome;
            if (result === "draw") {
                outcome = "It's a draw!";
            } else if (result === "win") {
                outcome = "You win!";
            } else {
                outcome = "You lose!";
            }
            resultDiv.innerHTML = "<p>" + outcome + "</p>";
            resultDiv.innerHTML += "<p>Player: " + player + " vs Computer: " + computer + "</p>";
        }