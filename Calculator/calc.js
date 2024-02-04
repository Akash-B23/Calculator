const Display = document.getElementById("display");
function appendToDisplay(input) {
    Display.value += input;
}

function clear() {
    Display.value = "";
}

function calculate() {
    try {
        Display.value = eval(Display.value);
    }
    catch (e) {
        Display.value = "Error";
    }
}