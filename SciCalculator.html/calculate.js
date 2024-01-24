// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns the result
function calculate() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function squareRoot() {
// This fuction gets the value from the result input field
    let inputValue = document.getElementById("result").value;

// This function calculates the square root of the input value
    let squareRootValue = Math.sqrt(inputValue);

// This function displays the result in the result input field
    document.getElementById("result").value = squareRootValue;
}

function del() {
    let currentValue = document.getElementById("result").value;
    
// To check if there is anything to delete
    if (currentValue.length > 0) {
// To remove the last character
        let newValue = currentValue.substring(0, currentValue.length - 1);
        
// To update the input field with the new value
        document.getElementById("result").value = newValue;
    }
}
