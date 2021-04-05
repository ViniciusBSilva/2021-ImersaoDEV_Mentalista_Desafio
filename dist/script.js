const minNum = 5;
const maxNum = 10;
let chances = 3;
var secretNumber = getRandom(minNum, maxNum);

let subtitle = document.getElementsByClassName("page-subtitle");
subtitle[0].innerHTML = "Digite um número de " + minNum + " a " + maxNum;

let guess;
while (chances > 0) {
  guess = parseInt(prompt("Digite um número de " + minNum + " a " + maxNum));

  if (guess == secretNumber) {
    setResult("Acertou!");
    break;
  } else if (guess > secretNumber && chances > 1) {
    alert("O número secreto é menor");
  } else if (guess < secretNumber && chances > 1) {
    alert("O número secreto é maior");
  }

  chances = chances - 1;
}

if (guess != secretNumber) {
  setResult(
    "Suas tentativas acabaram. O número secreto era " + secretNumber + "!"
  );
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setResult(text) {
  let result = document.getElementById("result");
  result.innerHTML = text;
}