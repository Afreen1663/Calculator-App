let screen = document.getElementById('screen'); // Correctly selecting the input field
let buttons = document.querySelectorAll('button');
let screenValue = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

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

        screen.value = screenValue; // Update screen value
    });
});
