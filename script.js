const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let expression = "";

// Function to update display
function updateDisplay() {
    display.value = expression || "0";
}

// Button Click Events
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "AC") {
            expression = "";
        }

        else if (value === "=") {
            try {
                expression = eval(expression).toString();
            } catch {
                expression = "";
                display.value = "Error";
                return;
            }
        }

        else if (button.classList.contains("delete")) {
            expression = expression.slice(0, -1);
        }

        else {
            expression += value;
        }

        updateDisplay();

    });
});

// Keyboard Support
document.addEventListener("keydown", (e) => {

    const key = e.key;

    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "." ||
        key === "%"
    ) {
        expression += key;
        updateDisplay();
    }

    else if (key === "Enter") {
        e.preventDefault();

        try {
            expression = eval(expression).toString();
        } catch {
            expression = "";
            display.value = "Error";
        }

        updateDisplay();
    }

    else if (key === "Backspace") {
        expression = expression.slice(0, -1);
        updateDisplay();
    }

    else if (key === "Escape") {
        expression = "";
        updateDisplay();
    }

});