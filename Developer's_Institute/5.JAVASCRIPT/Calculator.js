let displayValue = ""; // Initialize display value
let hasOperator = false; // Track if an operator was entered

// Function to handle number button clicks
function number(num) {
    displayValue += num;
    document.getElementById("display").value = displayValue;
}

// Function to handle operator button clicks
function operator(operator) {
    if (!hasOperator) { // Prevent multiple operators in sequence
        displayValue += operator;
        document.getElementById("display").value = displayValue;
        hasOperator = true;
    }
}

// Function to calculate the result
function equal() {
    try {
        displayValue = eval(displayValue); // Calculate the expression
        document.getElementById("display").value = displayValue;
        hasOperator = false; // Allow new operators
    } catch (e) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

// Function to clear the display
function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
    hasOperator = false;
}

// Function to reset the calculator
function resetCalculator() {
    displayValue = "";
    document.getElementById("display").value = "";
    hasOperator = false;
}
