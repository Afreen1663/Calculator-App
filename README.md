# Calculator App

A simple web-based calculator application built using HTML, CSS, and JavaScript. This calculator allows users to perform basic arithmetic operations.

## Features
- Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division
- Clear (C) button to reset calculations
- Percentage (%) calculation
- Interactive UI with button click events

## Technologies Used
- HTML5 for structuring the application
- CSS3 for styling the interface
- JavaScript for handling user interactions and calculations

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/calculator-app.git
   ```
2. Navigate to the project directory:
   ```sh
   cd calculator-app
   ```
3. Open `index1.html` in a browser to use the calculator.

## Usage
1. Click on the buttons to enter numbers and perform operations.
2. Use `C` to clear the current input.
3. Click `=` to evaluate the expression.
4. `%` can be used to calculate percentages.

## Sample Code
```javascript
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'X') {
            buttonText = '*';
            screenValue += buttonText;
        }
        else if (buttonText === 'C') {
            screenValue = "";
        }
        else if (buttonText === '=') {
            try {
                screenValue = eval(screenValue);
            } catch (error) {
                screenValue = "Error";
            }
        }
        else if (buttonText === '%') {
            screenValue = (parseFloat(screenValue) / 100).toString();
        }
        else {
            screenValue += buttonText;
        }

        screen.value = screenValue;
    });
});
```

## Future Improvements
- Add support for scientific functions (sin, cos, log, etc.)
- Implement keyboard input support
- Improve UI with animations and themes

Let me know if you need any modifications! 🚀
