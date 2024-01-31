let wordBox = document.getElementById("wordBox");
let input = document.getElementById("inputId");
let button = document.getElementById("btn");
let counterBox = document.getElementById("counterBox");
let spanLifePoints = document.getElementById("lifePoints");

let parolaDaIndovinare = ["c", "h", "a", "t", "g", "p", "t"];
let lettereIndovinate = [];
let lifePoints = 6;

function onClick() {
  checkLetters();
  checkCounter();
}

function checkLetters() {
  let valore = input.value.toLowerCase();
  if (parolaDaIndovinare.includes(valore)) {
    if (!lettereIndovinate.includes(valore)) {
      lettereIndovinate.push(valore);
      updateWordBox();
    }
  }
}

function updateWordBox() {
  wordBox.textContent = parolaDaIndovinare
    .map((lettera) => (lettereIndovinate.includes(lettera) ? lettera : "_"))
    .join(" ");
}

function checkCounter() {
  if (!parolaDaIndovinare.includes(input.value.toLowerCase())) {
    lifePoints--;
    spanLifePoints.textContent = lifePoints;
  }

  if (lifePoints === 0) {
    alert("Hai perso! La parola era: ChatGPT! ");
    resetGame();
  }

  if (lettereIndovinate.length === parolaDaIndovinare.length) {
    alert("Complimenti! Hai indovinato la parola!");
    resetGame();
  }
}

function resetGame() {
  lettereIndovinate = [];
  lifePoints = 6;
  spanLifePoints.textContent = lifePoints;
  input.value = "";
  updateWordBox();
}

button.addEventListener("click", onClick);
