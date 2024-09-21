# Blackjack Game

This repository contains implementations of a simple Blackjack game in JavaScript (with HTML) and Python. The game allows players to play Blackjack against a computer dealer.

## Features

- JavaScript version:
  - Interactive web-based game
  - "Hit" and "Stand" options
  - Displays player's and dealer's cards and scores
  - Automatic dealer play (hits until 17 or higher)
  - Game result display

- Python version:
  - Command-line based game
  - Single round of play
  - Displays player's and dealer's cards and scores
  - Simple decision-making (one chance to hit or stand)

## How to Play

### JavaScript Version

1. Open the `index.html` file in a web browser.
2. Click the "Start Game" button to begin.
3. Your initial cards and the dealer's first card will be displayed.
4. Choose to "Hit" (take another card) or "Stand" (keep your current hand).
5. The game will end when you stand, go over 21, or reach 21.
6. The dealer will then play their hand, and the winner will be determined.

### Python Version

1. Run the `index.py` file using a Python interpreter.
2. When prompted, press 'y' to start the game or 'n' to exit.
3. Your initial cards and the dealer's first card will be displayed.
4. Choose to take another card ('y') or pass ('n').
5. The final hands will be revealed, and the winner will be determined.

## Files

- `index.html`: HTML structure for the web-based game
- `index.js`: JavaScript code for game logic and interactivity
- `index.py`: Python implementation of the game

## Future Improvements

- Add betting functionality
- Implement a multi-round game in the Python version
- Improve the user interface for the web version
- Add more advanced Blackjack rules (split, double down, etc.)

Feel free to contribute to this project by submitting pull requests or reporting issues!
