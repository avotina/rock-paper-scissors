const optionsArray = ["rock", "paper", "scissors"]
let player1Item = document.getElementById("player-1-item")
let player2Item = document.getElementById("player-2-item")
let messageEl = document.getElementById("message")

document.getElementById("play-btn").addEventListener("click", chooseRandom)
document.getElementById("reset-btn").addEventListener("click", reset)

function chooseRandom() {
    let randomItemForPlayer1 = optionsArray[Math.floor(Math.random() * optionsArray.length)]
    let randomItemForPlayer2 = optionsArray[Math.floor(Math.random() * optionsArray.length)]
    player1Item.textContent = randomItemForPlayer1
    player2Item.textContent = randomItemForPlayer2

    if (randomItemForPlayer1 === "paper" && randomItemForPlayer2 === "paper") {
        messageEl.textContent = "Draw!"
    }  else if (randomItemForPlayer1 === "scissors" && randomItemForPlayer2 === "scissors") {
        messageEl.textContent = "Draw!"
    } else if (randomItemForPlayer1 === "rock" && randomItemForPlayer2 === "rock") {
        messageEl.textContent = "Draw!"
    } else if (randomItemForPlayer1 === "rock" && randomItemForPlayer2 === "paper") {
        messageEl.textContent = "Player 2 has won!"
    } else if (randomItemForPlayer1 === "scissors" && randomItemForPlayer2 === "rock") {
        messageEl.textContent = "Player 2 has won!"
    } else if (randomItemForPlayer1 === "paper" && randomItemForPlayer2 === "rock") {
        messageEl.textContent = "Player 1 has won!"
    } else if (randomItemForPlayer1 === "paper" && randomItemForPlayer2 === "scissors") {
        messageEl.textContent = "Player 2 has won!"
    } else if (randomItemForPlayer1 === "rock" && randomItemForPlayer2 === "scissors") {
        messageEl.textContent = "Player 1 has won!"
    }
}

function reset() {
    player1Item.textContent = ""
    player2Item.textContent = ""
    messageEl.textContent = ""
}