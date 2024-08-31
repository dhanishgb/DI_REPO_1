function playTheGame() {
    // Ask the user if they would like to play the game
    let wantsToPlay = confirm("Would you like to play the game?");
    
    // If the user doesn't want to play, alert and exit
    if (!wantsToPlay) {
        alert("No problem, Goodbye");
        return; // Exit the function
    }

    // Ask the user to enter a number between 0 and 10
    let userNumber = prompt("Please enter a number between 0 and 10:");

    // Check if the input is a number
    if (isNaN(userNumber)) {
        alert("Sorry Not a number, Goodbye");
        return; // Exit the function
    }

    // Convert the input to a number (prompt returns a string)
    userNumber = Number(userNumber);

    // Check if the number is between 0 and 10
    if (userNumber < 0 || userNumber > 10) {
        alert("Sorry it’s not a good number, Goodbye");
        return; // Exit the function
    }

    // Generate a random number between 0 and 10
    let computerNumber = Math.floor(Math.random() * 11); // Math.random() generates a number between 0 (inclusive) and 1 (exclusive)

    // Output the result (for demonstration purposes)
    console.log(`Your number: ${userNumber}`);
    console.log(`Computer's number: ${computerNumber}`);
}


function compareNumbers(userNumber, computerNumber) {
    let attempts = 0;

    while (attempts < 3) {
        attempts++; // Increment the attempt counter

        if (userNumber === computerNumber) {
            alert("WINNER");
            return; // Exit the function
        } else if (userNumber > computerNumber) {
            alert("Your number is bigger than the computer’s, guess again");
        } else {
            alert("Your number is smaller than the computer’s, guess again");
        }

        // Ask the user for a new number
        userNumber = Number(prompt("Please enter a new number between 0 and 10:"));

        // Validate the new number
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Goodbye");
            return; // Exit the function
        }
        if (userNumber < 0 || userNumber > 10) {
            alert("Sorry it’s not a good number, Goodbye");
            return; // Exit the function
        }
    }

    // If the user didn't guess the number within 3 attempts
    alert("Out of chances, Goodbye");
}

// Example of how these functions could be used together
function playTheGame() {
    let wantsToPlay = confirm("Would you like to play the game?");

    if (!wantsToPlay) {
        alert("No problem, Goodbye");
        return;
    }

    let userNumber = Number(prompt("Please enter a number between 0 and 10:"));

    if (isNaN(userNumber)) {
        alert("Sorry Not a number, Goodbye");
        return;
    }

    if (userNumber < 0 || userNumber > 10) {
        alert("Sorry it’s not a good number, Goodbye");
        return;
    }

    let computerNumber = Math.floor(Math.random() * 11);

    // Call the compareNumbers function
    compareNumbers(userNumber, computerNumber);
}
