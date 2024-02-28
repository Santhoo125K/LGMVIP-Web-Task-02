function displayValue(val) {
    document.getElementById("display").value += val;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var userInput = document.getElementById('display').value;
    var result = eval(userInput);
    document.getElementById("display").value = result;
}

function deleteLastChar() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

