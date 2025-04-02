let screen = document.getElementById('screen');
let currentInput = '';
function append(value) {
            currentInput += value;
            screen.textContent = currentInput;
        }

        function clearScreen() {
            currentInput = '';
            screen.textContent = '0';
        }

        function calculate() {
            try {
                currentInput = eval(currentInput).toString();
                screen.textContent = currentInput;
            } catch (error) {
                screen.textContent = 'Error';
            }
        }

        function backspace(){
            currentInput= currentInput.slice(0, -1);
            screen.textContent = currentInput || '0';
        }