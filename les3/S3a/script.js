'use strict';

window.onload = function() {
    let randomNumber = Math.floor(Math.random() * 21);
    let inputNumber = document.getElementById('userNumber').value;
    console.log(randomNumber);

    document.getElementById('form').addEventListener('submit', e => {
        e.preventDefault();
        compareNumber(inputNumber);

    })

    function compareNumber() {


    let inputNumber = document.getElementById('userNumber').value;
    console.log(randomNumber);

        console.log(inputNumber);
        
        if(inputNumber > randomNumber) {
            console.log('guess lower');
        } else if (inputNumber <= randomNumber) {
            console.log('guess up');
        } else if (inputNumber == randomNumber) {
            console.log('You have won');
        }

    }

}