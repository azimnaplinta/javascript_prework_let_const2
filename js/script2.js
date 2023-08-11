buttonRock = document.getElementById("button-rock");
const = buttonRock;
buttonPaper = document.getElementById("button-paper");
const = buttonPaper;
buttonScissors = document.getElementById("button-scissors");
const = buttonScissors;

function buttonClicked(buttonName) {
  let buttonName
  clearMessages();
  console.log(buttonName + " został kliknięty");


  function getMoveName(moveId) {
    let moveId
    console.log("wywołano funkcję getMoveName z argumentem: " + moveId);
    if (moveId == 1) {
      return "kamień";
    } else if (moveId == 2) {
      return "papier";
    } else if (moveId == 3) {
      return "nożyce";
    } else {printMessage ("Nie znam ruchu o id " + moveId + '. Zakładam, że chodziło o "kamień".');
      return "kamień";
    }
  }

  function displayResult(playerMove, computerMove) {
    let playerMove = buttonName;
    console.log("ruch gracza to: " + playerMove);
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log("wylosowana liczba to: " + randomNumber);
    let computerMove = getMoveName(randomNumber);
    console.log("ruch komputera to: " + computerMove);
    console.log(
      "wywołano funkcję displayResults z argumentami: " +
        playerMove +
        ", " +
        computerMove
    );

    if (argPlayerMove == "papier" && argComputerMove == "kamień") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
      printMessage("Wygrywasz!");
    } else if (argPlayerMove == argComputerMove) {
      printMessage("Remis!");
    } else {
      printMessage("Przegrywasz :(");
    }
    printMessage("Zagrałem " + argComputerMove + ", a Ty " + argPlayerMove);
  }
}

buttonRock.addEventListener("click", function () {
  buttonClicked("kamień");
});
buttonPaper.addEventListener("click", function () {
  buttonClicked("papier");
});
buttonScissors.addEventListener("click", function () {
  buttonClicked("nożyce");
});
