const columns = document.querySelectorAll(".column");
const buttons = document.querySelectorAll(".div_center button");
const displayGame = document.querySelector(".board");


// columns Config
const columnOne = [];
const columnTwo = [];
const columnTr = [];
const columnFour = [];
const columnFive = [];
const columnSix = [];
const columnSeven = [];

let checkHorizontalInterval;
let checkVerticalInterval;

// user
let userPlay = false;


// ia
let iaWantPlay = false;
let canPlayIn = ["buttonC1","buttonC2", "buttonC3", "buttonC4", "buttonC5", "buttonC6", "buttonC7"];
let randomValue;
let iaPlayInterval;

buttons.forEach(function(button){

    button.addEventListener("click", (e)=>{
        e.preventDefault();

        btnSelect = e.currentTarget.dataset.id

        userPlay = true;

        if (userPlay == true && iaWantPlay == false){
            document.querySelector(".whoPlay").innerHTML = "IA";
            document.querySelector(".whoPlay").style.color = "rgb(255, 0, 0)";
            document.querySelector(".whoPlayTwo").innerHTML = "User";
            document.querySelector(".whoPlayTwo").style.color = "rgb(0, 204, 255)";
            document.querySelector(".whatPlay").innerHTML = ` en la columna ${btnSelect.replace(/\D/g, '')}`
            console.log("jugaste")
            columnFind(btnSelect);
            userPlay = false;
            iaWantPlay = true;
        }

    });
});

function columnFind(btnSelect){

        switch(btnSelect){
            case "buttonC1":

            if (columnOne.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC1"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }

            } else {
            if (!columns[0].children[5].classList.contains("userColor") && columnOne.length == 0 || !columns[0].children[5].classList.contains("iaColor") && columnOne.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[0].children[5].classList.add("userColor");
            columnOne.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[0].children[5].classList.add("iaColor");
            columnOne.push(1);
            }

            } else if (!columns[0].children[4].classList.contains("userColor") && columnOne.length == 1 || !columns[0].children[4].classList.contains("iaColor") && columnOne.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[0].children[4].classList.add("userColor");
            columnOne.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[0].children[4].classList.add("iaColor");
            columnOne.push(1);
            }

            } else if (!columns[0].children[3].classList.contains("userColor") && columnOne.length == 2 || !columns[0].children[3].classList.contains("iaColor") && columnOne.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[0].children[3].classList.add("userColor");
            columnOne.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[0].children[3].classList.add("iaColor");
            columnOne.push(1);
            }
            }else if (!columns[0].children[2].classList.contains("userColor") && columnOne.length == 3 || !columns[0].children[2].classList.contains("iaColor") && columnOne.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[0].children[2].classList.add("userColor");
            columnOne.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[0].children[2].classList.add("iaColor");
            columnOne.push(1);
            }
            }else if (!columns[0].children[1].classList.contains("userColor") && columnOne.length == 4 || !columns[0].children[1].classList.contains("iaColor") && columnOne.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[0].children[1].classList.add("userColor");
            columnOne.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[0].children[1].classList.add("iaColor");
            columnOne.push(1);
            }
            }else if (!columns[0].children[0].classList.contains("userColor") && columnOne.length == 5 || !columns[0].children[0].classList.contains("iaColor") && columnOne.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[0].children[0].classList.add("userColor");
            columnOne.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[0].children[0].classList.add("iaColor");
            columnOne.push(1);
            }
            }
            }


            break;
            case "buttonC2":

            if (columnTwo.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC2"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }
            } else{
            if (!columns[1].children[5].classList.contains("userColor") && columnTwo.length == 0 || !columns[1].children[5].classList.contains("iaColor") && columnTwo.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[1].children[5].classList.add("userColor");
            columnTwo.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[1].children[5].classList.add("iaColor");
            columnTwo.push(1);
            }

            } else if (!columns[1].children[4].classList.contains("userColor") && columnTwo.length == 1 || !columns[1].children[4].classList.contains("iaColor") && columnTwo.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[1].children[4].classList.add("userColor");
            columnTwo.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[1].children[4].classList.add("iaColor");
            columnTwo.push(1);
            }

            } else if (!columns[1].children[3].classList.contains("userColor") && columnTwo.length == 2 || !columns[1].children[3].classList.contains("iaColor") && columnTwo.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[1].children[3].classList.add("userColor");
            columnTwo.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[1].children[3].classList.add("iaColor");
            columnTwo.push(1);
            }
            }else if (!columns[1].children[2].classList.contains("userColor") && columnTwo.length == 3 || !columns[1].children[2].classList.contains("iaColor") && columnTwo.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[1].children[2].classList.add("userColor");
            columnTwo.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[1].children[2].classList.add("iaColor");
            columnTwo.push(1);
            }
            }else if (!columns[1].children[1].classList.contains("userColor") && columnTwo.length == 4 || !columns[1].children[1].classList.contains("iaColor") && columnTwo.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[1].children[1].classList.add("userColor");
            columnTwo.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[1].children[1].classList.add("iaColor");
            columnTwo.push(1);
            }
            }else if (!columns[1].children[0].classList.contains("userColor") && columnTwo.length == 5 || !columns[1].children[0].classList.contains("iaColor") && columnTwo.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[1].children[0].classList.add("userColor");
            columnTwo.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[1].children[0].classList.add("iaColor");
            columnTwo.push(1);
            }
            }
            }
            break;
            case "buttonC3":

            if (columnTr.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC3"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }

            } else {
            if (!columns[2].children[5].classList.contains("userColor") && columnTr.length == 0 || !columns[2].children[5].classList.contains("iaColor") && columnTr.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[2].children[5].classList.add("userColor");
            columnTr.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[2].children[5].classList.add("iaColor");
            columnTr.push(1);
            }

            } else if (!columns[2].children[4].classList.contains("userColor") && columnTr.length == 1 || !columns[2].children[4].classList.contains("iaColor") && columnTr.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[2].children[4].classList.add("userColor");
            columnTr.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[2].children[4].classList.add("iaColor");
            columnTr.push(1);
            }

            } else if (!columns[2].children[3].classList.contains("userColor") && columnTr.length == 2 || !columns[2].children[3].classList.contains("iaColor") && columnTr.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[2].children[3].classList.add("userColor");
            columnTr.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[2].children[3].classList.add("iaColor");
            columnTr.push(1);
            }
            }else if (!columns[2].children[2].classList.contains("userColor") && columnTr.length == 3 || !columns[2].children[2].classList.contains("iaColor") && columnTr.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[2].children[2].classList.add("userColor");
            columnTr.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[2].children[2].classList.add("iaColor");
            columnTr.push(1);
            }
            }else if (!columns[2].children[1].classList.contains("userColor") && columnTr.length == 4 || !columns[2].children[1].classList.contains("iaColor") && columnTr.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[2].children[1].classList.add("userColor");
            columnTr.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[2].children[1].classList.add("iaColor");
            columnTr.push(1);
            }
            }else if (!columns[2].children[0].classList.contains("userColor") && columnTr.length == 5 || !columns[2].children[0].classList.contains("iaColor") && columnTr.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[2].children[0].classList.add("userColor");
            columnTr.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[2].children[0].classList.add("iaColor");
            columnTr.push(1);
            }
            }
            }


            break;
            case "buttonC4":

            if (columnFour.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC4"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }

            } else {
            if (!columns[3].children[5].classList.contains("userColor") && columnFour.length == 0 || !columns[3].children[5].classList.contains("iaColor") && columnFour.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[3].children[5].classList.add("userColor");
            columnFour.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[3].children[5].classList.add("iaColor");
            columnFour.push(1);
            }

            } else if (!columns[3].children[4].classList.contains("userColor") && columnFour.length == 1 || !columns[3].children[4].classList.contains("iaColor") && columnFour.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[3].children[4].classList.add("userColor");
            columnFour.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[3].children[4].classList.add("iaColor");
            columnFour.push(1);
            }

            } else if (!columns[3].children[3].classList.contains("userColor") && columnFour.length == 2 || !columns[3].children[3].classList.contains("iaColor") && columnFour.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[3].children[3].classList.add("userColor");
            columnFour.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[3].children[3].classList.add("iaColor");
            columnFour.push(1);
            }
            }else if (!columns[3].children[2].classList.contains("userColor") && columnFour.length == 3 || !columns[3].children[2].classList.contains("iaColor") && columnFour.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[3].children[2].classList.add("userColor");
            columnFour.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[3].children[2].classList.add("iaColor");
            columnFour.push(1);
            }
            }else if (!columns[3].children[1].classList.contains("userColor") && columnFour.length == 4 || !columns[3].children[1].classList.contains("iaColor") && columnFour.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[3].children[1].classList.add("userColor");
            columnFour.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[3].children[1].classList.add("iaColor");
            columnFour.push(1);
            }
            }else if (!columns[3].children[0].classList.contains("userColor") && columnFour.length == 5 || !columns[3].children[0].classList.contains("iaColor") && columnFour.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[3].children[0].classList.add("userColor");
            columnFour.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[3].children[0].classList.add("iaColor");
            columnFour.push(1);
            }
            }
            }


            break;
            case "buttonC5":

            if (columnFive.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC5"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }

            } else {
            if (!columns[4].children[5].classList.contains("userColor") && columnFive.length == 0 || !columns[4].children[5].classList.contains("iaColor") && columnFive.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[4].children[5].classList.add("userColor");
            columnFive.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[4].children[5].classList.add("iaColor");
            columnFive.push(1);
            }

            } else if (!columns[4].children[4].classList.contains("userColor") && columnFive.length == 1 || !columns[4].children[4].classList.contains("iaColor") && columnFive.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[4].children[4].classList.add("userColor");
            columnFive.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[4].children[4].classList.add("iaColor");
            columnFive.push(1);
            }

            } else if (!columns[4].children[3].classList.contains("userColor") && columnFive.length == 2 || !columns[4].children[3].classList.contains("iaColor") && columnFive.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[4].children[3].classList.add("userColor");
            columnFive.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[4].children[3].classList.add("iaColor");
            columnFive.push(1);
            }
            }else if (!columns[4].children[2].classList.contains("userColor") && columnFive.length == 3 || !columns[4].children[2].classList.contains("iaColor") && columnFive.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[4].children[2].classList.add("userColor");
            columnFive.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[4].children[2].classList.add("iaColor");
            columnFive.push(1);
            }
            }else if (!columns[4].children[1].classList.contains("userColor") && columnFive.length == 4 || !columns[4].children[1].classList.contains("iaColor") && columnFive.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[4].children[1].classList.add("userColor");
            columnFive.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[4].children[1].classList.add("iaColor");
            columnFive.push(1);
            }
            }else if (!columns[4].children[0].classList.contains("userColor") && columnFive.length == 5 || !columns[4].children[0].classList.contains("iaColor") && columnFive.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[4].children[0].classList.add("userColor");
            columnFive.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[4].children[0].classList.add("iaColor");
            columnFive.push(1);
            }
            }
            }


            break;
            case "buttonC6":

            if (columnSix.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC6"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }

            } else {
            if (!columns[5].children[5].classList.contains("userColor") && columnSix.length == 0 || !columns[5].children[5].classList.contains("iaColor") && columnSix.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[5].children[5].classList.add("userColor");
            columnSix.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[5].children[5].classList.add("iaColor");
            columnSix.push(1);
            }

            } else if (!columns[5].children[4].classList.contains("userColor") && columnSix.length == 1 || !columns[5].children[4].classList.contains("iaColor") && columnSix.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[5].children[4].classList.add("userColor");
            columnSix.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[5].children[4].classList.add("iaColor");
            columnSix.push(1);
            }

            } else if (!columns[5].children[3].classList.contains("userColor") && columnSix.length == 2 || !columns[5].children[3].classList.contains("iaColor") && columnSix.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[5].children[3].classList.add("userColor");
            columnSix.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[5].children[3].classList.add("iaColor");
            columnSix.push(1);
            }
            }else if (!columns[5].children[2].classList.contains("userColor") && columnSix.length == 3 || !columns[5].children[2].classList.contains("iaColor") && columnSix.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[5].children[2].classList.add("userColor");
            columnSix.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[5].children[2].classList.add("iaColor");
            columnSix.push(1);
            }
            }else if (!columns[5].children[1].classList.contains("userColor") && columnSix.length == 4 || !columns[5].children[1].classList.contains("iaColor") && columnSix.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[5].children[1].classList.add("userColor");
            columnSix.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[5].children[1].classList.add("iaColor");
            columnSix.push(1);
            }
            }else if (!columns[5].children[0].classList.contains("userColor") && columnSix.length == 5 || !columns[5].children[0].classList.contains("iaColor") && columnSix.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[5].children[0].classList.add("userColor");
            columnSix.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[5].children[0].classList.add("iaColor");
            columnSix.push(1);
            }
            }
            }


            break;
            case "buttonC7":

            if (columnSeven.length == 6){
            console.log("La columna esta llena");

            for (i = 0; i < canPlayIn.length; i++){
            if (canPlayIn[i] === "buttonC7"){
            canPlayIn.splice(i, 1);
            console.log(canPlayIn)
            }
            }

            } else {
            if (!columns[6].children[5].classList.contains("userColor") && columnSeven.length == 0 || !columns[6].children[5].classList.contains("iaColor") && columnSeven.length == 0){

            if (userPlay == true && iaWantPlay == false){
            columns[6].children[5].classList.add("userColor");
            columnSeven.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[6].children[5].classList.add("iaColor");
            columnSeven.push(1);
            }

            } else if (!columns[6].children[4].classList.contains("userColor") && columnSeven.length == 1 || !columns[6].children[4].classList.contains("iaColor") && columnSeven.length == 1){
            if (userPlay == true && iaWantPlay == false){
            columns[6].children[4].classList.add("userColor");
            columnSeven.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[6].children[4].classList.add("iaColor");
            columnSeven.push(1);
            }

            } else if (!columns[6].children[3].classList.contains("userColor") && columnSeven.length == 2 || !columns[6].children[3].classList.contains("iaColor") && columnSeven.length == 2){
            console.log(userPlay, iaWantPlay)
            if (userPlay == true && iaWantPlay == false){
            columns[6].children[3].classList.add("userColor");
            columnSeven.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[6].children[3].classList.add("iaColor");
            columnSeven.push(1);
            }
            }else if (!columns[6].children[2].classList.contains("userColor") && columnSeven.length == 3 || !columns[6].children[2].classList.contains("iaColor") && columnSeven.length == 3){
            if (userPlay == true && iaWantPlay == false){
            columns[6].children[2].classList.add("userColor");
            columnSeven.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[6].children[2].classList.add("iaColor");
            columnSeven.push(1);
            }
            }else if (!columns[6].children[1].classList.contains("userColor") && columnSeven.length == 4 || !columns[6].children[1].classList.contains("iaColor") && columnSeven.length == 4){
            if (userPlay == true && iaWantPlay == false){
            columns[6].children[1].classList.add("userColor");
            columnSeven.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[6].children[1].classList.add("iaColor");
            columnSeven.push(1);
            }
            }else if (!columns[6].children[0].classList.contains("userColor") && columnSeven.length == 5 || !columns[6].children[0].classList.contains("iaColor") && columnSeven.length == 5){
            if (userPlay == true && iaWantPlay == false){
            columns[6].children[0].classList.add("userColor");
            columnSeven.push(0);
            }

            if (userPlay == false && iaWantPlay == true){
            columns[6].children[0].classList.add("iaColor");
            columnSeven.push(1);
            }
            }
            }


            break;
            }

            }

function iaPlay(){
    if (userPlay == false && iaWantPlay == true || userPlay == true && iaWantPlay == true){
        document.querySelector(".whoPlay").innerHTML = "User";
        document.querySelector(".whoPlayTwo").innerHTML = "IA";
        document.querySelector(".whoPlayTwo").style.color = "rgb(255, 0, 0)";
        document.querySelector(".whoPlay").style.color = "rgb(0, 204, 255)";
        randomValue = Math.floor(Math.random() * canPlayIn.length);
        document.querySelector(".whatPlay").innerHTML = ` en la columna ${canPlayIn[randomValue].replace(/\D/g, '')}`
        columnFind(canPlayIn[randomValue]);
        userPlay = false;
        iaWantPlay = false;
    }
}

function checkHorizontalWin(){

        if (columnSeven[0] == 0 && columnSix[0] == 0 && columnFive[0] == 0 && columnFour[0] == 0 ||
        columnSix[0] == 0 && columnFive[0] == 0 && columnFour[0] == 0 && columnTr[0] == 0 ||
        columnFive[0] == 0 && columnFour[0] == 0 && columnTr[0] == 0 && columnTwo[0] == 0 ||
        columnFour[0] == 0 && columnTr[0] == 0 && columnTwo[0] == 0 && columnOne[0] == 0){

        finalGame("User");
        }

        if (columnSeven[1] == 0 && columnSix[1] == 0 && columnFive[1] == 0 && columnFour[1] == 0 ||
        columnSix[1] == 0 && columnFive[1] == 0 && columnFour[1] == 0 && columnTr[1] == 0 ||
        columnFive[1] == 0 && columnFour[1] == 0 && columnTr[1] == 0 && columnTwo[1] == 0 ||
        columnFour[1] == 0 && columnTr[1] == 0 && columnTwo[1] == 0 && columnOne[1] == 0){

        finalGame("User");
        }

        if (columnSeven[2] == 0 && columnSix[2] == 0 && columnFive[2] == 0 && columnFour[2] == 0 ||
        columnSix[2] == 0 && columnFive[2] == 0 && columnFour[2] == 0 && columnTr[2] == 0 ||
        columnFive[2] == 0 && columnFour[2] == 0 && columnTr[2] == 0 && columnTwo[2] == 0 ||
        columnFour[2] == 0 && columnTr[2] == 0 && columnTwo[2] == 0 && columnOne[2] == 0){

        finalGame("User");
        }

        if (columnSeven[3] == 0 && columnSix[3] == 0 && columnFive[3] == 0 && columnFour[3] == 0 ||
        columnSix[3] == 0 && columnFive[3] == 0 && columnFour[3] == 0 && columnTr[3] == 0 ||
        columnFive[3] == 0 && columnFour[3] == 0 && columnTr[3] == 0 && columnTwo[3] == 0 ||
        columnFour[3] == 0 && columnTr[3] == 0 && columnTwo[3] == 0 && columnOne[3] == 0){

        finalGame("User");
        }

        if (columnSeven[4] == 0 && columnSix[4] == 0 && columnFive[4] == 0 && columnFour[4] == 0 ||
        columnSix[4] == 0 && columnFive[4] == 0 && columnFour[4] == 0 && columnTr[4] == 0 ||
        columnFive[4] == 0 && columnFour[4] == 0 && columnTr[4] == 0 && columnTwo[4] == 0 ||
        columnFour[4] == 0 && columnTr[4] == 0 && columnTwo[4] == 0 && columnOne[4] == 0){

        finalGame("User");
        }

        if (columnSeven[5] == 0 && columnSix[5] == 0 && columnFive[5] == 0 && columnFour[5] == 0 ||
        columnSix[5] == 0 && columnFive[5] == 0 && columnFour[5] == 0 && columnTr[5] == 0 ||
        columnFive[5] == 0 && columnFour[5] == 0 && columnTr[5] == 0 && columnTwo[5] == 0 ||
        columnFour[5] == 0 && columnTr[5] == 0 && columnTwo[5] == 0 && columnOne[5] == 0){

        finalGame("User");
        }

        if(columnSeven[0] == 1 && columnSix[0] == 1 && columnFive[0] ==1 && columnFour[0] == 1 ||
        columnSix[0] == 1 && columnFive[0] == 1 && columnFour[0] ==1 && columnTr[0] == 1 ||
        columnFive[0] == 1 && columnFour[0] == 1 && columnTr[0] ==1 && columnTwo[0] == 1 ||
        columnFour[0] == 1 && columnTr[0] == 1 && columnTwo[0] ==1 && columnOne[0] == 1){

        finalGame("IA");
        }

        if (columnSeven[1] == 1 && columnSix[1] == 1 && columnFive[1] == 1 && columnFour[1] == 1 ||
        columnSix[1] == 1 && columnFive[1] == 1 && columnFour[1] == 1 && columnTr[1] == 1 ||
        columnFive[1] == 1 && columnFour[1] == 1 && columnTr[1] == 1 && columnTwo[1] == 1 ||
        columnFour[1] == 1 && columnTr[1] == 1 && columnTwo[1] == 1 && columnOne[1] == 1){

        finalGame("IA");
        }

        if (columnSeven[2] == 1 && columnSix[2] == 1 && columnFive[2] == 1 && columnFour[2] == 1 ||
        columnSix[2] == 1 && columnFive[2] == 1 && columnFour[2] == 1 && columnTr[2] == 1 ||
        columnFive[2] == 1 && columnFour[2] == 1 && columnTr[2] == 1 && columnTwo[2] == 1 ||
        columnFour[2] == 1 && columnTr[2] == 1 && columnTwo[2] == 1 && columnOne[2] == 1){

        finalGame("IA");
        }

        if (columnSeven[3] == 1 && columnSix[3] == 1 && columnFive[3] == 1 && columnFour[3] == 1 ||
        columnSix[3] == 1 && columnFive[3] == 1 && columnFour[3] == 1 && columnTr[3] == 1 ||
        columnFive[3] == 1 && columnFour[3] == 1 && columnTr[3] == 1 && columnTwo[3] == 1 ||
        columnFour[3] == 1 && columnTr[3] == 1 && columnTwo[3] == 1 && columnOne[3] == 1){

        finalGame("IA");
        }

        if (columnSeven[4] == 1 && columnSix[4] == 1 && columnFive[4] == 1 && columnFour[4] == 1 ||
        columnSix[4] == 1 && columnFive[4] == 1 && columnFour[4] == 1 && columnTr[4] == 1 ||
        columnFive[4] == 1 && columnFour[4] == 1 && columnTr[4] == 1 && columnTwo[4] == 1 ||
        columnFour[4] == 1 && columnTr[4] == 1 && columnTwo[4] == 1 && columnOne[4] == 1){

        finalGame("IA");
        }

        if (columnSeven[5] == 1 && columnSix[5] == 1 && columnFive[5] == 1 && columnFour[5] == 1 ||
        columnSix[5] == 1 && columnFive[5] == 1 && columnFour[5] == 1 && columnTr[5] == 1 ||
        columnFive[5] == 1 && columnFour[5] == 1 && columnTr[5] == 1 && columnTwo[5] == 1 ||
        columnFour[5] == 1 && columnTr[5] == 1 && columnTwo[5] == 1 && columnOne[5] == 1){

        finalGame("IA");
        }
}

const checkVerticalWin = arr => {
    const prev = {
       element: null,
       count: 0
    };
    for(let i = 0; i < arr.length; i++){
       const { count, element } = prev;
       if(count === 2 && element === arr[i]){
            if (element == 0){
                finalGame("User");
            } else{
                finalGame("IA");
            }
          return true;
       };
       prev.count = element === arr[i] ? count + 1 : count;
       prev.element = arr[i];
    };
    return false;


 };

function finalGame(ganador) {
    clearInterval(checkHorizontalInterval);
    clearInterval(checkVerticalInterval);
    clearInterval(iaPlayInterval);

    displayGame.textContent = "";
    displayGame.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
    displayGame.style.borderRadius = "20px";
    displayGame.style.justifyContent = "center";
    displayGame.style.flexFlow = "column wrap";
    displayGame.style.alignItems = "center";

    const div = document.createElement("div");
    const button = document.createElement("button");

    div.setAttribute("class", "winners");

    if (ganador == "User"){
        div.innerHTML = `Felicidades ${ganador} ganaste, gracias por jugar`
    } else {
        div.innerHTML = `Lamentablemente gano la ${ganador}, gracias por jugar`
    }


    button.setAttribute("type", "button");
    button.setAttribute("class", "playAgain");
    button.innerHTML = "PLAY AGAIN"

    displayGame.append(div, button);

    button.addEventListener("click", ()=>{
        window.location.reload()
    });

}


checkHorizontalInterval = setInterval(checkHorizontalWin, 100);

checkVerticalInterval = setInterval(function(){
    checkVerticalWin(columnOne);
    checkVerticalWin(columnTwo);
    checkVerticalWin(columnTr);
    checkVerticalWin(columnFour);
    checkVerticalWin(columnFive);
    checkVerticalWin(columnSix);
    checkVerticalWin(columnSeven);
}, 100)

iaPlayInterval = setInterval(iaPlay, 2000);