const gameArea = document.getElementById('game-area');
const gameStatus = document.getElementById('game-status');
const startButton = document.getElementById('start-game');

let yourCards = [];
let computerCards = [];
const numbers = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];

startButton.addEventListener('click', startGame);

function startGame() {
    yourCards = getRandomCards(2);
    computerCards = [getRandomCard()];
    updateGameArea();
}

function getRandomCard() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getRandomCards(count) {
    return Array.from({length: count}, getRandomCard);
}

function updateGameArea() {
    gameArea.innerHTML = `
        <p>Your cards: ${yourCards.join(', ')}, Current score: ${sum(yourCards)}</p>
        <p>Computer's first card: ${computerCards[0]}</p>
        <button id="hit">Hit</button>
        <button id="stand">Stand</button>
    `;
    document.getElementById('hit').addEventListener('click', hit);
    document.getElementById('stand').addEventListener('click', stand);
}

function hit() {
    yourCards.push(getRandomCard());
    if (sum(yourCards) > 21) {
        endGame();
    } else {
        updateGameArea();
    }
}

function stand() {
    while (sum(computerCards) < 17) {
        computerCards.push(getRandomCard());
    }
    endGame();
}

function endGame() {
    const yourScore = sum(yourCards);
    const computerScore = sum(computerCards);

    gameArea.innerHTML = `
        <p>Your final hand: ${yourCards.join(', ')}, Final score: ${yourScore}</p>
        <p>Computer's final hand: ${computerCards.join(', ')}, Final score: ${computerScore}</p>
        <button id="start-game">Play Again</button>
    `;

    if (yourScore > 21) {
        gameStatus.textContent = "You went over 21. You lose!";
    } else if (computerScore > 21) {
        gameStatus.textContent = "Computer went over 21. You win!";
    } else if (yourScore > computerScore) {
        gameStatus.textContent = "You win!";
    } else if (yourScore < computerScore) {
        gameStatus.textContent = "You lose!";
    } else {
        gameStatus.textContent = "It's a draw!";
    }

    document.getElementById('start-game').addEventListener('click', startGame);
}

function sum(cards) {
    return cards.reduce((a, b) => a + b, 0);
}