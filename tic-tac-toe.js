document.addEventListener("DOMContentLoaded", function () {

    // Select all nine divs inside the board
    const squares = document.querySelectorAll("#board div");

    // Add the square class to each div
    squares.forEach(function (square) {
        square.classList.add("square");
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const squares = document.querySelectorAll("#board div");

    // X plays first
    let currentPlayer = "X";

    // Select the status message
    const status = document.getElementById("status");

    // Keep track of whether the game has ended
    let gameOver = false;

    // Store all possible winning combinations
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    squares.forEach(function (square) {

        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 3: Mouse enters the square
        square.addEventListener("mouseenter", function () {
            square.classList.add("hover");
        });

        // Exercise 3: Mouse leaves the square
        square.addEventListener("mouseleave", function () {
            square.classList.remove("hover");
        });

        square.addEventListener("click", function () {

            // STEP A: Stop playing if somebody has already won
            if (gameOver) {
                return;
            }

            // STEP B: Display the current player's X or O
            square.textContent = currentPlayer;

            // STEP C: Apply the correct colour
            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);

            // STEP D: Check whether the current player has won
            checkWinner();

            // STEP E: Change players only if nobody has won
            if (!gameOver) {

                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }

            }

        });

    });
    function checkWinner() {

        for (let combination of winningCombinations) {

            let a = combination[0];
            let b = combination[1];
            let c = combination[2];

            if (
                squares[a].textContent !== "" &&
                squares[a].textContent === squares[b].textContent &&
                squares[b].textContent === squares[c].textContent
            ) {

                status.textContent =
                    "Congratulations! " +
                    currentPlayer +
                    " is the Winner!";

                status.classList.add("you-won");

                gameOver = true;

                return;
            }
        }
    }

});