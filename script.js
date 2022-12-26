const optionsArray = ["rock", "paper", "scissors"]
let you = document.getElementById("player-1-item")
let computer = document.getElementById("player-2-item")
const rockBtn = document.getElementById("rock-btn")
const paperBtn = document.getElementById("paper-btn")
const scissorsBtn = document.getElementById("scissors-btn")
let messageEl = document.getElementById("message")

document.getElementById("reset-btn").addEventListener("click", reset)

function pickRandomElement() {
    return Math.floor(Math.random() * optionsArray.length)
}

function computersChoice() {
    return optionsArray[pickRandomElement]
}

console.log(computersChoice())

function reset() {
    you.textContent = ""
    computer.textContent = ""
    messageEl.textContent = ""
}

// you and computer have 3 options
// you and computer pick one from three options
// the winner is declared
// click to clear the game