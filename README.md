# Connect-Four-Game-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install LiveServer extension from Visual Studio Code [OPTIONAL]
4. Click in "Go Live" from LiveServer extension

---

1. Clone the repository
2. Join to the correct path of the clone
3. Open index.html in your favorite navigator

## Description

I made a web page where you can play connect four against an AI. Once the user plays, the AI can play and so on until one of the two can line up 4 horizontally, vertically or diagonally. The first one to collect 4 either way wins.

## Technologies used

1. Javascript
2. CSS3
3. HTML5

## Galery

![Connect-Four-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/connectfour-0.jpg)

![Connect-Four-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/connectfour-1.jpg)

![Connect-Four-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/connectfour-2.jpg)

![Connect-Four-page](https://raw.githubusercontent.com/DiegoLibonati/DiegoLibonatiWeb/main/data/projects/Javascript/Imagenes/connectfour-3.jpg)

## Portfolio Link

`https://diegolibonati.github.io/DiegoLibonatiWeb/#/projects?q=Connect%20four%20page`

## Video

https://user-images.githubusercontent.com/99032604/199373261-e7714720-dd5d-4ef5-aa79-036efab24671.mp4

## Documentation

In `columns` we are going to obtain all the columns, in `buttons` all the buttons of the columns and in `displayGame` we are going to obtain the game board. Then we will have 7 columns that will be 7 arrays where we will be adding to these arrays when the user or the computer plays its pieces to these columns. Then we will have `checkHorizontalInterval and checkVerticalInterval` will be two intervals that let us know every 100ms if someone won horizontally or vertically.`userPlay`is a variable that will let us know when the user can play or not,`iaWantPlay`is a variable that will let us know when an ia can play,`cantPlayIn`is an array that lets us know when you can play in that column,`randomValue`will be a random value where you can play and`iaPlayInterval` is a time interval in which the AI can play:

```
const columns = document.querySelectorAll(".column");
const buttons = document.querySelectorAll(".div_center button");
const displayGame = document.querySelector(".board");

const columnOne = [];
const columnTwo = [];
const columnTr = [];
const columnFour = [];
const columnFive = [];
const columnSix = [];
const columnSeven = [];

let checkHorizontalInterval;
let checkVerticalInterval;

let userPlay = false;

// ia
let iaWantPlay = false;
let canPlayIn = [
  "buttonC1",
  "buttonC2",
  "buttonC3",
  "buttonC4",
  "buttonC5",
  "buttonC6",
  "buttonC7",
];
let randomValue;
let iaPlayInterval;
```

Each column button will be assigned an event when clicked, if clicked the user will have played on a column:

```
buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    btnSelect = e.currentTarget.dataset.id;

    userPlay = true;

    if (userPlay == true && iaWantPlay == false) {
      document.querySelector(".whoPlay").innerHTML = "IA";
      document.querySelector(".whoPlay").style.color = "rgb(255, 0, 0)";
      document.querySelector(".whoPlayTwo").innerHTML = "User";
      document.querySelector(".whoPlayTwo").style.color = "rgb(0, 204, 255)";
      document.querySelector(
        ".whatPlay"
      ).innerHTML = ` en la columna ${btnSelect.replace(/\D/g, "")}`;
      console.log("jugaste");
      columnFind(btnSelect);
      userPlay = false;
      iaWantPlay = true;
    }
  });
});
```

The `columnFind()` function references the column that was clicked, it will first check if it is possible to play and if it is it will add who played to that column.

The `iaPlay()` function will be executed when the computer plays:

```
function iaPlay() {
  if (
    (userPlay == false && iaWantPlay == true) ||
    (userPlay == true && iaWantPlay == true)
  ) {
    document.querySelector(".whoPlay").innerHTML = "User";
    document.querySelector(".whoPlayTwo").innerHTML = "IA";
    document.querySelector(".whoPlayTwo").style.color = "rgb(255, 0, 0)";
    document.querySelector(".whoPlay").style.color = "rgb(0, 204, 255)";
    randomValue = Math.floor(Math.random() * canPlayIn.length);
    document.querySelector(".whatPlay").innerHTML = ` en la columna ${canPlayIn[
      randomValue
    ].replace(/\D/g, "")}`;
    columnFind(canPlayIn[randomValue]);
    userPlay = false;
    iaWantPlay = false;
  }
}
```

This function `checkHorizontalWin()` allows to know if the player or the computer won in horizontal.

This function `checkVerticalWin()` allows to know if the player or the computer won in vertical.

When the game is over and there is a winner, this function will be executed which will end the intervals and among other things will allow to play again:

```
function finalGame(ganador) {
  clearInterval(checkHorizontalInterval);
  clearInterval(checkVerticalInterval);
  clearInterval(iaPlayInterval);

  displayGame.textContent = "";
  displayGame.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  displayGame.style.borderRadius = "20px";
  displayGame.style.justifyContent = "center";
  displayGame.style.flexFlow = "column wrap";
  displayGame.style.alignItems = "center";

  const div = document.createElement("div");
  const button = document.createElement("button");

  div.setAttribute("class", "winners");

  if (ganador == "User") {
    div.innerHTML = `Felicidades ${ganador} ganaste, gracias por jugar`;
  } else {
    div.innerHTML = `Lamentablemente gano la ${ganador}, gracias por jugar`;
  }

  button.setAttribute("type", "button");
  button.setAttribute("class", "playAgain");
  button.innerHTML = "PLAY AGAIN";

  displayGame.append(div, button);

  button.addEventListener("click", () => {
    window.location.reload();
  });
}
```
