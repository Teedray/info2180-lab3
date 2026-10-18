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

    squares.forEach(function (square) {

        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Handle clicks
        square.addEventListener("click", function () {

            // Display the current player's symbol
            square.textContent = currentPlayer;

            // Apply the matching CSS class
            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);

            // Change to the next player
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });

    });

});