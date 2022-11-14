
function submit() {
    alert ('This is not your number. Please Restart!', output.textContent);
    output.textContent = 000000000; 
}

function random() {
    outputInt = randomNumber (0, 9999999999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}


const output = document.querySelector('.output');
let outputInt = parseInt (output.textContent);


const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

