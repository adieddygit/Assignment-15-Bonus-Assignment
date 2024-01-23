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

function squareRoot(value) {
    let display = document.getElementById("result");
    display.value += value;
    let sqrt = Math.sqrt(display)
    document.getElementById('result').value = (value);
}

function del() {
    document.getElementById("result").value = value.substring(0, -1);
}