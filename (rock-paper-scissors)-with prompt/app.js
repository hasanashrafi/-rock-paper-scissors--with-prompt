

let playerScore = 0;
let computerScore = 0;
const choices = ["rock", "paper", "scissors"]

const checkWinner = (player, computer) => {
    if (player === computer) {
        return "draw"
    } else if (player === "rock") {
        return computer === "scissors" ? "player" : "computer";
    } else if (player === "paper") {
        return computer === "rock" ? "player" : "computer"
    } else {
        return computer === "paper" ? "player" : "computer"
    }
}

const showResult = (result) => {
    const showUserScore = document.querySelector('#yourScore')
    const showComputerScore = document.querySelector('#pcScore')

    if (result === "player") {
        console.log("You Win!")
        playerScore++
        showUserScore.innerHTML = `${playerScore}`
    } else if (result === "computer") {
        console.log("You Lose!")
        computerScore++
        showComputerScore.innerHTML = ` ${computerScore}`
    } else {
        console.log("it's Tie");
    }
    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    console.log("=======================");

}

const play = () => {
    const playerChoice = prompt("Choose: Rock-Paper-scissors");

    if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
        console.log(`You Choose ${playerChoice}`);
    } else {
        console.log("You Cheated!");
        return
    }

    const randomNumber = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[randomNumber]
    console.log(`Computer Chooses: ${computerChoice}`);

    const gameResult = checkWinner(playerChoice, computerChoice)
    showResult(gameResult)

    const player = playerScore;
    const computer = computerScore;
    switch (5) {
        case player:
            alert("You Win")
            return;


        case computer:
            alert("Computer Win")
            return;
    }

    play()


};

play()