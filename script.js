const display = document.getElementById('display');
let memory = 0;

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(character) {
    display.innerText += character;
}

function calculate() {
    try {
        const result = eval(display.innerText.replace('%', '/100').replace('sqrt(', 'Math.sqrt('));
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function square() {
    try {
        const result = Math.pow(eval(display.innerText), 2);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function reciprocal() {
    try {
        const result = 1 / eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    display.innerText = memory;
}

function memoryAdd() {
    try {
        memory += eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function memorySubtract() {
    try {
        memory -= eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}
