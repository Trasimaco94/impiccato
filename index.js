let wordBox = document.getElementById('wordBox');
let input = document.getElementById('input');
let button = document.getElementById('btn');
let counterBox = document.getElementById('counterBox');
let spanLifePoints = document.getElementById('lifePoints');

let parolaDaIndovinare = ['c', 'h', 'a', 't', 'g', 'p', 't']



function onClick() {
    checkLetters();
    checkCounter();
}

function checkLetters() {
    let valore = input.value;
    parolaDaIndovinare.forEach(() => {
        if (parolaDaIndovinare.includes(valore)) {
            parolaDaIndovinare.style.display = 'inline-block';

        }
    });




};

function checkCounter() {

}

button.addEventListener('click', onClick)